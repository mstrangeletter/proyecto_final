/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import CardUser from "../components/CardUser";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      email: email,
      name: name,
      phone: phone,
      password: password,
      id: user.id,
    });

    Swal.fire("Datos actualizados");
  };

  return (
    <div>
      <h1>Profile</h1>
      <CardUser />
    </div>
  );
};
export default Profile;
