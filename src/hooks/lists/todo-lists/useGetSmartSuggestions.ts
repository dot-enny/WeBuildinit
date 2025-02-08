import axios from "axios";
import { BASE_URL } from "../../../lib/services";
import { useAppStateStore } from "../../../lib/AppStateStore";
import { useState } from "react";

export const useGetSmartSuggestions = () => {
    const { walletAddress } = useAppStateStore();
    const [smartSuggestions, setSmartSuggestions] = useState('');
    const [isSuggesting, setIsSuggesting] = useState(false);

    const getSmartSuggestions = async (listId: string) => {
        setIsSuggesting(true); // Set loading state to true
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await axios.post(
                `${BASE_URL}users/${encodedWalletAddress}/lists/${listId}/smart_suggestions/`,
                // {
                //     // Include suggestions if needed
                // },
                {
                    headers: {
                        'Content-Type': 'application/json' // Important: application/json
                    }
                }
            );
            console.log('suggestions created', response.data.suggestion);
            setSmartSuggestions(response.data.suggestion);
        } catch (error) {
            console.log('error createing task with text', error)
            throw error; // Re-throw the error to be handled by the calling function
        } finally {
            setIsSuggesting(false); // Set loading
        }
    }

    return { getSmartSuggestions, isSuggesting, smartSuggestions }
}