import { useAppStateStore } from "../../lib/AppStateStore";
import { BASE_URL } from "../../lib/services";
import axios from "axios";

export const useAddTodoItem = () => {
    const { user_id } = useAppStateStore();

     const addTodoItem = async (listId: string, label: string) => {
        try {
            // const encodedWalletAddress = encodeURIComponent(walletAddress);
            const response = await axios.post(
                `${BASE_URL}${user_id}/lists/${listId}/items/`,
                { label },
                {
                    headers: {
                        'Content-Type': 'application/json' // Important: application/json
                    }
                }
            );

            if (response.status !== 200 && response.status !== 201) {
                const errorData = await response.data;
                throw new Error(`Failed create task: ${response.status} - ${errorData?.message || response.statusText}`);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return { addTodoItem }
}