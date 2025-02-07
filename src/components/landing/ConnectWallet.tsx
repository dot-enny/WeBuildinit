import { DialogTitle } from '@headlessui/react';
import { useConnectWallet, useConnectWalletUpdate } from '../../context/ConnectWalletContext';
import Modal from '../ui/Modal';
import { useNavigate } from 'react-router-dom';
// import { useAppKit } from '@reown/appkit/react';
// import { useAppKitAccount } from "@reown/appkit/react";
// import { useEffect } from 'react';
// import { useAppStateStore } from '../../lib/AppStateStore';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import { BASE_URL, createUser, getUser } from '../../lib/services';
// import { useGetWallet } from '../../hooks/useGetWallet';
// import { createUser } from '../../lib/services';

export default function ConnectWallet() {
  // const { setWalletAddress } = useAppStateStore();
  const isOpen = useConnectWallet();
  const setOpen = useConnectWalletUpdate();
  const navigate = useNavigate();
  // const { open } = useAppKit();
  // const { address, isConnected } = useAppKitAccount();

  const handleOpenModal = () => {
    // open();
    navigate('/tasks');
  };

  // const { getUser, createUser, user } = useGetWallet();

  // useEffect(() => {
  //   if (isConnected && address) {
  //     getUser().then(() => {
  //       if (user?.detail === 'Not Found') {
  //         createUser(address).then(() => {
  //           console.log('user created');
  //           setWalletAddress(address);
  //           setOpen();
  //         });
  //       } else {
  //         setWalletAddress(address);
  //         setOpen();
  //       }
  //     });
  //   }
  // }, [isConnected, address, getUser, createUser, user, setOpen, setWalletAddress])

  

  return (
    <Modal open={isOpen} setOpen={setOpen}>
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
            onClick={handleOpenModal}
            className="cursor-pointer inline-flex w-full justify-center rounded-full bg-[#7FD6E1] px-3 py-3 text-sm text-[#222222] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {/* {isConnected ? 'Disconnect wallet' : 'Connnect wallet'} */}
            Connect Wallet
          </button>
          <p className="text-center text-[#848D9A] text-xs px-9 leading-[1.25rem] mt-5">By connecting your wallet, you agree to our <a className="text-[#7FD6E1] cursor-pointer">terms of service</a> and our <a className="text-[#7FD6E1] cursor-pointer">privacy policy</a></p>
        </div>
      </>
    </Modal>
  );
}
