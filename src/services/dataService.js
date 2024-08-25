import { formatUserActivityData, formatUserAverageSessions, formatUserPerformanceData } from './dataFormatter';


/**
 * ${1:Description placeholder}
 *
 * @type {"http://localhost:3000/user"}
 */
const BASE_URL = 'http://localhost:3000/user';

/**
 * ${1:Description placeholder}
 *
 * @type {{ getUserData: (userId: any) => unknown; getUserActivity: (userId: any) => unknown; getUserAverageSessions: (userId: any) => unknown; getUserPerformance: (userId: any) => unknown; }\}
 */
const dataService = {
    getUserData: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }            
            return await response.json();
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    },

    getUserActivity: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/activity`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataUserActivity = await response.json();
            const data = dataUserActivity.data
            return formatUserActivityData(data);
        } catch (error) {
            console.error("Error fetching user activity:", error);
            throw error;
        }
    },
    
    getUserAverageSessions: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataAverageSession = await response.json();
            const data = dataAverageSession.data
            return formatUserAverageSessions(data);
        } catch (error) {
            console.error("Error fetching user average sessions:", error);
            throw error;
        }
    },

    getUserPerformance: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/performance`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataPerformance = await response.json();
            const data = dataPerformance.data.data
            return formatUserPerformanceData(data);
            
        } catch (error) {
            console.error("Error fetching user performance:", error);
            throw error;
        }
    }
};

export default dataService;
