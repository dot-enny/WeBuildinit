import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';

import "./App.css";
import { ConnectWalletProvider } from './context/ConnectWalletContext';
import { Chat } from './pages/Chat';
import SidebarLayout from './components/sidebar/SidebarLayout';
import { Tasks } from './pages/Tasks';
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
        <Route
          path="/chat"
          element={
            <SidebarLayout>
              <Chat />
            </SidebarLayout>
          }
        />
        <Route
          path="/tasks"
          element={
            <SidebarLayout>
              <Tasks />
            </SidebarLayout>
          }
        />
        {/* New page */}
        
      </Routes>
    </Router>
  );
}

export default App;
