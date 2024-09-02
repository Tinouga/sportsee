import {mockUserMainData, mockUserActivity, mockUserAverageSessions, mockUserPerformance} from "./mockData";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const useMock = process.env.REACT_APP_USE_MOCK === 'true';

export const fetchUserData = async(userId) => {
    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserMainData);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${userId}`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result.data;
        } catch(error) {
            console.log(`There was a problem retrieving the user's data: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserActivity = async(userId) => {
    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserActivity);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result.data;
        } catch(error) {
            console.log(`There was a problem retrieving the user's activity: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserAverageSessions = async(userId) => {
    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserAverageSessions);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result.data;
        } catch(error) {
            console.log(`There was a problem retrieving the user's average sessions: ${error.message}`);
            throw error;
        }
    }
}

export const fetchUserPerformance = async(userId) => {
    if(useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockUserPerformance);
            }, 200);
        });
    } else {
        try {
            const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result.data;
        } catch(error) {
            console.log(`There was a problem retrieving the user's performance: ${error.message}`);
            throw error;
        }
    }
};
