import React from "react";
import Layout from "./layout/Index";
import RoutingComponent from "./routes/Index";

const App = () => {
  return (
    <>
      <Layout>
        <RoutingComponent />
      </Layout>
    </>
  );
};

export default App;
