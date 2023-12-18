export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callback: {
        authorized({ auth, request }) {
            const isLoggedIn = auth?.user
            const inOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
            if (inOnDashboard) {
                if (isLoggedIn) return true
                return false
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', request.nextUrl))
            }
            return true
        }
    }
}