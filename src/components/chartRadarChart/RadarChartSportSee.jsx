import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default class RadarSportSee extends PureComponent {
  
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
