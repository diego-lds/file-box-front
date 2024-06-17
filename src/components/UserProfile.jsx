const UserProfile = ({ name, picture }) => {
  return (
    <div className="flex items-center justify-around gap-4">
      <p className="text-sm">{name}</p>
      <img
        src={picture}
        alt={`Foto de perfil de ${name}`}
        className="size-10 rounded-full"
        referrerPolicy="no-referrer"
        style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
      />
    </div>
  );
};

export default UserProfile;
