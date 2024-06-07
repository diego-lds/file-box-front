import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, className, ...rest }) => {
  return (
    <FontAwesomeIcon icon={icon} className={className + " w-4"} {...rest} />
  );
};

export default Icon;
