import { ListsPageHeader } from "../components/lists/ListsPageHeader";
import { ConfirmDelete } from "../components/lists/modals/ConfirmDelete";
import { CreateListWithImage } from "../components/lists/modals/create/CreateListWithImage";
import { CreateListWithText } from "../components/lists/modals/create/CreateListWithText";
import { SelectMode } from "../components/lists/modals/create/SelectMode";
import { TodoLists } from "../components/lists/TodoLists";
import { Spinner } from "../components/ui/Spinner";
import { useListsPage } from "../hooks/lists/useListsPage";
import { useGetAllLists } from "../hooks/useGetAllLists";
import { useAppStateStore } from "../lib/AppStateStore";

export const Lists = () => {

    const { listObjects, isLoadingLists } = useAppStateStore();
    const { imageOpen, textOpen, deleteOpen, selecting, handleOpenSelectingModal, handleOpenDeleteModal, handleCloseSelectingModal, handleImageModal, handleTextModal, handleSelect, handleCloseDeleteModal, handleDelete, isDeleting } = useListsPage();
    const { tasks = [], isLoading, getAllLists } = useGetAllLists();
    const noList = (listObjects.length === 0) && (tasks.length === 0);

    const doHandleDelete = async (option: string) => {
        await handleDelete(option);
        if(option === 'yes') {
            getAllLists(true);
        }
    }

    // useEffect(() => {
    //     getTasks();
    // }, [])

    return (
        <div className="h-full flex flex-col pb-4 md:pb-10 pt-5 tasks-bg relative pl-5 md:pl-8">

            <ListsPageHeader isLoading={isLoading || isLoadingLists} />
            <button className={`text-red-300 text-lg mt-2 text-start ml- transtiion duration-500 ml-auto cursor-pointer mr-4 ${(!(isLoading || isLoadingLists) && !noList) ? 'opacity-100' : 'opacity-0'}`} onClick={handleOpenDeleteModal}>Clear lists</button>

            {/* RENDER SPINNER OR LISTS */}
        <div className="overflow-y-auto pt-5">
                {
                    (isLoading || isLoadingLists) ?
                        <div className="absolute inset-0">
                            <Spinner className="size-10" />
                        </div>
                        :
                        <TodoLists lists={listObjects} getAllLists={getAllLists} />
                }
            </div>

            {
                (!isLoading && noList) &&
                <div className="w-fit h-fit m-auto text-2xl text-white text-center flex flex-col items-center gap-y-4">
                    <span>No Lists Yet</span>
                    <button onClick={handleOpenSelectingModal} className="underline cursor-pointer">Add list +</button>
                </div>
            }

            <button onClick={handleOpenSelectingModal} className="justify-self-end mt-auto mx-auto cursor-pointer">
                {/* <ChatTextArea /> */}
                <img src="/assets/icons/add-task.svg" />
            </button>

            <SelectMode open={selecting} setOpen={handleCloseSelectingModal} handleSelect={handleSelect} />
            <CreateListWithText open={textOpen} setOpen={handleTextModal} getAllLists={getAllLists} />
            <CreateListWithImage open={imageOpen} setOpen={handleImageModal} getAllLists={getAllLists} />
            <ConfirmDelete open={deleteOpen} setOpen={handleCloseDeleteModal} handleDelete={doHandleDelete} isDeleting={isDeleting} />
        </div >
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
