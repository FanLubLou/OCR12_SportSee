import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataService from './dataService';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockedData';
import { formatUserActivityData, formatUserAverageSessions, formatUserPerformanceData } from './dataFormatter';

/**
 * ${1:Description placeholder}
 *
 * @param {{ dataType: any; }} param0
 * @param {${2:*}} param0.dataType
 * @returns {${3:*}\}
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
                if ([1, 2, 3, 4, 5, 6].includes(userId)) {
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
