import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
 
       <div className="flex min-h-screen w-full">
      <Sidebar />
      {/* Sidebar assumed fixed width: 248px */}
      <div className="flex-1 flex flex-col pl-[280px] overflow-x-hidden ">
        <Navbar />
        <div className="flex-1 overflow-y-auto pt-[87px]">
          {/* Add overflow-x-auto wrapper here */}
          <div className="overflow-x-auto h-full p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
