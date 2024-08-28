import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Composant de graphique radar pour afficher les performances sportives.
 *
 * @export
 * @class RadarSportSee
 * @extends {PureComponent}
 * 
 * @typedef {Object} DataItem
 * @property {string} kind - Le type de performance (ex. : "cardio", "endurance").
 * @property {number} value - La valeur de la performance.
 * 
 * @prop {DataItem[]} data - Les données à afficher dans le graphique radar.
 */
export default class RadarSportSee extends PureComponent {
  
  /**
   * Rendu du composant.
   *
   * @returns {JSX.Element} Le graphique radar avec les données fournies.
   */
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%" className='radarChartBG'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }} startAngle={30} endAngle={-330}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            axisLine={false}
            dataKey="kind"
            tickLine={false}
            tick={{
              dy: 4,
              fill: '#fff',
              fontSize: 12,
            }}
          />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
