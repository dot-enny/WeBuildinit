import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/services";
import { useAppStateStore } from "../lib/AppStateStore";

export const useGetTasks = () => {
    const { walletAddress, listObjects, setListObjects, setIsLoadingLists } = useAppStateStore();

    const [tasks, setTasks] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getTasks = async () => {
        setIsLoading(true);
        setIsLoadingLists(true);
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await fetch(`${BASE_URL}users/${encodedWalletAddress}/lists/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                credentials: 'include'
            });
            const data = await response.json();
            setTasks(data);
            setListObjects(data)
            console.log('list fetched', data);
        } catch (err) {
            console.log('error fetching lists', err);
        }
        setIsLoading(false);
        setIsLoadingLists(false);
    };

    useEffect(() => {
        if(listObjects.length === 0 ) {
            getTasks();
        }
    }, [listObjects.length])
    // useEffect(() => {
    //     getTasks();
    // }, [])

    return { getTasks, tasks, isLoading }
}