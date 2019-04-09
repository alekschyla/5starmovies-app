import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { data, colors } from './dataForChart2';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, index, percent
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${data[index].type} : ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class Chart2 extends React.Component {
    render() {
        return (
            <PieChart width={600} height={400}>
                <Pie
                    data={data}
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
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        )
    }
}

export default Chart2;