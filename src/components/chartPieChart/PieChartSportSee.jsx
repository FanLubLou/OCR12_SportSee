import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

export default class PieChartSportSee extends PureComponent {
  render() {
    // Extraction de todayScore des props
    const { data } = this.props;
    const todayScore = data.data.todayScore || data.data.score;
    const COLORS = ['#FF0000', '#FFFFFF'];

    console.log('todayScore reçu par mon composant: ', todayScore);

    // Préparation des données pour le graphique
    const scoreData = [
      { name: 'Score', value: todayScore },
      { name: 'Reste', value: 1 - todayScore }
    ];

    console.log('scoreData dans mon composant: ', scoreData);

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
