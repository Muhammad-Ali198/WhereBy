import React from "react";
import { useRoutes } from "react-router-dom";
// import SettingComponent from "../pages/settings/Index";
// import DashbordComponent from "../pages/dashboard/Index";

import { Dashbord, Price, Setting } from "../pages/Index";

const Index = () => {
  let allRouteList = useRoutes([
    {
      //Dashbord Route//
      path: "/",
      element: <Dashbord />
      // children: []
    },
    {
      //Dashbord Route//
      path: "dashboard",
      element: <Dashbord />
      // children: []
    },
    {
      //Setting Route//
      path: "settings",
      element: <Setting />
    },
    {
      //Setting Route//
      path: "price",
      element: <Price />
    }
  ]);

  return <div>{allRouteList}</div>;
};

export default Index;
