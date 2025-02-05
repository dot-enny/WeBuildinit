import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export const AccordionItem = () => {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      <DisclosureButton className="w-full border-b pb-2 text-left">Is team pricing available?</DisclosureButton>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          Yes! You can purchase a license that you can share with your entire team.
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}