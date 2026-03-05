
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  //const [message, setMessage] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const message = "Welcome to protected dashboard";
  

  // useEffect(() => {
  //   const fetchProtected = async () => {
  //     try {
  //       const res = await API.get("/api/dashboard");
  //       setMessage(res.data.message);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchProtected();
  // }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-4">{message}</p>

        <div className="flex flex-col items-center gap-4">
          <img
            src={user?.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-md"
          />

          <h3 className="text-lg font-semibold text-gray-700">
            Welcome {user?.name}
          </h3>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;