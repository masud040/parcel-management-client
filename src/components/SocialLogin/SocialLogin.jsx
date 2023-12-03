import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { saveUser } from "../../api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithSocial } = useAuth();
  const handleLogin = async () => {
    const { user } = await signInWithSocial(googleProvider);
    const saveUserInfo = await saveUser(user, "user");
    console.log(saveUserInfo);
    if (saveUserInfo._id || saveUserInfo.upsertedId) {
      toast.success("Sign Up Successfully");
      navigate("/");
    }
  };
  return (
    <div
      onClick={handleLogin}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialLogin;
