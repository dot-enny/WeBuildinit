// import { ChatTextArea } from "../components/chat/ChatTextArea"

import { useEffect, useState } from "react";
import { CreateTask } from "../components/chat/CreateTask"
import { StarIcon } from "../assets/icons/StarIcon";
import { useAppStateStore } from "../lib/AppStateStore";

export const Tasks = () => {

    const [open, setOpen] = useState<boolean>(true);

    const handleShowModal = () => {
        setOpen(prev => !prev);
        resetTaskImage();
    }

    const { taskImage, resetTaskImage } = useAppStateStore();

    const fileUpload = taskImage != null;

    useEffect(() => {
        if (fileUpload) setOpen(false);
    }, [fileUpload]);


    return (
        <div className="h-full flex flex-col pb-4 md:pb-10 pt-5 tasks-bg"
            // style={{ background: 'url(/assets/bg/tasks-page-bg.svg) no-repeat', backgroundPosition: 'bottom -80vmin left 100%', backgroundSize: 'cover' }}
        >
            <div className="flex justify-between gap-x-12 pl-8">
                <div className={`flex flex-col gap-y-2 transition ${fileUpload ? 'opacity-100' : 'opacity-0'}`}>
                    <h4 className="md:text-[1.25rem] text-white max-sm:ml-8">Personal TO-Do list</h4>
                    <p className="text-sm text-[#B9B9B9] leading-[1.181rem] max-sm:hidden">Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.</p>
                </div>
                <button type="button" className="self-start">
                    <img alt="notifications" src="/assets/icons/bell.svg" />
                </button>
            </div>
            <div className="pl-8">
                <div className={`bg-[#333131] h-px w-full mt-4 origin-left transition ${fileUpload ? 'scale-100' : 'scale-0'}`} />
            </div>

            {/* <Messages /> */}
            {
                fileUpload &&
                <div className="overflow-y-auto">
                    <TaskList />
                </div>
            }

            <button onClick={handleShowModal} className="justify-self-end mt-auto mx-auto cursor-pointer">
                {/* <ChatTextArea /> */}
                <img src="/assets/icons/add-task.svg" />
            </button>
            <CreateTask open={open} setOpen={handleShowModal} />
        </div>
    )
}

const TaskList = () => {
    return (
        <div className="pl-8 flex flex-col gap-y-3 mt-5">
            <span className="text-white text-lg">Job Interview</span>
            <span className="text-white text-lg">Add Tasks</span>
            <ul className="flex flex-col gap-y-4 mb-4">
               <TaskItem />
               <TaskItem />
               <TaskItem deadline="tomorrow" />
               <TaskItem deadline="tomorrow" />
               <TaskItem deadline="tomorrow" />
               <TaskItem deadline="tomorrow" />
               <TaskItem deadline="tomorrow" />
            </ul>
            <span className="text-white text-lg">Completed Tasks</span>
        </div>
    )
}

const TaskItem = ({ deadline='today' }: { deadline?: string }) => {
    return (
        <li className="bg-[#393B3C] flex items-center p-4 rounded">
            <input type="checkbox" defaultChecked className="accent-[#CFCFCF] rounded" />
            <p className="text-sm text-[#CFCFCF] ml-2 mr-3">Prepare Cover Letter</p>
            {deadline === 'today' ? (
                <span className="text-xs rounded-lg bg-[#DAF7DA] text-[#19C819] p-1">Today</span>
                ) : (
                <span className="text-xs rounded-lg bg-[#474747] text-[#838383] p-1">Tomorrow</span>
            )}
            <div className="ml-auto">
                <StarIcon outline />
            </div>
        </li>
    )
}

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
