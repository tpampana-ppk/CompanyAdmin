import { useState } from "react";
import AuthTocken from "./components/AuthTocken";
import Company_Dashboard from "./components/Company_Dashboard";
import { authTocken } from "./context/authContext";
const App = () => {
  const [tocken, setTocken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(true);
  const handleSubmit = (tocken: string) => {
    setTocken(tocken);
    setAuth(false);
  };

  return (
    <>
      {auth && <AuthTocken onSubmit={handleSubmit} />}
      {!auth && (
        <authTocken.Provider value={{ tocken }}>
          <Company_Dashboard />
        </authTocken.Provider>
      )}
    </>
  );
};

export default App;
