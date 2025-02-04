import { ChatTextArea } from "../components/chat/ChatTextArea"

export const Tasks = () => {
    return (
        <div className="h-full flex flex-col pb-4 md:pb-10 pt-5">
            <div className="flex justify-between items-center">
                <span className="md:text-[1.25rem] text-white">New Tasks to work on</span>
                <button type="button"
                    className="cursor-pointer justify-center rounded-full bg-[#7FD6E1] px-4 xl:px-6 py-2 text-xs text-[#222222] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 [box-shadow:_0px_10px_16px_0px_#7FD6E129;]">
                    New Chat
                </button>
            </div>
            <div className="bg-[#333131] h-px w-full mt-4" />

            <Messages />

            <div className="justify-self-end mt-auto w-full">
                <ChatTextArea />
            </div>
        </div>
    )
}

const Messages = () => {
    return (
        <div className="overflow-y-auto md:pr-4">
            <Message isUser />
            <Message />
            <Message isUser isSecond />
            <Message />
        </div>
    )
}

const Message = ({ isUser=false, isSecond=false }: { isUser?: boolean, isSecond?: boolean }) => {

    return (
        isUser ? (
            <div className="flex gap-x-2 sm:gap-x-4 my-8">
                <div className="size-6 min-w-6 sm:size-8 sm:min-w-8 rounded-full bg-[#D9D9D9]" />
                <div>
                    <div className="flex gap-x-4 self-start mb-3">
                        <span className="text-[#E1E1E1]">Adewole John</span>
                        <span className="text-[#7D7D7D] text-xs self-center mt-1">2PM</span>
                    </div>
                    {
                        !isSecond ?
                       <p className="text-[#B9B9B9] text-sm">Sent in <img src="/assets/icons/upload-image.svg" className="size-5 inline align-bottom" /> Sent in Task PNG for AIgenda to analyze and help prioritize task for an upcoming job interview basically</p> :
                       <p className="text-[#B9B9B9] text-sm">Yea I would like you to priotize based on importance</p>
                    }
                </div>
            </div>
        ) : (
            <div className="flex gap-x-2 sm:gap-x-4 bg-[#242424] p-4 my-8 rounded-lg">
                <img src="/logo-icon.svg" alt="" className="size-6 sm:size-8" />
                <div>
                    <div className="flex gap-x-4 self-start">
                        <span className="text-[#E1E1E1]">AIgenda</span>
                        <span className="text-[#7D7D7D] text-xs self-center mt-1">2PM</span>
                    </div>
                    <p className="text-[#B9B9B9] text-sm my-3">Nice, I have gotten the the tasks in the photo, so what would you want me to help with the task, would you like to prioritize task based on urgency and important or suggest new task</p>
                    <div className="flex gap-x-3">
                        <img src="/assets/icons/regenerate.svg" />
                        <img src="/assets/icons/copy.svg" />
                    </div>
                </div>
            </div>
        )
    )
}
