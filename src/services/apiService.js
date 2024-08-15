import {mockUserActivity} from "./mockData";

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
