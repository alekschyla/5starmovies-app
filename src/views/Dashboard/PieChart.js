import React from 'react';

import { PieChart as Chart, Pie, Cell, Tooltip } from 'recharts';

const colors = ['green','yellow','yellowgreen'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, type, percent
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${type} : ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class Chart2 extends React.Component {
    render() {
        return (
            <Chart width={600} height={400}>
                <Pie
                    data={this.props.data}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {
                        this.props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                <Tooltip />
            </Chart>
        )
    }
}

export default Chart2;