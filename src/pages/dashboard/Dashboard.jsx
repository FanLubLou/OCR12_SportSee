import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import BarChartSportSee from "../../components/chartBarChart/BarChartSportSee.jsx";
import RadarChartSportSee from "../../components/chartRadarChart/RadarChartSportSee.jsx";
import PieChartSportSee from "../../components/chartPieChart/PieChartSportSee.jsx";
import LineChartSportSee from "../../components/chartLineChart/LineChartSportSee.jsx";
import Card from "../../components/Card/Card.jsx";
import '../../assets/style/main.css';
import dataService from "../../services/dataService.js";
import calories from "../../assets/icons/calories-icon.png";
import glucid from "../../assets/icons/glucid-icon.png";
import lipid from "../../assets/icons/lipid-icon.png";
import protein from "../../assets/icons/protein-icon.png";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/mockedData.js';
import { formatUserActivityData, formatUserAverageSessions, formatUserPerformanceData } from '../../services/dataFormatter.js';
import { USE_MOCK_DATA } from '../../config.js';

/**
 * Composant Dashboard qui affiche les données utilisateur sous forme de graphiques et de cartes.
 *
 * @export
 * @returns {JSX.Element} Le composant Dashboard.
 */
export default function Dashboard() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const userId = parseInt(id); 

    
    const [activityData, setActivityData] = useState([]);
    const [averageSessionsData, setAverageSessionsData] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);    
    const [userData, setUserData] = useState([]);    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Fonction pour récupérer les données utilisateur à partir de l'API ou des données mockées.
     *
     * @async
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (USE_MOCK_DATA) {
                    // Récupération des données mockées
                    const mockedUserDataResponse = USER_MAIN_DATA.find(user => user.id === userId);
                    if (!mockedUserDataResponse) throw new Error("Utilisateur non trouvé dans les données mockées");
                    
                    const mockedUserActivity = formatUserActivityData(USER_ACTIVITY.find(user => user.userId === userId));
                    const mockedAverageSessions = formatUserAverageSessions(USER_AVERAGE_SESSIONS.find(user => user.userId === userId));
                    const mockedUserPerformance = formatUserPerformanceData(USER_PERFORMANCE.find(user => user.userId === userId).data);

                    setActivityData(mockedUserActivity.data.sessions);
                    setAverageSessionsData(mockedAverageSessions.data.sessions);
                    setPerformanceData(mockedUserPerformance);
                    setUserData(mockedUserDataResponse);
                } else {
                    // Récupération des données du backend
                    const [activityResponse, averageSessionsResponse, performanceResponse, userDataResponse] = await Promise.all([
                        dataService.getUserActivity(userId),
                        dataService.getUserAverageSessions(userId),
                        dataService.getUserPerformance(userId),
                        dataService.getUserData(userId),
                    ]);

                    setActivityData(activityResponse.data.sessions);
                    setAverageSessionsData(averageSessionsResponse.data.sessions);
                    setPerformanceData(performanceResponse);
                    setUserData(userDataResponse.data);
                } 
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                navigate("/Error"); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, navigate]); 

    if (loading) return <p>Loading...</p>;
    
if (error) return (
        <div className="error-message">
            <h2>Une erreur s'est produite lors du chargement des données</h2>
            <p>{error.message || "Une erreur inconnue s'est produite."}</p>
        </div>
    );

    return (
        <div className="headerChartsAndIconContainer">
            <div className="header">
                <Header value={userData.userInfos?.firstName} />
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
                            <PieChartSportSee data={userData} />
                        </div>
                    </div>
                </div>
                <div className="cardsContainer">
                    <Card value={userData.keyData?.calorieCount} title="Calories" img={calories} unit="kCal" />
                    <Card value={userData.keyData?.proteinCount} title="Proteines" img={protein} unit="g" />
                    <Card value={userData.keyData?.carbohydrateCount} title="Glucides" img={glucid} unit="g" />
                    <Card value={userData.keyData?.lipidCount} title="Lipides" img={lipid} unit="g" />
                </div>
            </div>
        </div>
    );
}
