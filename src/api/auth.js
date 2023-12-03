import axios from "axios";
export const saveUser = async (user, role) => {
  const userInfo = {
    name: user?.displayName,
    email: user?.email,
    role: role,
  };

  const { data } = await axios.put(
    `${import.meta.env.VITE_URL}/users`,
    userInfo
  );
  return data;
};
