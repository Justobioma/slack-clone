import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  //define user in a useState hook
  //const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
      {/* Sidebar */}
      {/* React-Router -> Chat screen*/}
    </div>
  );
}

export default App;
