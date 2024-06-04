import { useEffect, useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import './App.css';

const App = () => {
  const location = useLocation();
  const lastLocationPath = useRef("");
  useEffect(() => {
    // 当 location 对象发生变化时，会执行这个 effect
    if (lastLocationPath.current !== location.pathname) {
      console.log(" 路由发生变化: ", lastLocationPath.current, location.pathname);
      lastLocationPath.current = location.pathname;
    }
  }, [location]);
  return (
    <div className="app-container flex flex-col h-screen w-screen overflow-auto">
      <div className="header h-8 w-full bg-primary-active opacity-80 fixed top-0 left-0 z-10"></div>
      <div className="bg-primary relative home-bg-head"></div>
      {/* <div className="flex flex-col gap-1">
        <Link to="overview">overview</Link>
        <Link to="technology-stack">technology</Link>
        <Link to="work-experience">experience</Link>
      </div>
      <Outlet /> */}
    </div>
  );
};

export default App;
