/**
 * Formate les données d'activité utilisateur.
 *
 * Cette fonction prend en entrée des données d'activité brute et les transforme
 * en un format utilisable par l'application. Chaque session se voit attribuer
 * un jour du mois (numérique).
 *
 * @param {{ sessions: { day: string, [key: string]: any }[] }} data - Les données d'activité utilisateur à formater.
 * @returns {{ data: { sessions: { day: number, [key: string]: any }[] } }} - Les données formatées avec les sessions modifiées.
 */
export const formatUserActivityData = (data) => {
    const formattedSessions = data.sessions.map(session => {
        const date = new Date(session.day);
        return {
            ...session,
            day: date.getDate() 
        };
    });

    return {
        data: {
            ...data.data,
            sessions: formattedSessions
        }
    };
};

/**
 * Formate les données de sessions moyennes de l'utilisateur.
 *
 * Cette fonction prend en entrée des données de sessions moyennes brutes et les transforme
 * en un format utilisable par l'application. Les jours sont représentés par des lettres.
 *
 * @param {{ sessions: { day: number, sessionLength: number }[] }} data - Les données de sessions moyennes à formater.
 * @returns {{ data: { sessions: { day: string, sessionLength: number }[] } }} - Les données formatées avec les jours représentés par des lettres.
 */
export const formatUserAverageSessions = (data) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];

    const formattedSessions = data.sessions.map((session, index) => {
        const dayIndex = session.day - 1;
        if (dayIndex < 0 || dayIndex >= days.length) {
            throw new Error('Invalid day value');
        }
        return {
            day: days[dayIndex],
            sessionLength: session.sessionLength
        };
    });

    return {
        data: {
            ...data.data,
            sessions: formattedSessions
        }
    };
};

/**
 * Formate les données de performance de l'utilisateur.
 *
 * Cette fonction prend en entrée des données de performance brutes et les transforme
 * en un format utilisable par l'application. Les types de performance sont traduits en français.
 *
 * @param {{ value: number, kind: number }[] } data - Les données de performance à formater.
 * @returns {{ value: number, kind: string }[] } - Les données formatées avec les types de performance traduits.
 */
export const formatUserPerformanceData = (data) => {
    const translate = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    };

    const translatedData = data.map(item => ({
        value: item.value,
        kind: translate[item.kind],
    }));

    return translatedData;
};
