import { DialogTitle } from '@headlessui/react'
import Modal from '../ui/Modal';
import { useSelectImage } from '../../hooks/useSelectImage';
import { useAppStateStore } from '../../lib/AppStateStore';
import { useState } from 'react';

export const CreateTask = ({ open, setOpen }: { open: boolean, setOpen: () => void }) => {

    const { setTaskImage } = useAppStateStore();
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
        dragImage(e.dataTransfer.files[0]);
    }

    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <>
                <div>
                    <div className="text-center">
                        <img src="/assets/icons/pink-star.svg" className="mx-auto mb-8" />
                        <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
                            No Tasks yet for AIgenda to work on
                        </DialogTitle>
                        <p className="text-sm text-[#B9B9B9] leading-[1.181rem]">
                            Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.
                        </p>
                    </div>
                </div>

                <div className={`px-6 py-8 mt-5 sm:mt-6 text-center flex flex-col gap-y-2 my-8 ${dragging ? 'bg-[#2B2B2B]' : 'bg-[#252525]'}`}
                    onDragOver={handleDragOver}
                    onDragExit={handleDragExit}
                    onDrop={handleDrop}
                >
                    <img src="/assets/icons/upload-image.svg" className="mx-auto" />
                    <span className="text-[#CFCFCF]">Click or drag and drop to upload your file</span>
                    <span className="text-[#B9B9B9] text-sm">PNG,JPG,PDF,GIF,SVG (Max 5 MB)</span>
                    <label
                        htmlFor="task-image"
                        className="mt-4 cursor-pointer inline-flex w-full justify-center rounded-full bg-black/20 px-3 py-3 text-sm text-[#7FD6E1] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {image.file ? 'Change File' : 'Select File'}
                    </label>
                    <input type="file" id="task-image" placeholder="My Task.png" className="hidden" onChange={selectImage} />
                </div>

                {
                    image.file &&
                    <div className="bg-[#2B2B2B] flex items-center gap-x-4 p-4 rounded-lg">
                        <img src={image.url} alt="Profile Picture" className="w-9 h-9 rounded object-cover" />
                        <div className="flex-1 text-sm flex flex-col justify-between">
                            <span className="text-[#CFCFCF]">{image.file.name}</span>
                            <span className="text-[#B9B9B9]">
                                {image.file.size < 1000000
                                    ? (image.file.size * 0.001).toFixed(2) + ' KB'
                                    : (image.file.size * 0.000001).toFixed(2) + ' MB'}
                            </span>
                        </div>
                        <button onClick={setTaskImage} className="cursor-pointer bg-[#4AEBFF] text-[#222222] [box-shadow:_0px_10px_16px_0px_#7FD6E129;] py-2 px-6 rounded-full">Send</button>
                    </div>
                }
            </>
        </Modal>
    )
}
