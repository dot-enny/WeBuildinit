// export const BASE_URL = 'https://f85b-105-113-64-145.ngrok-free.app/api/';
export const BASE_URL = 'https://c3bb-105-113-75-202.ngrok-free.app/api/';

import axios from "axios";

// USER
export const getUser = async (address: string | undefined) => {
    const response = await axios.get(`${BASE_URL}users/${address}`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch user');
    }
    return response.data;
};

export const createUser = async (address: string | undefined) => {
    const response = await axios.post(`${BASE_URL}users/`, { wallet_address: address });
    if (response.status !== 201) {
        throw new Error('Failed to create user');
    }
    return response.data;
};

// TASKS
// export const getTasks = async (address: string | undefined) => {
//     const response = await axios.get(`${BASE_URL}users/${address}/lists/`, {});
//     if (response.status !== 200) {
//         throw new Error('Failed to fetch user');
//     }
//     return response.data;
// };

export const getTasks = async (address: string | undefined) => {
    const encodedWalletAddress = encodeURIComponent(address as unknown as string);
    const response = await fetch(`${BASE_URL}users/${encodedWalletAddress}/lists/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        credentials: 'include'
    });
    const data = await response.json();
    if (response.status !== 200) {
        throw new Error('Failed to fetch user');
    }
    return data;
};


