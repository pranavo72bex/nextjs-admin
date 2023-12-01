"use client"
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
            name: "Sun",
            visit: 4000,
            click: 2300,

        },
        {
            name: "Mon",
            visit: 2000,
            click: 1800,

        },
        {
            name: "Tue",
            visit: 5000,
            click: 3500,

        },
        {
            name: "Wed",
            visit: 3500,
            click: 1800,

        },
        {
            name: "Thu",
            visit: 2100,
            click: 1900,

        },
        {
            name: "Fri",
            visit: 3400,
            click: 3000,

        },
        {
            name: "Sat",
            visit: 10000,
            click: 4000,

        }
    ]
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart