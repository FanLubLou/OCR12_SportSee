import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import BarChartSportSee from "../../components/chartBarChart/BarChartSportSee.jsx";
import RadarChartSportSee from "../../components/chartRadarChart/RadarChartSportSee.jsx";
import PieChartSportSee from "../../components/chartPieChart/PieChartSportSee.jsx";
import LineChartSportSee from "../../components/chartLineChart/LineChartSportSee.jsx";
import Icon from "../../components/Icons/Icon.jsx";
import '../../assets/style/main.css';
import dataService from "../../services/dataService.js";

export default function Dashboard() {
    const userId = 12;  
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);    
    const [UserData, setUserData] = useState([]);    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [activityResponse, averageSessionsResponse, performanceResponse, UserDataResponse] = await Promise.all([
                    dataService.getUserActivity(userId),
                    dataService.getUserAverageSessions(userId),
                    dataService.getUserPerformance(userId),
                    dataService.getUserData(userId),

                ]);
            
                console.log("Activity Response_dashBoard:", activityResponse);
                console.log("Average Sessions Response_dashBoard:", averageSessionsResponse);
                console.log("Performance Response_dashBoard:", performanceResponse);
                console.log("UserData Response_dashBoard:", UserDataResponse);
               
                setActivityData(activityResponse.data.sessions);
                setAverageSessionsData(averageSessionsResponse.data.sessions);
                setPerformanceData(performanceResponse);
                setUserData(UserDataResponse);

               

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data de Dashboard: {error}</p>;

    console.log('userData de mon Dashboard', UserData);
        
    return (
        <div className="headerChartsAndIconContainer">
            <div className="header">
                <Header />
            </div>
            <div className="chartsAndIconsContainer">
                <div className="chartsContainer">
                    <div className="largeChart">
                        <BarChartSportSee data={activityData} />
                    </div>
                    <div className="smallCharts">
                        <div className="LineChart smallChart">
                            <LineChartSportSee data={averageSessionsData} />
                        </div>
                        <div className="RadarChart smallChart">
                            <RadarChartSportSee data={performanceData} />
                        </div>
                        <div className="PieChart smallChart">
                            <PieChartSportSee data={UserData} />
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
