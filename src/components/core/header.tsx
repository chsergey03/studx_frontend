import logo from "/assets/logo.png";

import ProfileIcon from "../profile/profile_icon.tsx";

interface HeaderProperties {
  isNecessaryToDisplayProfileIcon?: boolean;
}

function Header({ isNecessaryToDisplayProfileIcon = false }: HeaderProperties) {
  return (
    <header>
      <div
        className="
          flex
          justify-between
          items-center
          mx-[1rem]
          mb-[1rem]
          p-[1rem]
          rounded-b-[2.75rem]
          bg-[#222222]
        "
      >
        <span className="w-[20%]" />

        <span>
          <img
            className="
              w-[5.5rem]
            "
            src={logo}
          />
        </span>

        <div
          className="
            w-[20%]
            flex
            justify-right
          "
        >
          {isNecessaryToDisplayProfileIcon &&
             <ProfileIcon diameter={4.5} color="#008000" nickname="admin"/>}
        </div>
      </div>
    </header>
  );
}

export default Header;