import {mockUserMainData, mockUserActivity, mockUserAverageSessions, mockUserPerformance} from "./mockData";

export const fetchUserData = async(userId) => {
    const useMock = process.env.REACT_APP_USE_MOCK === 'true';

    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserMainData);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return await response.json();
        } catch(error) {
            console.log(`There was a problem retrieving the user's data: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserActivity = async(userId) => {
    const useMock = process.env.REACT_APP_USE_MOCK === 'true';

    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserActivity);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return await response.json();
        } catch(error) {
            console.log(`There was a problem retrieving the user's activity: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserAverageSessions = async(userId) => {
    const useMock = process.env.REACT_APP_USE_MOCK === 'true';

    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserAverageSessions);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return await response.json();
        } catch(error) {
            console.log(`There was a problem retrieving the user's average sessions: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserPerformance = async(userId) => {
    const useMock = process.env.REACT_APP_USE_MOCK === 'true';

    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserPerformance);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return await response.json();
        } catch(error) {
            console.log(`There was a problem retrieving the user's performance: ${error.message}`);
            throw error;
        }
    }
};
