import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/services";
import { useAppStateStore } from "../lib/AppStateStore";

export const useGetAllLists = () => {
    const { walletAddress, listObjects, setListObjects, setIsLoadingLists, reloadLists } = useAppStateStore();

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllLists = async (reload=false, optimisticData=null) => {
        if(optimisticData != null) {
            setTasks(optimisticData);
            setListObjects(optimisticData);
        }
        if(reload)  {
            setIsLoading(true);
            setIsLoadingLists(true);
            console.log('reloading lists');
        }
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
            console.log('list objects before lists fetched', listObjects);
            setListObjects(data)
            console.log('list fetched', data);
            console.log('list objects updated after lists fetched', listObjects);
        } catch (err) {
            console.log('error fetching lists', err);
        }
        setIsLoading(false);
        setIsLoadingLists(false);
    };

    useEffect(() => {
        if(listObjects.length === 0 && reloadLists) {
            getAllLists(true);
            console.log('list objects < 0')
        }
        console.log('list objects')
    }, [listObjects.length, reloadLists])
    // useEffect(() => {
    //     getAllLists();
    // }, [])

    return { getAllLists, tasks, isLoading }
}