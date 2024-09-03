import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Couleurs utilisées pour le graphique en secteurs.
 *
 * @type {string[]}
 */
const COLORS = ['#FF0000', '#FFFFFF'];

/**
 * Composant pour afficher un graphique en secteurs avec le score d'un utilisateur.
 *
 * @export
 * @class PieChartSportSee
 * @extends {PureComponent}
 */
export default class PieChartSportSee extends PureComponent {
  /**
   * Rend le composant graphique en secteurs.
   *
   * @returns {JSX.Element} Le rendu du graphique en secteurs avec les données de score.
   */
  render() {
    const { data } = this.props;
    const todayScore = data.todayScore || data.score;

   

    // Préparation des données à afficher dans le graphique en secteurs.
    const scoreData = [
      { name: 'Score', value: todayScore },
      { name: 'Reste', value: 1 - todayScore }
    ];

    return (
      <ResponsiveContainer width="100%" height="100%" className="pieChartBG">
        <PieChart width="100%" height="100%">
          <circle cx="50%" cy="50%" r="30%" fill="#fff" />
          <Pie
            data={scoreData}
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {scoreData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? COLORS[0] : 'transparent'}
                cornerRadius="50%"
              />
            ))}
          </Pie>
          <text
            x={20}
            y={20}
            fill="#20253A"
            fontWeight={500}
            textAnchor="left"
            dominantBaseline="central">
            <tspan fontSize="15">Score</tspan>
          </text>
          <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
            <tspan x={"50%"} y={"45%"} fontSize="clamp(12px, 2vw, 26px)">{todayScore * 100}%</tspan>
            <tspan x={"50%"} y={"54%"} fontSize="clamp(12px, 1.5vw, 16px)" fill='#74798C'>de votre</tspan>
            <tspan x={"50%"} y={"62%"} fontSize="clamp(12px, 1.5vw, 16px)" fill='#74798C'>objectif</tspan>
          </text>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
