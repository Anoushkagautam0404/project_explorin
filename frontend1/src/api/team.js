// frondend/src/api/team.js

import { getToken } from './auth'; // Import getToken from auth.js

export const createTeam = async (teamData) => {
    const response = await fetch('http://localhost:5000/api/team', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`, // Include the JWT token
        },
        body: JSON.stringify(teamData),
    });
    return await response.json();
};

export const assignTask = async (taskData) => {
    const response = await fetch('http://localhost:5000/api/task/assign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`, // Include the JWT token
        },
        body: JSON.stringify(taskData),
    });
    return await response.json();
};

export const getTeamProgress = async () => {
    const response = await fetch('http://localhost:5000/api/team/progress', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`, // Include the JWT token
        },
    });
    return await response.json();
};