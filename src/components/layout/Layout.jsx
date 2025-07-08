import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    // <div className="flex h-screen bg-background">
    //   <Sidebar />
    //   <div className="flex flex-col flex-1">
    //     <Navbar />
    //     <main className="p-4 overflow-auto">
    //       {children}
    //     </main>
    //   </div>
    // </div>
       <div className="flex min-h-screen w-full">
      <Sidebar />
      {/* Sidebar assumed fixed width: 248px */}
      <div className="flex-1 flex flex-col  overflow-x-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-2">
          {/* Add overflow-x-auto wrapper here */}
          <div className="overflow-x-auto h-full px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
