import React, { useEffect, useState } from "react";
import { validateSession, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const sessionData = await validateSession();
      if (sessionData.isAuthenticated) {
        setUser(sessionData.user);
      } else {
        navigate("/login"); // Redirect ke login jika tidak ada sesi
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav>
      <h1>Navbar</h1>
      {user && (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

// pppp
export default Teacher;
