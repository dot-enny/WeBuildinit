import { useState } from "react";
import { useAppStateStore } from "../../lib/AppStateStore";
import { BASE_URL } from "../../lib/services";
import axios from "axios";

export const useAddTodoItem = () => {
    const { walletAddress } = useAppStateStore();
    const [isLoading, setIsLoading] = useState(false);

     const addTodoItem = async (listId: string, label: string) => {
        setIsLoading(true)
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await axios.post(
                `${BASE_URL}users/${encodedWalletAddress}/lists/${listId}/items/`,
                { label },
                {
                    headers: {
                        'Content-Type': 'application/json' // Important: application/json
                    }
                }
            );

            if (response.status !== 200 && response.status !== 201) {
                const errorData = await response.data;
                throw new Error(`Failed to upload image: ${response.status} - ${errorData?.message || response.statusText}`);
            }
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    };

    return { addTodoItem , isAddingItem: isLoading }
}