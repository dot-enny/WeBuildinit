import { CreateTask } from "../components/chat/CreateTask"
import { useState } from "react";
import { ChatTextArea } from '../components/chat/ChatTextArea';

export const Chat = () => {

  const [open, setOpen] = useState<boolean>(true);

  const handleShowModal = () => {
    setOpen(prev => !prev);
  }

  return (
    <div className="flex flex-col items-center h-full py-4 md:py-10 relative"

    >
      <CreateTask open={open} setOpen={handleShowModal} />
      <div className="justify-self-end mt-auto w-full">
        <ChatTextArea />
      </div>
      {/* <img src="/assets/bg/pink-shadow-bg.svg" className="absolute -bottom-[44vmin]" /> */}
    </div>
  )
}

