import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Avatar } from '../types/types';
import { BASE_URL } from '../lib/services';

export const useUploadImage = () => {

    const uploadImage = async ({ image, user_id }: { image: Avatar, user_id: string }) => {
        return new Promise((resolve, reject) => {
            if (!image.file) {
                reject(new Error("No image selected"));
                return;
            }

            const reader = new FileReader();

            reader.onloadend = async () => {
                const base64String = reader.result as string;

                const body = {
                    img: base64String.split(',')[1], // Send ONLY the Base64 data part
                    from_image: true,
                    name: image.file?.name,
                    suggestions: "" // Include suggestions if needed
                };

                console.log(body);

                try {
                    // const encodedWalletAddress = encodeURIComponent(walletAddress);

                    const response = await axios.post(
                        `${BASE_URL}${user_id}/lists/`,
                       body,
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

                    resolve(response.data);

                } catch (error) {
                    reject(error);
                    throw new Error('Error creating task with image');
                } 
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(image.file);
        });
    };

    const { mutateAsync: uploadImageMutation, isPending } = useMutation({
        mutationFn: (variables: { image: Avatar, user_id: string }) => uploadImage(variables), // Your upload function
        onSuccess: (data) => { // Correctly typed onSuccess
            console.log("Image uploaded successfully:", data);
        },
        onError: (error) => { // Correctly typed onError
            console.error("Error uploading image:", error);
            alert(`Image upload failed: ${error?.message || 'An unknown error occurred'}`); // Improved error message
        }
    });

    return { uploadImageMutation, isPending }; // Return mutation function, loading state, and error
};
