import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import "./App.css";
import { ConnectWalletProvider } from './context/ConnectWalletContext';
import SidebarLayout from './components/sidebar/SidebarLayout';
import { Tasks } from './pages/Tasks';

// import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
// import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useAppStateStore } from './lib/AppStateStore';
// import { useEffect } from 'react';


// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// 1. Get projectId from https://cloud.reown.com
const projectId = 'f4870358a6e524b2eabe5f488474c89c';

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Solana Example',
  url: 'https://aigenda-xi.vercel.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Create modal
const walletAddress = sessionStorage.getItem('walletAddress');
if(walletAddress) {
  console.log(walletAddress)
} else {
  console.log('no wallet address')
}
// if (!walletAddress) {
//   createAppKit({
//     adapters: [solanaWeb3JsAdapter],
//     networks: [solana, solanaTestnet, solanaDevnet],
//     metadata: metadata,
//     projectId,
//     features: {
//       analytics: true // Optional - defaults to your Cloud configuration
//     }
//   })
// }

const queryClient = new QueryClient()

function App() {

  // const { walletAddress } = useAppStateStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <ConnectWalletProvider>
                  {/* {walletAddress ? ( // Conditionally render based on walletAddress
                    <Navigate to="/tasks" replace={true} /> // Redirect if walletAddress exists
                  ) : ( */}
                    <Landing /> // Render Landing component if walletAddress is null/undefined
                  {/* )} */}
                </ConnectWalletProvider>
              </div>
            }
          />
          <Route
            path="/tasks"
            element={
              <div>
                <SidebarLayout>
                  <Tasks />
                </SidebarLayout>
              </div>
            }
          />
          {/* New page */}

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
