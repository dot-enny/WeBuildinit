import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/services";
import { useAppStateStore } from "../lib/AppStateStore";


interface User {
    detail?: string;
    wallet_address?: string;
    // other properties
}

export const useGetWallet = () => {
    const { walletAddress, setWalletAddress } = useAppStateStore();
    const [user, setUser] = useState<User>();

    const getUser = async () => {
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await fetch(`${BASE_URL}users/${encodedWalletAddress}/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                credentials: 'include'
            });
            const data = await response.json();
            setUser(data);
            console.log('user fetched', data);
        } catch (err) {
            console.log('error fetching user', err);
        }
    };

    const createUser = async (address: string | undefined) => {
        try {
            const response = await fetch(`${BASE_URL}users/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ wallet_address: address }),
                redirect: 'follow',
                credentials: 'include'
            });
            if (response.status !== 201) {
                throw new Error('Failed to create user');
            }
            console.log(response)
            const data = await response.json();
            console.log('created user', data)
            setWalletAddress(address as string);
        } catch (err) {
            console.log('error creating user', err);
            throw err;
        }
    };

    useEffect(() => {
        if (walletAddress) { // Only call getUser if walletAddress exists
            getUser();
        }
    }, [walletAddress, getUser]); // Add walletAddress to the dependency array

    return { getUser, createUser, user }
}