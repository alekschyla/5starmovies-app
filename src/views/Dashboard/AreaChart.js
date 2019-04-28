import React from 'react';
import { AreaChart as Chart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Label } from 'recharts';

class AreaChart extends React.Component {
    render() {
        return (
            <Chart width={600} height={400} data={this.props.data}
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
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="liczba użytkowników" stroke="#71816D" fillOpacity={1} fill="url(#color)" />
            </Chart>
        )
    }
}

export default AreaChart;
