import { DialogTitle } from '@headlessui/react'
import Modal from '../ui/Modal';

export const CreateTask = ({ open, setOpen }:  { open: boolean, setOpen: () => void }) => {
    return (
        <Modal open={open} setOpen={setOpen} hasBackdrop={false}>
            <>
                <div>
                    <div className="mt-3 text-center sm:mt-5">
                        <img src="/assets/icons/pink-star.svg" className="mx-auto mb-10" />
                        <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
                            No Tasks yet for AIgenda to work on
                        </DialogTitle>
                        <p className="text-sm text-[#B9B9B9] leading-[1.181rem] mb-10">
                            Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.
                        </p>
                    </div>
                </div>

                <div className="bg-[#252525] px-6 py-10 mt-5 sm:mt-6 text-center flex flex-col gap-y-2">
                    <img src="/assets/icons/upload-image.svg" className="mx-auto" />
                    <span className="text-[#CFCFCF]">Click or drag and drop to upload your file </span>
                    <span className="text-[#B9B9B9] text-sm">PNG,JPG,PDF,GIF,SVG (Max 5 MB)</span>
                    <button
                        type="button"
                        onClick={setOpen}
                        className="mt-4 cursor-pointer inline-flex w-full justify-center rounded-full bg-black/20 px-3 py-3 text-sm text-[#7FD6E1] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Select File
                    </button>
                </div>
            </>
        </Modal>
    )
}
