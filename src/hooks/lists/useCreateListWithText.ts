import { useState } from "react";
import { useAppStateStore } from "../../lib/AppStateStore";
// import { useGetTasks } from "../useGetAllLists";
import { BASE_URL } from "../../lib/services";
import axios from "axios";

export const useCreateListWithText = () => {
    const [isLoading, setIsLoading] = useState(false); // Local loading state
    const [error, setError] = useState<any>(null);
    // const { getTasks } = useGetTasks();
    const { user_id } = useAppStateStore();
    
    const createListWithText = async ({ name, suggestion }: { name: string, suggestion: string }) => {
        
        console.log({ name, suggestion });

        try {
            // const encodedWalletAddress = encodeURIComponent(user_id);
            setIsLoading(true); // Set loading state to true

            await axios.post(
                `${BASE_URL}${user_id}/lists/`,
                {
                    img: '',
                    from_image: false,
                    name: name,
                    suggestion: suggestion // Include suggestions if needed
                },
                {
                    headers: {
                        'Content-Type': 'application/json' // Important: application/json
                    }
                }
            );
            // getTasks();
        } catch (error) {
            setError(error);
            console.log('error creating task with text', error);
            throw new Error('Error creating task with text');
        } finally {
            setIsLoading(false);
        }
    }

    return { createListWithText, isLoading, error }
}