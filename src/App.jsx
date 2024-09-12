import React from "react";
import { AppProvider } from "./context/appContex/AppContext";
import AppRoutes from "./appRoutes/AppRoutes";
import Layout from "./layout/Layout";
import { SizeContextProvider } from "./context/sizeContext/SizeContext";
import { SearchProvider } from "./context/searchContext/SearchContext";

function App() {
  return (
    <SizeContextProvider>
      <AppProvider>
        <SearchProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </SearchProvider>
      </AppProvider>
    </SizeContextProvider>
  );
}

export default App;
