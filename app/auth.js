import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import { authConfig } from './authconfig'
import { connectToDB } from './lib/utils'
import { User } from './lib/models'
import bcrypt from 'bcrypt'

const login = async (crdentials) => {
    try {
        connectToDB()
        const user = await User.findOne({ username: crdentials.username })

        if (!user) throw new Error("user not found")
        const isMatch = await bcrypt.compare(crdentials.password, user.password)

        if (!isMatch) throw new Error("password not match")
        return user
    } catch (error) {
        console.log(error)
        throw new Error("unable to login")
    }
}
export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ]

})