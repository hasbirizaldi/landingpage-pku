import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen poppins">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
