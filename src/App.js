
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/homePage";
import SignUp from "./pages/singUp";
import Login from "./pages/login";
import AuthProvider from "./components/authProvider";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="authentication/login" element={<Login />} />
        <Route path="authentication/sign-up" element={<SignUp />} />
        <Route path="home" element={
          <AuthProvider>
            <HomePage />
          </AuthProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;