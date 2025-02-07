import { useState } from "react";
import { useDeleteAllLists } from "./useDeleteAllLists";

export const useListsPage = () => {
    const [imageOpen, setImageOpen] = useState<boolean>(false);
    const [textOpen, setTextOpen] = useState<boolean>(false);
    const [selecting, setSelecting] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

    const { deleteAllLists, isDeleting } = useDeleteAllLists();

    const handleOpenSelectingModal = () => {
        setSelecting(true);
    };

    const handleCloseSelectingModal = () => {
        setSelecting(false);
    };

    const handleOpenDeleteModal = () => {
        setDeleteOpen(true);
    }

    const handleCloseDeleteModal = () => {
        setDeleteOpen(false);
    };

    const handleImageModal = () => {
        setImageOpen(prev => !prev);
    };

    const handleTextModal = () => {
        setTextOpen(false);
    };

    const handleSelect = (option: string) => {
        setSelecting(false); // Close the selecting modal
        if (option === 'image') {
            setImageOpen(true);
        } else if (option === 'text') {
            setTextOpen(true);
        }
    };

    const handleDelete = async (option: string) => {
        if (option === 'yes') {
            await deleteAllLists();
            setDeleteOpen(false);
        } else if (option === 'no') {
            setDeleteOpen(false);
        }
    }

    return {  imageOpen, textOpen, deleteOpen, selecting, handleOpenSelectingModal, handleOpenDeleteModal, handleCloseSelectingModal, handleImageModal, handleTextModal, handleSelect, handleCloseDeleteModal, handleDelete, isDeleting }
}