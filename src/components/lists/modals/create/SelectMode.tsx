import { DialogTitle } from "@headlessui/react";
import Modal from "../../../ui/Modal";

interface SelectingModalProps {
    open: boolean;
    setOpen: () => void;
    handleSelect: (type: string) => void;
}

export const SelectMode = ({ open, setOpen, handleSelect }: SelectingModalProps) => {
    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
                How would you like to create your list?
            </DialogTitle>
            <div className="text-white flex flex-col gap-y-4">
                <button className="cursor-pointer border border-[#2F2F2F] rounded-lg py-5" onClick={() => handleSelect('image')}>With Image</button>
                <button className="cursor-pointer border border-[#2F2F2F] rounded-lg py-5" onClick={() => handleSelect('text')}>With Text</button>
            </div>
        </Modal>
    );
};
