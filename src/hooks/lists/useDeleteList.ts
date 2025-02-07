import axios from "axios";
import { BASE_URL } from "../../lib/services";
import { useAppStateStore } from "../../lib/AppStateStore";
import { useState } from "react";
import { useGetTasks } from "../useGetTasks";

export const useDeleteList = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { walletAddress } = useAppStateStore();
    const { getTasks } = useGetTasks();

    const deleteList = async (listId: string) => {
        setIsDeleting(true);
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await axios.delete(`${BASE_URL}users/${encodedWalletAddress}/lists/${listId}/`)
            console.log('list deleted', response)
        } catch (error) {
            console.error('Error deleting list', error);
            throw error; // Re-throw the error to be handled by the calling function
        }
        setIsDeleting(false);
        getTasks();
    }

    return { deleteList, isDeleting }
}