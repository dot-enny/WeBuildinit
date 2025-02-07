import { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Avatar } from '../types/types';
import { BASE_URL } from '../lib/services';

export const useUploadImage = () => {
    const [isUploading, setIsUploading] = useState(false); // Local loading state
    const [uploadError, setUploadError] = useState<string | null>(null); // Store error message

    const uploadImage = async ({ image, walletAddress }: { image: Avatar, walletAddress: string }) => {
        return new Promise((resolve, reject) => {
            if (!image.file) {
                reject(new Error("No image selected"));
                return;
            }

            const reader = new FileReader();

            reader.onloadend = async () => {
                const base64String = reader.result as string;

                try {
                    const encodedWalletAddress = encodeURIComponent(walletAddress);
                    setIsUploading(true); // Set loading state to true
                    setUploadError(null); // Clear previous errors

                    const response = await axios.post(
                        `${BASE_URL}users/${encodedWalletAddress}/lists/`,
                        {
                            image: base64String.split(',')[1], // Send ONLY the Base64 data part
                            from_image: true,
                            name: image.file?.name,
                            suggestions: "" // Include suggestions if needed
                        },
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
                }
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(image.file);
        });
    };

    const { mutateAsync: uploadImageMutation } = useMutation({
        mutationFn: (variables: { image: Avatar, walletAddress: string }) => uploadImage(variables), // Your upload function
        onSuccess: (data) => { // Correctly typed onSuccess
            console.log("Image uploaded successfully:", data);
            // setOpen();
        },
        onError: (error) => { // Correctly typed onError
            console.error("Error uploading image:", error);
            alert(`Image upload failed: ${error?.message || 'An unknown error occurred'}`); // Improved error message
            setIsUploading(false);
        }
    });

    return { uploadImageMutation, isUploading, uploadError }; // Return mutation function, loading state, and error
};
