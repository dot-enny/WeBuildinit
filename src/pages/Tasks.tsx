import { CreateTask } from "../components/chat/CreateTask"
import { useAppStateStore } from "../lib/AppStateStore";
import { useGetTasks } from "../hooks/useGetTasks";
import { Spinner } from "../components/ui/Spinner";
import Modal from "../components/ui/Modal";
import { DialogTitle } from "@headlessui/react";
import { useListsPage } from "../hooks/lists/useListsPage";
import { ListsPageHeader } from "../components/lists/ListsPageHeader";
import { TodoLists } from "../components/lists/TodoLists";
import { useCreateListWithText } from "../hooks/lists/useCreateListWithText";

export const Tasks = () => {

    const { listObjects, isLoadingLists } = useAppStateStore();
    const { imageOpen, textOpen, deleteOpen, selecting, handleOpenSelectingModal, handleOpenDeleteModal, handleCloseSelectingModal, handleImageModal, handleTextModal, handleSelect, handleCloseDeleteModal, handleDelete, isDeleting } = useListsPage();
    const { tasks = [], isLoading } = useGetTasks();
    const noList = (listObjects.length === 0) && (tasks.length === 0);

    return (
        <div className="h-full flex flex-col pb-4 md:pb-10 pt-5 tasks-bg relative">

            <ListsPageHeader isLoading={isLoading || isLoadingLists} />
            <button className={`text-red-300 text-lg mt-2 text-start ml-8 transtiion duration-500 ${(!(isLoading || isLoadingLists) && !noList) ? 'opacity-100': 'opacity-0'}`} onClick={handleOpenDeleteModal}>Delete lists</button>

            <div className="overflow-y-auto pt-5">
                {
                    (isLoading || isLoadingLists) ?
                        <div className="absolute inset-0">
                            <Spinner className="size-10" />
                        </div>
                        :
                        <TodoLists lists={listObjects as any} />
                }
            </div>

            {
                (!isLoading && noList) &&
                <div className="w-fit h-fit m-auto text-2xl text-white text-center flex flex-col items-center gap-y-4">
                    <span>No Lists Yet</span>
                    <button onClick={handleOpenSelectingModal} className="underline">Add list +</button>
                </div>
            }

            <button onClick={handleOpenSelectingModal} className="justify-self-end mt-auto mx-auto cursor-pointer">
                {/* <ChatTextArea /> */}
                <img src="/assets/icons/add-task.svg" />
            </button>

            <SelectMode open={selecting} setOpen={handleCloseSelectingModal} handleSelect={handleSelect} />
            <CreateTaskWithText open={textOpen} setOpen={handleTextModal} />
            <CreateTask open={imageOpen} setOpen={handleImageModal} />
            <ConfirmDelete open={deleteOpen} setOpen={handleCloseDeleteModal} handleDelete={handleDelete} isDeleting={isDeleting} />
        </div >
    )
}



interface ConfirmDeleteProps {
    open: boolean;
    setOpen: () => void;
    handleDelete: (type: string) => void;
    isDeleting: boolean
}

const ConfirmDelete = ({ open, setOpen, handleDelete, isDeleting }: ConfirmDeleteProps) => {
    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-14 relative text-center">
                {!isDeleting ?
                    'This action deletes all lists, are you sure ?' :
                    <div className="mx-auto flex gap-x-4 w-fit"><span>Deleting all lists ...</span> <Spinner className="static" /></div>
                }
            </DialogTitle>
            <div className="text-white grid grid-cols-2 gap-x-4">
                <button disabled={isDeleting} className="border border-[#2F2F2F] rounded-lg py-3 bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => handleDelete('yes')}>Yes</button>
                <button disabled={isDeleting} className="border border-[#2F2F2F] rounded-lg py-3 disabled:opacity-60 disabled:cursor-not-allowed" onClick={() => handleDelete('no')}>No</button>
            </div>
        </Modal>
    );
};

interface SelectingModalProps {
    open: boolean;
    setOpen: () => void;
    handleSelect: (type: string) => void;
}

const SelectMode = ({ open, setOpen, handleSelect }: SelectingModalProps) => {
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

interface TextModeProps {
    open: boolean;
    setOpen: () => void;
}

const CreateTaskWithText = ({ open, setOpen }: TextModeProps) => {

    const { createTask, isLoading } = useCreateListWithText();
    const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { name, suggestions } = Object.fromEntries(formData);
        console.log({ name, suggestions });
        await createTask({ name: name as string, suggestions: suggestions as string });
        setOpen();
    }

    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
                Create list with text
            </DialogTitle>
            <form onSubmit={handleCreateTask} className="text-white flex flex-col gap-y-4">
                <input type="text" name="name" placeholder="Enter list name" className="bg-[#333131] border border-[#2F2F2F] rounded-lg py-5 px-3" />
                <input type="text" name="suggestions" placeholder="Enter suggestions comma separated" className="bg-[#333131] border border-[#2F2F2F] rounded-lg py-5 px-3" />
                <button disabled={isLoading} className="cursor-pointer border border-[#2F2F2F] rounded-lg py-5 relative disabled:opacity-60 disabled:cursor-not-allowed">
                    <span className={`${isLoading ? 'invisible' : ''}`}>Send</span>
                    <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
                </button>
            </form>
        </Modal>
    )
}












// const TaskItem = ({ deadline = 'today' }: { deadline?: string }) => {
//     return (
//         <li className="bg-[#393B3C] flex items-center p-4 rounded">
//             <input type="checkbox" defaultChecked className="accent-[#CFCFCF] rounded" />
//             <p className="text-sm text-[#CFCFCF] ml-2 mr-3">Prepare Cover Letter</p>
//             {deadline === 'today' ? (
//                 <span className="text-xs rounded-lg bg-[#DAF7DA] text-[#19C819] p-1">Today</span>
//             ) : (
//                 <span className="text-xs rounded-lg bg-[#474747] text-[#838383] p-1">Tomorrow</span>
//             )}
//             <div className="ml-auto">
//                 <StarIcon outline />
//             </div>
//         </li>
//     )
// }

// const Messages = () => {
//     return (
//         <div className="overflow-y-auto md:pr-4">
//             <Message isUser />
//             <Message />
//             <Message isUser isSecond />
//             <Message />
//         </div>
//     )
// }

// const Message = ({ isUser=false, isSecond=false }: { isUser?: boolean, isSecond?: boolean }) => {

//     return (
//         isUser ? (
//             <div className="flex gap-x-2 sm:gap-x-4 my-8">
//                 <div className="size-6 min-w-6 sm:size-8 sm:min-w-8 rounded-full bg-[#D9D9D9]" />
//                 <div>
//                     <div className="flex gap-x-4 self-start mb-3">
//                         <span className="text-[#E1E1E1]">Adewole John</span>
//                         <span className="text-[#7D7D7D] text-xs self-center mt-1">2PM</span>
//                     </div>
//                     {
//                         !isSecond ?
//                        <p className="text-[#B9B9B9] text-sm">Sent in <img src="/assets/icons/upload-image.svg" className="size-5 inline align-bottom" /> Sent in Task PNG for AIgenda to analyze and help prioritize task for an upcoming job interview basically</p> :
//                        <p className="text-[#B9B9B9] text-sm">Yea I would like you to priotize based on importance</p>
//                     }
//                 </div>
//             </div>
//         ) : (
//             <div className="flex gap-x-2 sm:gap-x-4 bg-[#242424] p-4 my-8 rounded-lg">
//                 <img src="/logo-icon.svg" alt="" className="size-6 sm:size-8" />
//                 <div>
//                     <div className="flex gap-x-4 self-start">
//                         <span className="text-[#E1E1E1]">AIgenda</span>
//                         <span className="text-[#7D7D7D] text-xs self-center mt-1">2PM</span>
//                     </div>
//                     <p className="text-[#B9B9B9] text-sm my-3">Nice, I have gotten the the tasks in the photo, so what would you want me to help with the task, would you like to prioritize task based on urgency and important or suggest new task</p>
//                     <div className="flex gap-x-3">
//                         <img src="/assets/icons/regenerate.svg" />
//                         <img src="/assets/icons/copy.svg" />
//                     </div>
//                 </div>
//             </div>
//         )
//     )
// }
