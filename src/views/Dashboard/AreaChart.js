import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const data = [
    {
        "day": "Monday",
        "user-count": 10,
    },
    {
        "day": "Tuesday",
        "user-count": 30,
    },
    {
        "day": "Wednesday",
        "user-count": 20,
    },
    {
        "day": "Thursday",
        "user-count": 40,
    },
    {
        "day": "Friday",
        "user-count": 50,
    },
    {
        "day": "Saturday",
        "user-count": 70,
    },
    {
        "day": "Sunday",
        "user-count": 60,
    },

]

class Chart1 extends React.Component {
    render() {
        return (
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day" />
                <YAxis dataKey="user-count"/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="user-count" stroke="#8884d8" fillOpacity={1} fill="url(#color)" />
            </AreaChart>

        )
    }
}

export default Chart1;