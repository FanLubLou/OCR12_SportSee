import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../assets/style/main.css';

/**
 * Composant de graphique à barres pour afficher les données de poids et de calories brûlées.
 *
 * @export
 * @class BarChartSportSee
 * @extends {PureComponent}
 */
export default class BarChartSportSee extends PureComponent {
  /**
   * Rend le composant graphique à barres.
   *
   * @returns {JSX.Element} Un conteneur réactif contenant un graphique à barres.
   */
  render() {
    const { data } = this.props;
    
    /**
     * Composant personnalisé pour l'affichage des informations dans l'infobulle.
     *
     * @param {Object} props - Les propriétés passées au composant Tooltip.
     * @param {boolean} props.active - Indique si l'infobulle est active.
     * @param {Array} props.payload - Les données de la session affichées dans l'infobulle.
     * @returns {JSX.Element|null} L'infobulle avec les valeurs de poids et de calories ou null si inactive.
     */
    function CustomTooltip({ active, payload }) {
      if (active && payload) {
        return (
          <div className="tooltipContainerBarChart">
            <p>{`${payload[0].value}Kg`}</p>
            <p>{`${payload[1].value}kCal`}</p>
          </div>
        );
      }
      return null;
    }

    const legendFormatter = (value, entry) => {
      return <span style={{ color: '#000' }}>{value}</span>;
    };

    return (
      <ResponsiveContainer
        width="100%"
        height="100%">
        
        <BarChart
          data={data}
          barGap={8}
          margin={{
            top: 60,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
         <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: '14px', fontWeight: '500' }}
            dy={15}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            type="number"
            tick={{ color: '9B9EAC', fontSize: '14px', fontWeight: '500' }}
            domain={["dataMin - 1", "dataMax + 2"]}
          />
          <YAxis
            yAxisId="calories"
            hide={true}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            legendType="circle"
            name="Poids (Kg)"
            unit="Kg"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={8}
            legendType="circle"
            name="Calories brûlées (kCal)"
            unit="Kcal"
            radius={[20, 20, 0, 0]}
          />
          <Tooltip
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            content={<CustomTooltip />}
          />
          <Legend
            verticalAlign="top"
            align='right'
            iconSize={10}
            wrapperStyle={{
              top: "20px",
              right: "30px",
              fontSize: "14px"
            }}
            formatter={legendFormatter}
          />
          <text
            className='barChartTitle'
            x={70}
            y={30}
          >
            Activité quotidienne
          </text>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
