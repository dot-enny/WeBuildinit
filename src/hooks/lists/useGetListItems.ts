import { useState } from "react";
import { BASE_URL } from "../../lib/services";
import { useAppStateStore } from "../../lib/AppStateStore";

export const useGetListItems = () => {
    const { user_id } = useAppStateStore();
    const [listItems, setListItems] = useState<any>();
    const [isLoading, setIsLoading] = useState(false)

    const getListItems = async (listId: string) => {
        setIsLoading(true)
        try {
            // const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await fetch(`${BASE_URL}${user_id}/lists/${listId}/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                credentials: 'include'
            });
            const data = await response.json();
            console.log(data)
            setListItems(data);
        } catch (err) {
            console.log('error fetching lists', err);
        }
        setIsLoading(false)
    };

    return { getListItems, isLoading, listItems, setListItems}
}