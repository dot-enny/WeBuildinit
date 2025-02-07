import { useState } from "react";
import { useAppStateStore } from "../../lib/AppStateStore";
import { useGetTasks } from "../useGetTasks";
import { BASE_URL } from "../../lib/services";
import axios from "axios";

export const useCreateListWithText = () => {
    const [isLoading, setIsLoading] = useState(false); // Local loading state
    const { getTasks } = useGetTasks();
    const { walletAddress } = useAppStateStore();
    
    const createTask = async ({ name, suggestions }: { name: string, suggestions: string }) => {
        
        console.log({ name, suggestions });

        try {
            const encodedWalletAddress = encodeURIComponent(walletAddress);
            setIsLoading(true); // Set loading state to true

            await axios.post(
                `${BASE_URL}users/${encodedWalletAddress}/lists/`,
                {
                    image: '', // Send ONLY the Base64 data part
                    from_image: false,
                    name: name,
                    suggestions: "" // Include suggestions if needed
                },
                {
                    headers: {
                        'Content-Type': 'application/json' // Important: application/json
                    }
                }
            );
            getTasks();
        } catch (error) {
            console.log('error createing task with text', error)
        }
        setIsLoading(false); // Set loading
    }

    return { createTask, isLoading }
}