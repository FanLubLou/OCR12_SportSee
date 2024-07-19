import Header from "../../components/header/Header.jsx";
import BarChart from "../../components/chartBarChart/BarChartSportSee.jsx";
import RadarChart from "../../components/chartRadarChart/RadarChartSportSee.jsx";
import PieChart from "../../components/chartPieChart/PieChartSportSee.jsx";
import LineChart from "../../components/chartLineChart/LineChartSportSee.jsx";
import Icon from "../../components/Icons/Icon.jsx";
import '../../assets/style/main.css';

export default function dashboard() {
  return (  
      <div className="headerChartsAndIconContainer">
        <div className="header">
          <Header />
        </div>
        <div className="chartsAndIconsContainer">
          <div className="chartsContainer">
            <div className="largeChart">
              <BarChart/>
            </div>
            <div className="smallCharts">
              <div className="LineChart smallChart">
                <LineChart/>
              </div>
              <div className="RadarChart smallChart">
                <RadarChart/>
              </div>
              <div className="PieChart smallChart">
                <PieChart/>
              </div>    
            </div>
          </div>
          <div className="IconsContainer">
            <Icon className="Icon"/>
            <Icon className="Icon"/>
            <Icon className="Icon"/>
            <Icon className="Icon"/>
          </div>
          </div>
      </div>
      
  )
}
