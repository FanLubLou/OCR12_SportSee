import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataService from './dataService';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockedData';
import { formatUserActivityData, formatUserAverageSessions, formatUserPerformanceData } from './dataFormatter';
import { USE_MOCK_DATA } from '../config.js';

/**
 * Composant DataProvider.
 * 
 * Ce composant est responsable de fournir les données utilisateur en fonction du type de données requis (`dataType`).
 * Les données sont soit récupérées à partir du backend, soit extraites des données mockées.
 * Le composant gère également les états de chargement et d'erreur lors de la récupération des données.
 *
 * @param {{ dataType: string }} param0 - Les propriétés du composant.
 * @param {string} param0.dataType - Le type de données à récupérer ("average-sessions", "performance", ou "activity").
 * @returns {JSX.Element} Un élément JSX qui affiche les données formatées ou un message de chargement/d'erreur.
 */
function DataProvider({ dataType }) {
    const { id } = useParams();
    const userId = parseInt(id, 10);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedData;
                
                // Vérifie si l'utilisateur est dans la liste des utilisateurs mockés
                if (USE_MOCK_DATA) {
                    switch (dataType) {
                        case 'average-sessions':
                            fetchedData = formatUserAverageSessions(USER_AVERAGE_SESSIONS[userId - 1]);
                            break;
                        case 'performance':
                            fetchedData = formatUserPerformanceData(USER_PERFORMANCE[userId - 1].data);
                            break;
                        case 'activity':
                            fetchedData = formatUserActivityData(USER_ACTIVITY[userId - 1]);
                            break;
                        default:
                            throw new Error("Invalid data type");
                    }
                } else {
                    switch (dataType) {
                        case 'average-sessions':
                            fetchedData = await dataService.getUserAverageSessions(userId);
                            break;
                        case 'performance':
                            fetchedData = await dataService.getUserPerformance(userId);
                            break;
                        case 'activity':
                            fetchedData = await dataService.getUserActivity(userId);
                            break;
                        default:
                            throw new Error("Invalid data type");
                    }
                }

                setData(fetchedData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, dataType]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

export default DataProvider;
