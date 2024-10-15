const getSizeStringWithRem = (size: number): string => {
  return size + "rem";
}

interface ProfileIconProps {
  diameter: number;
  color: string;
  nickname: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({diameter, color, nickname}) => {
  const getNicknameInitial = (nickname: string): string => {
    return nickname[0];
  };

  const nicknameInitialFontSize = diameter / 3;

  return (
    <div
      className="
        flex
        ml-auto"
    >
      <div
        className="
          flex
          items-center
          justify-center
          rounded-[50%]
        "
        style={{
          width: getSizeStringWithRem(diameter),
          height: getSizeStringWithRem(diameter),
          backgroundColor: color
        }}
      >
        <p
          className="
            color-white
          "
          style={{
            fontSize: getSizeStringWithRem(nicknameInitialFontSize),
          }}
        >
          {getNicknameInitial(nickname)}
        </p>
      </div>
    </div>
  );
}

export default ProfileIcon;