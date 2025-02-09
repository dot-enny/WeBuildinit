import { DialogTitle } from '@headlessui/react';
import { useUploadImage } from '../../../../hooks/useUploadImage';
import { useAppStateStore } from '../../../../lib/AppStateStore';
import Modal from '../../../ui/Modal';
import { useCreateListWithImage } from '../../../../hooks/lists/useCreateListWithImage';
import { Spinner } from '../../../ui/Spinner';

interface ImageModeProps {
    open: boolean;
    setOpen: () => void;
    getAllLists: () => void;
}


export const CreateListWithImage = ({ open, setOpen, getAllLists }: ImageModeProps) => {

    const { walletAddress, listObjects, setListObjects } = useAppStateStore();

    const { uploadImageMutation, isPending } = useUploadImage();
    const { image, selectImage, dragging, handleDragOver, handleDragExit, handleDrop } = useCreateListWithImage()

    const newList = {
        id: '',
        img: '',
        items: [],
        name: image.file?.name,
        suggestion: '',
    }

    const handleFileUpload = async () => {
        const originalListObjects = [ ...listObjects ];
        try {
            await uploadImageMutation({ image, walletAddress });
            const updatedLists = [...listObjects, newList];
            setListObjects(updatedLists);
            setOpen();
            getAllLists();    
        } catch (error) {
            console.error('error creating list with image from modal', error)
            setListObjects(originalListObjects);
        }
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

                <div className={`px-6 py-8 mt-5 sm:mt-6 text-center flex flex-col gap-y-2 mt-8 ${dragging ? 'bg-[#2B2B2B]' : 'bg-[#252525]'}`}
                    onDragOver={handleDragOver}
                    onDragExit={handleDragExit}
                    onDrop={handleDrop}
                >
                    <img src="/assets/icons/upload-image.svg" className="mx-auto" />
                    <span className="text-[#CFCFCF]">Click or drag and drop to upload your file</span>
                    <span className="text-[#B9B9B9] text-sm">PNG,JPG,SVG,WEBP,AVIV (Max 5 MB)</span>
                    <label
                        htmlFor="task-image"
                        className="mt-4 cursor-pointer inline-flex w-full justify-center rounded-full bg-black/20 px-3 py-3 text-sm text-[#7FD6E1] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {image.file ? 'Change File' : 'Select File'}
                    </label>
                    <input type="file" id="task-image" placeholder="My Task.png" className="hidden" onChange={selectImage} accept="image/*" />
                </div>

                {
                    image.file &&
                    <div className="bg-[#2B2B2B] flex items-center gap-x-4 p-4 rounded-lg mt-8">
                        <img src={image.url} alt="Profile Picture" className="w-9 h-9 rounded object-cover" />
                        <div className="flex-1 text-sm flex flex-col justify-between">
                            <span className="text-[#CFCFCF]">{image.file.name}</span>
                            <span className="text-[#B9B9B9]">
                                {image.file.size < 1000000
                                    ? (image.file.size * 0.001).toFixed(2) + ' KB'
                                    : (image.file.size * 0.000001).toFixed(2) + ' MB'}
                            </span>
                        </div>
                        <button onClick={handleFileUpload} className="cursor-pointer bg-[#4AEBFF] text-[#222222] [box-shadow:_0px_10px_16px_0px_#7FD6E129;] py-2 px-6 rounded-full relative">
                            <span className={`${isPending ? 'invisible' : ''}`}>Send</span>
                            <Spinner className={`${!isPending ? 'invisible' : 'size-2'}`} />
                        </button>
                    </div>
                }
            </>
        </Modal>
    )
}
