


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  GraduationCap,
  CalendarCheck2,
  ClipboardList,
  FileText,
  CreditCard,
  BedDouble,
  Users,
  User,
  LifeBuoy,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  UsersRound,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDropdown = (path) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { path: '/home', label: 'Home', icon: <Home size={20} /> },
    { path: '/courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { path: '/cgpa', label: 'CGPA', icon: <GraduationCap size={20} /> },
    { path: '/calender', label: 'Academic Calendar', icon: <CalendarCheck2 size={20} /> },
    { path: '/attendance', label: 'Attendance', icon: <ClipboardList size={20} /> },
    {
      path: '/exam',
      label: 'Examination',
      icon: <FileText size={20} />,
      submenu: [
        { path: '/exam/results', label: 'Results' },
        { path: '/exam/internals', label: 'Internals' },
      ],
    },
    {
      path: '/fees',
      label: 'Fees',
      icon: <CreditCard size={20} />,
      submenu: [
        { path: '/fees/mypayments', label: 'My Payments' },
        { path: '/fees/structure', label: 'Fee Structure' },
        { path: '/fees/tuition', label: 'Tuition' },
        { path: '/fees/examfee', label: 'Examination Fee' },
      ],
    },
    {
      path: '/club',
      label: 'Club',
      icon: <UsersRound size={20} />,
      submenu: [
        { path: '/club/view', label: 'View & Join Clubs' },
        { path: '/club/events', label: 'Events & Competitions' },
      ],
    },
    { path: '/hostel/room', label: 'Hostel', icon: <BedDouble size={20} /> },
    { path: '/counselling', label: 'Counselling', icon: <Users size={20} /> },
    { path: '/profile/view', label: 'Profile', icon: <User size={20} /> },
    { path: '/support/raise', label: 'Support', icon: <LifeBuoy size={20} /> },
    { path: '/timetable/view', label: 'Timetable', icon: <Clock size={20} /> },
  ];

  const isActive = (path) => location.pathname === path;

  const renderMenuItem = (item) => {
    const active = isActive(item.path);
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isDropdownOpen = openDropdowns[item.path];

    return (
      <div key={item.path} className="mb-2">
        {/* Main menu item */}
        <div
          className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors cursor-pointer ${
            active ? 'bg-amber-500 text-white' : 'text-white hover:bg-slate-700'
          }`}
          onClick={() => {
            if (hasSubmenu) {
              toggleDropdown(item.path);
            }
          }}
        >
          {hasSubmenu ? (
            <div className="flex items-center gap-3 flex-grow overflow-hidden">
              <span>{item.icon}</span>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </div>
          ) : (
            <Link to={item.path} className="flex items-center gap-3 flex-grow overflow-hidden">
              <span>{item.icon}</span>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </Link>
          )}
          {hasSubmenu && sidebarOpen && (
            <span>
              {isDropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </span>
          )}
        </div>

        {/* Submenu items */}
        {hasSubmenu && isDropdownOpen && sidebarOpen && (
          <div className="ml-6 mt-1 space-y-1">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.path}
                to={subItem.path}
                className={`block px-3 py-1 text-sm rounded-md transition-colors ${
                  isActive(subItem.path)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 h-full bg-blue-900 shadow-lg flex flex-col min-w-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4">
          {sidebarOpen && (
            <span className="text-white text-lg font-semibold truncate">Student Portal</span>
          )}
          <button onClick={toggleSidebar} className="text-white hover:text-blue-400">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 px-2 pb-4 overflow-y-auto scrollbar-hidden">
          {menuItems.map(renderMenuItem)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
