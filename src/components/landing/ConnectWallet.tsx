import { DialogTitle } from '@headlessui/react'
import { useConnectWallet, useConnectWalletUpdate } from '../../context/ConnectWalletContext'
import Modal from '../ui/Modal';
import { useNavigate } from 'react-router-dom';

export default function ConnectWallet() {

  const open = useConnectWallet();
  const setOpen = useConnectWalletUpdate();
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    setOpen();
    navigate('/chat');
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <>
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <img src="/assets/illustrations/connect-wallet-illustration.svg" className="mx-auto mb-8" />
            <DialogTitle as="h3" className="text-[1.25rem] text-white mb-5">
              Connect your wallet to get started
            </DialogTitle>
            <p className="text-sm text-[#B9B9B9] leading-[1.181rem] mb-30">
              Transform your daily to-do list into a simple, smart plan. Whether you're managing a hectic work schedule or juggling personal goals, AIgenda offers intuitive scheduling tailored to your day.
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            onClick={handleConnectWallet}
            className="cursor-pointer inline-flex w-full justify-center rounded-full bg-[#7FD6E1] px-3 py-3 text-sm text-[#222222] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Connnect wallet
          </button>
          <p className="text-center text-[#848D9A] text-xs px-9 leading-[1.25rem] mt-5">By connecting your wallet, you agree to our <a className="text-[#7FD6E1] cursor-pointer">terms of service</a> and our <a className="text-[#7FD6E1] cursor-pointer">privacy policy</a></p>
        </div>
      </>
    </Modal>
  )
}
