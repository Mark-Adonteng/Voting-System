// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import CategoryList from "./screens/CategoryList";
import VotingList from "./screens/VotingList";
import Users from "./screens/Users";
import Header from "./components/Header";
import Login from "./Login/Login";
import { VotingProvider } from "./VotingContext/VotingContext";

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can implement your login logic here
    // For simplicity, I'm just setting the login status to true
    setLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
        <VotingProvider>
          <Header />
          <div className="flex h-screen bg-gray-200">
            <Sidebar />
            <main className="flex-grow p-8">
             
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/category-list" element={<CategoryList />} />
                <Route path="/voting-list" element={<VotingList />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </main>
          </div>
          </VotingProvider>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
