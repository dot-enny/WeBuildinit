import { Textarea } from "@headlessui/react"
import clsx from "clsx"
import { StarIcon } from "../../assets/icons/StarIcon"

export const ChatTextArea = () => {
  return (
    <form className="w-full max-w-md relative mx-auto [box-shadow:_0px_10px_40px_0px_#433F3F42;">
      <Textarea
        className={clsx(
          'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 p-4 text-sm/6 text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          'placeholder:text-[#797777]'
        )}
        placeholder="Enter Instruction for AIgenda"
        rows={1}
      />
      <span className="absolute right-6 inset-y-0 flex items-center">
        <StarIcon outline />
      </span>
    </form>
  )
}