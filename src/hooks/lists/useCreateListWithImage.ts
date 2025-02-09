import { useState } from "react";
import { useSelectImage } from "../useSelectImage";

export const useCreateListWithImage = () => {

    const { image, selectImage, dragImage } = useSelectImage();
    const [dragging, setDragging] = useState(false);

    interface DragEventHandlers {
        handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
        handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    }

    const handleDragOver: DragEventHandlers['handleDragOver'] = (e) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleDragExit: DragEventHandlers['handleDragOver'] = (e) => {
        e.preventDefault();
        setDragging(false);
    }

    const handleDrop: DragEventHandlers['handleDrop'] = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            dragImage(file);
        } else {
            alert('Please drop an image file.');
        }
    }
    
    return { image, selectImage, dragging, handleDragOver, handleDragExit, handleDrop }
}