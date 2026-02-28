import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

 if (loading)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
        Checking authentication...
      </p>
    </div>
  );

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;