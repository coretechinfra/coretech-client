import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import StaticLayout from "./Layout/StaticLayout";
import MainRouter from "./routes/MainRouter";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <StaticLayout>
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
          <Toaster />
        </StaticLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
