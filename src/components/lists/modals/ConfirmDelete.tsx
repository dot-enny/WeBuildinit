import { DialogTitle } from "@headlessui/react";
import Modal from "../../ui/Modal";
import { Spinner } from "../../ui/Spinner";

interface ConfirmDeleteProps {
    open: boolean;
    setOpen: () => void;
    handleDelete: (option: string) => void;
    isDeleting: boolean
}

export function ConfirmDelete({ open, setOpen, handleDelete, isDeleting }: ConfirmDeleteProps) {
    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-14 relative text-center">
                {!isDeleting ?
                    'This action deletes all lists, are you sure ?' :
                    <div className="mx-auto flex gap-x-4 w-fit"><span>Deleting all lists ...</span> <Spinner className="static" /></div>}
            </DialogTitle>
            <div className="text-white grid grid-cols-2 gap-x-4">
                <button disabled={isDeleting} className="cursor-pointer border border-[#2F2F2F] rounded-lg py-3 bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => handleDelete('yes')}>Yes</button>
                <button disabled={isDeleting} className="cursor-pointer border border-[#2F2F2F] rounded-lg py-3 disabled:opacity-60 disabled:cursor-not-allowed" onClick={() => handleDelete('no')}>No</button>
            </div>
        </Modal>
    );
}