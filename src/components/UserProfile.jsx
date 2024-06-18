const UserProfile = ({ name, picture }) => {
  return (
    <div className={" "}>
      <p className={" "}>{name}</p>
      <img
        src={picture}
        alt={`Foto de perfil de ${name}`}
        className={" "}
        referrerPolicy="no-referrer"
        style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
      />
    </div>
  );
};

export default UserProfile;
