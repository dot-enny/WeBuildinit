import axios from "axios";
import { BASE_URL } from "../../../lib/services";
import { useAppStateStore } from "../../../lib/AppStateStore";
import { useState } from "react";

export const useDeleteTodoItem = () => {
    const [deleteError, setDeleteError] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { user_id } = useAppStateStore();

    const deleteItem = async (listId: string, itemId: string) => {
        setIsDeleting(true);
        try {
            // const encodedWalletAddress = encodeURIComponent(walletAddress);
            console.log(itemId)
            const response = await axios.delete(`${BASE_URL}${user_id}/lists/${listId}/items/${itemId}/`)
            console.log('list item deleted', response)
        } catch (error) {
            console.error('Error deleting list', error);
            setDeleteError(error as string);
            throw error; // Re-throw the error to be handled by the calling function
        } finally {
            setIsDeleting(false);
        }
    }

    return { deleteItem, deleteError , isDeleting }
}