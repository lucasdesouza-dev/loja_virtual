import { useState } from "react";
import Logo from "../assets/loja_virtual.png";
const NavBar = () => {
  const [urlUser, setUrlUser] = useState(
    "https://www.gravatar.com/avatar/4d45cbc6ee24fac3f9881ffbe16e68c2.jpg?s=40&d=blank"
  );
  return (
    <div className="w-full h-24 border border-black flex justify-between">
      <div className="w-36 p-4 m-2">
        <picture>
          <img src={Logo} alt="Logo" />
        </picture>
      </div>
      <div className="flex items-center j">
        <picture>
          {urlUser != null || urlUser != undefined || urlUser ? (
            <img className="rounded-full" src={urlUser} alt="User" />
          ) : (
            <img
              className="w-12 rounded-full"
              src={"http://cdn.onlinewebfonts.com/svg/img_184513.png"}
              alt="User"
            />
          )}
        </picture>
        <div className="m-4">
          <h1>
            <strong>SouzaTech</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
