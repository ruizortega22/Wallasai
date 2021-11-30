import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./ProfileComp.scss";
import { CreatePlant, PictureForm } from "../../components";
import { UserPhoto } from "../../components";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="profile">
      <div class="profile_interface">
      <h2>Mi perfil</h2>
      <UserPhoto />
        <ul className="profile_list">
          <li>Usuario: {user.name}</li>
          <li>E-mail: {user.email}</li>
        <h3>Selecciona foto de perfil</h3>
        <PictureForm />
        </ul>
        </div>
      <div className="profile_create">
        <CreatePlant />
      </div>
      </div>

  );
};

export default Profile;
