import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Composant de graphique en ligne pour afficher la durée moyenne des sessions.
 *
 * @export
 * @class LineChartSportSee
 * @extends {PureComponent}
 */
export default class LineChartSportSee extends PureComponent {
  
  /**
   * Render le composant graphique en ligne.
   *
   * @returns {JSX.Element} Un conteneur réactif contenant un graphique en ligne.
   */
  render() {
    const { data } = this.props;

    /**
     * Composant personnalisé pour l'affichage des informations dans l'infobulle.
     *
     * @param {Object} props - Les propriétés passées au composant Tooltip.
     * @param {boolean} props.active - Indique si l'infobulle est active.
     * @param {Array} props.payload - Les données de la session affichées dans l'infobulle.
     * @returns {JSX.Element|null} L'infobulle avec la durée de session ou null si inactive.
     */
    function CustomTooltip({ active, payload }) {
      if (active && payload) {
        return <div className='tooltipContainerLineChart'>{`${payload[0].value} min`}</div>;
      }
      return null;
    }

    return (
      <ResponsiveContainer width="100%" height="100%" className="lineChart">
        <LineChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <text
            x={40}
            y={40}
            fill="white"
            opacity={0.5}
            fontWeight={500}
            textAnchor="left"
            dominantBaseline="central"
          >
            <tspan x={30} y={40} fontSize="15">
              Durée moyenne des
            </tspan>
            <tspan x={30} y={65} fontSize="15">
              sessions
            </tspan>
          </text>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: "clamp(20px, 2vw, 24px)",
              fontWeight: "500",
              fill: "#fff",
              opacity: "0.5",
            }}
          />
          <YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 10,
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FBFBFB"
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.3)",
              strokeWidth: 10,
              r: 5,
            }}
          />          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
