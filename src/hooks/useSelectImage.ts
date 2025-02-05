import { useState } from "react";

interface Avatar {
    file: File | null;
    url: string;
}

export const useSelectImage = () => {
    const [image, setAvatar] = useState<Avatar>({
        file: null,
        url: ""
    });

    // const { setTaskImage } = useAppStateStore();

    // const updateFile = useFileUpdateContext();
    const selectImage = (e: any) => {
        if (e.target.files[0])
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
            console.log(e.target.files[0]);
            // updateFile(e.target.files[0]);
            // setTaskImage(e.target.files[0]);
    };

    return { image, selectImage };
}