  const getUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}users/${address}`);
      console.log('User fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Re-throw the error to be handled by the calling function
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post(`${BASE_URL}users/`, { wallet_address: address }); // Use /api if proxying, otherwise use the full URL
      console.log('User created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Re-throw the error to be handled by the calling function
    }
  };


  const uploadImage = async () => {
        const formData = new FormData();
        if (image.file) {
            formData.append('img', image.file);
        }

        formData.append('name', image.file?.name || '');
        formData.append('suggestions', '');
        // Log formData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        const encodedWalletAddress = encodeURIComponent(walletAddress)
        console.log(encodedWalletAddress)
        // const response = await axios.post(`${BASE_URL}users/${encodedWalletAddress}/lists/`, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // });
        const response = await axios.post(`${BASE_URL}users/${encodedWalletAddress}/lists/`, { name: image.file?.name });
        if (response.status !== 200) {
            throw new Error('Failed to upload image');
        }
        return response.data;
    }

    const { mutateAsync: uploadImageMutation, isPending: uploadingImage } = useMutation({
        mutationFn: uploadImage,
        onSuccess: () => {
            console.log("image uploaded successfully");
        },
        onError: (err) => {
            console.error("Error uploading image", err)
        }
    });