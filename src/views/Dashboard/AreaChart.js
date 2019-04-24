import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Label, ResponsiveContainer } from 'recharts';
import { data } from './dataForChart1'

class Chart1 extends React.Component {
    render() {
        return (
            <ResponsiveContainer width='100%' height={500}>
            <AreaChart  data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#71816D" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#71816D" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day">
                <Label value="Liczba aktywnych użytkowników" offset={350} position="top" />
                </XAxis>
                <YAxis dataKey="liczba użytkowników" />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Area type="monotone" dataKey="liczba użytkowników" stroke="#71816D" fillOpacity={1} fill="url(#color)" />
            </AreaChart>
            </ResponsiveContainer>

        )
    }
}

export default Chart1;