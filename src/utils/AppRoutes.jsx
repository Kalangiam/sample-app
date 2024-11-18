import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/Forgetpassword";
import ResetPassword from "../components/Resetpassword";

const AppRouter = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/users/reset-password', element: <ResetPassword /> },


]


export default AppRouter