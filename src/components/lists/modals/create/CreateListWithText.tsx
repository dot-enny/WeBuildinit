import { DialogTitle } from "@headlessui/react";
import { useCreateListWithText } from "../../../../hooks/lists/useCreateListWithText";
import Modal from "../../../ui/Modal";
import { Spinner } from "../../../ui/Spinner";
import { useAppStateStore } from "../../../../lib/AppStateStore";

interface TextModeProps {
    open: boolean;
    setOpen: () => void;
    getAllLists: () => void;
}

export const CreateListWithText = ({ open, setOpen, getAllLists }: TextModeProps) => {

    const { createListWithText, isLoading, error } = useCreateListWithText();
    const { listObjects, setListObjects } = useAppStateStore();

    const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { name, suggestion } = Object.fromEntries(formData);
        console.log({ name, suggestion });

        const newList = {
            id: '',
            img: '',
            items: [],
            name: name,
            suggestion: suggestion,
        }

        // const updatedLists = [...listObjects.filter((item: any) => item.id !== newList.id), newList];
        const originalListObjects = [ ...listObjects ];
        try {
            await createListWithText({ name: name as string, suggestion: suggestion as string });
            const updatedLists = [...listObjects, newList];
            setListObjects(updatedLists);
            setOpen();
            getAllLists();
        } catch (error) {
            setListObjects(originalListObjects);
            console.log('error creating task with text from modal', error)
        }
    }

    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
                Create list with text
            </DialogTitle>
            <form onSubmit={handleCreateTask} className="text-white flex flex-col gap-y-4">
                <input type="text" name="name" placeholder="Enter list name" className="bg-[#333131] border border-[#2F2F2F] rounded-lg py-5 px-3" />
                <input type="text" name="suggestion" placeholder="Enter suggestion" className="bg-[#333131] border border-[#2F2F2F] rounded-lg py-5 px-3" />
                <div className="text-red-500">{ error ? error.message + '; Try again' : ''}</div>
                <button disabled={isLoading} className="cursor-pointer border border-[#2F2F2F] rounded-lg py-5 relative disabled:opacity-60 disabled:cursor-not-allowed">
                    <span className={`${isLoading ? 'invisible' : ''}`}>Send</span>
                    <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
                </button>
            </form>
        </Modal>
    )
}