import axios from "axios";
import { BASE_URL } from "../../lib/services";
import { useAppStateStore } from "../../lib/AppStateStore";
import { useState } from "react";
import { useGetTasks } from "../useGetTasks";

export const useDeleteAllLists = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { walletAddress } = useAppStateStore();
    const { getTasks } = useGetTasks();

    const deleteAllLists = async () => {
        setIsDeleting(true);
        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            await axios.delete(`${BASE_URL}users/${encodedWalletAddress}/lists/`)
        } catch (error) {
            console.error('Error deleting lists', error);
            throw error; // Re-throw the error to be handled by the calling function
        }
        setIsDeleting(false);
        getTasks();
    }

    return { deleteAllLists, isDeleting }
}