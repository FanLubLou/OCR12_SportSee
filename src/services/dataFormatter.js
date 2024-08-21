/**
 * ${1:Description placeholder}
 *
 * @param {${2:*}} data
 * @returns {{ data: any; }\}
 */
export const formatUserActivityData = (data) => {
    // if (!data || !data.data || !data.data.sessions) {
    //     throw new Error('Invalid data format');
    // }

    const formattedSessions = data.sessions.map(session => {
        const date = new Date(session.day);
        return {
            ...session,
            day: date.getDate() 
        };
    });

    return {
        // ...data,
        data: {
            ...data.data,
            sessions: formattedSessions
        }
    };
};


/**
 * ${1:Description placeholder}
 *
 * @param {${2:*}} data
 * @returns {{ data: any; }\}
 */
export const formatUserAverageSessions = (data) => {
    // if (!data || !data.data || !data.data.sessions || !Array.isArray(data.data.sessions)) {
    //     throw new Error('Invalid data format');
    // }

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
        // ...data,
        data: {
            ...data.data,
            sessions: formattedSessions
        }
    };
};

/**
 * ${1:Description placeholder}
 *
 * @param {${2:*}} data
 * @returns {${3:*}}
 */
export const formatUserPerformanceData = (data) => {
    // const data = performanceData.data;

    // if (!data || !data.data || !data.kind) {
    //     throw new Error("Invalid performance data format");
    // }

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
