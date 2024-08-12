import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import BarChartSportSee from "../../components/chartBarChart/BarChartSportSee.jsx";
import RadarChartSportSee from "../../components/chartRadarChart/RadarChartSportSee.jsx";
import PieChartSportSee from "../../components/chartPieChart/PieChartSportSee.jsx";
import LineChartSportSee from "../../components/chartLineChart/LineChartSportSee.jsx";
import Card from "../../components/Card/Card.jsx";
import '../../assets/style/main.css';
import dataService from "../../services/dataService.js";
import calories from "../../assets/icons/calories-icon.png"
import glucid from "../../assets/icons/glucid-icon.png"
import lipid from "../../assets/icons/lipid-icon.png"
import protein from "../../assets/icons/protein-icon.png"
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/mockedData.js'
import { formatMockedUserActivityData, formatMockedUserAverageSessions, formatMockedUserPerformanceData } from '../../services/dataFormatter.js';



export default function Dashboard() {
    const userId = useParams().id; 
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);    
    const [UserData, setUserData] = useState([]);    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (userId == 12 || userId == 18) {
                try {
                    const [activityResponse, averageSessionsResponse, performanceResponse, UserDataResponse] = await Promise.all([
                            dataService.getUserActivity(userId),
                            dataService.getUserAverageSessions(userId),
                            dataService.getUserPerformance(userId),
                            dataService.getUserData(userId),
                            
                        ]);
                    
                    // console.log("Activity Response_dashBoard:", activityResponse);
                    // console.log("Average Sessions Response_dashBoard:", averageSessionsResponse);
                    // console.log("Performance Response_dashBoard:", performanceResponse);
                    // console.log("UserData Response_dashBoard:", UserDataResponse);                                                      
                    
                    setActivityData(activityResponse.data.sessions);
                    setAverageSessionsData(averageSessionsResponse.data.sessions);
                    setPerformanceData(performanceResponse);
                    setUserData(UserDataResponse.data);
                    
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError(error);
                    setLoading(false);
                }
                
            } else {
                try {
                    const [ mockedUserDataResponse, mockedUserActivity, mockedAverageSessions, mockedUserPerformance] = await Promise.all([
                            USER_MAIN_DATA[3],
                            USER_ACTIVITY[3],
                            USER_AVERAGE_SESSIONS[3],
                            USER_PERFORMANCE[3].data,
                        ]);
                    
                    // console.log("mockedUserDataResponse:", mockedUserDataResponse);
                    // console.log("mockedUserActivity:", mockedUserActivity);
                    // console.log("mockedAverageSessions:", mockedAverageSessions);
                    // console.log("mockedUserPerformance:", mockedUserPerformance);

                    const formatedMockedUserActivity = formatMockedUserActivityData(mockedUserActivity);
                    const formatedMockedAverageSessions = formatMockedUserAverageSessions(mockedAverageSessions);
                    const formatedMockedPerformance = formatMockedUserPerformanceData(mockedUserPerformance);

                    console.log('formatedMockedPerformance :', formatedMockedPerformance);                   
                  
                    setActivityData(formatedMockedUserActivity.data.sessions);
                    setAverageSessionsData(formatedMockedAverageSessions.data.sessions);
                    setPerformanceData(formatedMockedPerformance);
                    setUserData(mockedUserDataResponse);
                    
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError(error);
                    setLoading(false);
                }
                

            };
        };    

        fetchData();
    }, [userId]); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data de Dashboard: {error}</p>;

    
        
    return (
        <div className="headerChartsAndIconContainer">
            <div className="header">
                <Header value={UserData.userInfos.firstName} />
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
                <div className="cardsContainer">
                <Card
                    value={UserData.keyData.calorieCount}
                    title="Calories"
                    img={calories}
                    unit="kCal"
                />
                <Card
                    value={UserData.keyData.proteinCount}
                    title="Proteines"
                    img={protein}
                    unit="g"
                />
                <Card
                    value={UserData.keyData.carbohydrateCount}
                    title="Glucides"
                    img={glucid}
                    unit="g"
                />
                <Card
                    value={UserData.keyData.lipidCount}
                    title="Lipides"
                    img={lipid}
                    unit="g"
                />
                </div>
            </div>
        </div>
    )
}
