const UserProfile = ({ name, picture, handleLogout }) => {
  return (
    <div className={"flex items-center justify-between basis-64 flex-nowrap "}>
      <p className={"text-sm inline"}>{name}</p>

      <img
        src={picture}
        alt={`Foto de perfil`}
        className={"rounded-full"}
        width={64}
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
