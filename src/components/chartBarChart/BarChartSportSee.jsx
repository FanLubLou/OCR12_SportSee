import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../assets/style/main.css';

export default class BarChartSportSee extends PureComponent {
  render() {
    const { data } = this.props; 

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

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          margin={{
              top: 100,
              right: 40,
              left: 40,
              bottom: 40,
          }}
      >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={true}
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
          <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} content={<CustomTooltip />} />
          <Legend verticalAlign="top" align='right' iconSize={10} wrapperStyle={{ top: "2rem", right: 0 }} />          
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
