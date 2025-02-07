import axios from "axios";
import { BASE_URL } from "../../../lib/services";
import { useAppStateStore } from "../../../lib/AppStateStore";
import { useState } from "react";

export const useCheckTodoItem = () => {
    const [checkError, setCheckError] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const { walletAddress } = useAppStateStore();

    const checkItem = async (listId: string, itemId: string, checked: boolean) => {
        setCheckError('');
        setIsChecking(true);
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await axios.patch(`${BASE_URL}users/${encodedWalletAddress}/lists/${listId}/checked_state/`,
                { item_id: itemId, checked_state: checked }
            )
            console.log('item checked', response)
        } catch (error) {
            console.error('Error checking item', error);
            setCheckError(error as string);
            throw error; // Re-throw the error to be handled by the calling function
        } finally {
            setIsChecking(false);
        }
    }

    return { checkItem, isChecking, checkError }
}