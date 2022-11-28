import "bootstrap/dist/css/bootstrap.css";
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "react-bootstrap/Spinner";
import "./index.css";
import { NavMenu } from "./components/shared/NavMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import { persistor, store } from "./redux/store";

import reportWebVitals from "./reportWebVitals";
import { ShouldRender } from "./components/shared/ShouldRender";

const App: FC = () => {
  console.log(window.location);
  return (
    <>
      <ShouldRender
        check={
          window.location.pathname !== "/signup" &&
          window.location.pathname !== "/login"
        }
      >
        <NavMenu />
      </ShouldRender>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/stories/:type" element={<Stories />} />
            <Route path="/search" element={<Search />} />
            <Route path="/story" element={<Story />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Spinner animation="border" />}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default App;
