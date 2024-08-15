import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
const COLORS = ['#0088FE', '#00C49F'];

/**
 * ${1:Description placeholder}
 *
 * @export
 * @class PieChartSportSee
 * @typedef {PieChartSportSee}
 * @extends {PureComponent}
 */
export default class PieChartSportSee extends PureComponent {
  /**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
render() {
    
    const { data } = this.props;
    const todayScore = data.todayScore || data.score;
    const COLORS = ['#FF0000', '#FFFFFF'];

    
    const scoreData = [
      { name: 'Score', value: todayScore },
      { name: 'Reste', value: 1 - todayScore }
    ];

    

    return (
      <ResponsiveContainer width="100%" height="100%" className="pieChart">
        <PieChart width={400} height={400}>
        <text x={40} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
          <tspan fontSize="15">Score</tspan>
        </text>
          <circle cx="50%" cy="50%" r="90" fill="#fff" />
        <Pie
          data={scoreData}          
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={450}
        >
          {scoreData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? COLORS[0] : 'transparent'}
              cornerRadius="50%"/>
          ))}
        </Pie>        
        <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
                        <tspan x={"50%"} y={"45%"} fontSize="26">{todayScore * 100}%</tspan>
                        <tspan x={"50%"} y={"54%"} fontSize="16" fill='#74798C'>de votre</tspan>
                        <tspan x={"50%"} y={"62%"} fontSize="16" fill='#74798C'>objectif</tspan>
                    </text>
        </PieChart>
        </ResponsiveContainer>
    );
  }
}
