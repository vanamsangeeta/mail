// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1 mt-14 mb-14 p-4 bg-gray-50">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Sticky Header (doesn't overlap sidebar) */}
      <header className="sticky top-0 z-50 bg-red-700">
        <Header />
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6 bg-white">
        {children}
      </main>

      {/* Sticky Footer (doesn't overlap sidebar) */}
      <footer className="sticky bottom-0 z-50 bg-red-700">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
