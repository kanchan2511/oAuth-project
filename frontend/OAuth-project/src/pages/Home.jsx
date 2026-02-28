
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Auth App
        </h1>

        {user ? (
          <Link
            to="/dashboard"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Go to Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;