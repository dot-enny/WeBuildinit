import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';

import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing />
              
            </div>
          }
        />
        {/* New page */}
        
      </Routes>
    </Router>
  );
}

export default App;
