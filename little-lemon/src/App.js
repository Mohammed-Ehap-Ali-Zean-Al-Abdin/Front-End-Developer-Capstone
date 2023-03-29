import './App.css';
import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Table from './Components/Table';
import Menu from './Components/Menu';
import Home from './Components/Home';
const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Booking-Table",
    element: <Table/>,
  },
  {
    path: "/Menu",
    element: <Menu/>,
  }
]);
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={Root} />
      </React.StrictMode>
    </div>
  );
}

export default App;
