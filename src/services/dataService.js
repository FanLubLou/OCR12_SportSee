import { formatUserActivityData, formatUserAverageSessions, formatUserPerformanceData } from './dataFormatter';

/**
 * Base URL de l'API pour récupérer les données utilisateur.
 *
 * @type {string}
 */
const BASE_URL = 'http://localhost:3000/user';

/**
 * Service pour récupérer et formater les données utilisateur depuis l'API.
 *
 * @type {{
 *   getUserData: (userId: number) => Promise<object>,
 *   getUserActivity: (userId: number) => Promise<object>,
 *   getUserAverageSessions: (userId: number) => Promise<object>,
 *   getUserPerformance: (userId: number) => Promise<object>
 * }}
 */
const dataService = {
    /**
     * Récupère les données principales de l'utilisateur.
     *
     * @param {number} userId - L'identifiant de l'utilisateur.
     * @returns {Promise<object>} Un objet contenant les données principales de l'utilisateur.
     * @throws {Error} Lance une erreur si la réponse du réseau n'est pas correcte.
     */
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

    /**
     * Récupère et formate les données d'activité quotidienne de l'utilisateur.
     *
     * @param {number} userId - L'identifiant de l'utilisateur.
     * @returns {Promise<object>} Un objet contenant les données d'activité formatées de l'utilisateur.
     * @throws {Error} Lance une erreur si la réponse du réseau n'est pas correcte.
     */
    getUserActivity: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/activity`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataUserActivity = await response.json();
            const data = dataUserActivity.data;
            return formatUserActivityData(data);
        } catch (error) {
            console.error("Error fetching user activity:", error);
            throw error;
        }
    },

    /**
     * Récupère et formate les données des sessions moyennes de l'utilisateur.
     *
     * @param {number} userId - L'identifiant de l'utilisateur.
     * @returns {Promise<object>} Un objet contenant les sessions moyennes formatées de l'utilisateur.
     * @throws {Error} Lance une erreur si la réponse du réseau n'est pas correcte.
     */
    getUserAverageSessions: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataAverageSession = await response.json();
            const data = dataAverageSession.data;
            return formatUserAverageSessions(data);
        } catch (error) {
            console.error("Error fetching user average sessions:", error);
            throw error;
        }
    },

    /**
     * Récupère et formate les données de performance de l'utilisateur.
     *
     * @param {number} userId - L'identifiant de l'utilisateur.
     * @returns {Promise<object>} Un objet contenant les données de performance formatées de l'utilisateur.
     * @throws {Error} Lance une erreur si la réponse du réseau n'est pas correcte.
     */
    getUserPerformance: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/${userId}/performance`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataPerformance = await response.json();
            const data = dataPerformance.data.data;
            return formatUserPerformanceData(data);
        } catch (error) {
            console.error("Error fetching user performance:", error);
            throw error;
        }
    }
};

export default dataService;
