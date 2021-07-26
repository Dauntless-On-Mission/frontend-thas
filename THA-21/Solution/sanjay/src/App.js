import React, { useState } from "react";
import { Login } from "./components/Login";
import { Posts } from "./components/Posts";

function App() {
  const [isLoggedIn, setIsLogginedIn] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Day 21</h1>
      </header>

      {isLoggedIn ? (
        <Posts setIsLogginedIn={setIsLogginedIn} />
      ) : (
        <section className="login-wrapper">
          <Login setIsLogginedIn={setIsLogginedIn} />
        </section>
      )}
    </div>
  );
}

export default App;
