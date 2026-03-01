import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>

        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;