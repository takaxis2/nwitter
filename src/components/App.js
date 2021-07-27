import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [init, setinit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setinit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing"}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
