import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import CategoryList from "./screens/CategoryList";
import FAQ from "./screens/Faq";
import Users from "./screens/DefaultCategoryComponent";
import Header from "./components/Header";
import Login from "./Login/Login";


import { Provider } from 'react-redux';
import store from './redux/Store';
import CategoryDetail from "./screens/CategoryDetail";


// App.tsx
// ... (import statements remain unchanged)

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);


  const handleLogin = (role: string) => {
    setLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserRole(null);
  };
  // const handleLogin = (role: string) => {
  //   setUserRole(role);
  // };
 


  return (
    <Router>
      {isLoggedIn ? (
        <>
        <div>
        <Header isLoggedIn={isLoggedIn} username={userRole || ''} onLogout={handleLogout} />
          <div className="flex h-screen bg-gray-200">
          
      <Sidebar userRole={userRole} />
            <main className="flex-grow p-8">
              <Provider store={store}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/category-list" element={<CategoryList />} />
                  <Route path="/category/:categoryName" element={<CategoryDetail />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/users" />
                  
                </Routes>
              </Provider>
            </main>
          </div>
         
          </div>
        </>
      ) : (
        
        <Login onLogin={handleLogin} />
        
      )}
    </Router>
  );
};

export default App;
