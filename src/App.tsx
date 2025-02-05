import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import "./App.css";
import { ConnectWalletProvider } from './context/ConnectWalletContext';
import SidebarLayout from './components/sidebar/SidebarLayout';
import { Tasks } from './pages/Tasks';

import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

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
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function App() {



  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ConnectWalletProvider>
                <Landing />
              </ConnectWalletProvider>
            </div>
          }
        />
        {/* <Route
              path="/chat"
              element={
                <SidebarLayout>
                  <Chat />
                </SidebarLayout>
              }
            /> */}
        <Route
          path="/tasks"
          element={
            <div>
              {/* <WalletProvider> */}

                <SidebarLayout>
                  {/* <FileProvider> */}
                    <Tasks />
                  {/* </FileProvider> */}
                </SidebarLayout>
              {/* </WalletProvider> */}
            </div>
          }
        />
        {/* New page */}

      </Routes>
    </Router>
  );
}

export default App;
