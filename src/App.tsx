import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import CategoryList from "./screens/CategoryList";
import VotingList from "./screens/VotingList";
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

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Header />
          <div className="flex h-screen bg-gray-200">
            <Sidebar />
            <main className="flex-grow p-8">
              <Provider store={store}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/category-list" element={<CategoryList />} />
                  <Route path="/category/:categoryName" element={<CategoryDetail />} />
                  <Route path="/voting-list" element={<VotingList />} />
                  <Route path="/users" element={<Users />} />
                </Routes>
              </Provider>
            </main>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
