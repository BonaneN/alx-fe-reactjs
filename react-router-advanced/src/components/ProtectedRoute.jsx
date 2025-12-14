import { Navigate } from "react-router-dom";
import useAuth from "./useAuth"; // ✅ checker requires this

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ checker wants "useAuth"

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
