import React from 'react';

import { PieChart as Chart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const colors = ['yellow', 'orange', 'lime', 'yellowgreen', 'green'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, type, value
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {value !== 0 ? `${type} : ${(percent * 100).toFixed(0)}%` : null}
        </text>
    );
};

class PieChart extends React.Component {
    render() {
        return (
            <ResponsiveContainer width='100%' height={500}>
            <Chart width={600} height={400}>
                <Pie
                    data={this.props.data}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={180}
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {
                        this.props.data ? this.props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                            : null
                    }
                </Pie>
                <Tooltip />
            </Chart>
            </ResponsiveContainer>
        )
    }
}

export default PieChart;