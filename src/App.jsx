import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex ">
    
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
  
      <div className="flex-1 bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6 bg-[#FFFAF5]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
