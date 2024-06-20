const UserProfile = ({ name, picture, handleLogout }) => {
  return (
    <div
      className={
        "flex items-center justify-around md:justify-between basis-64  "
      }
    >
      <p className={"text-sm "}>{name}</p>

      <img
        src={picture}
        alt={`Foto de perfil`}
        className={"rounded-full w-10 md:w-14"}
        referrerPolicy="no-referrer"
      />
      <div>
        <button
          className={"border border-custom   px-8"}
          onClick={() => handleLogout()}
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
