import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, className, ...rest }) => {
  return <FontAwesomeIcon icon={icon} className={className} {...rest} />;
};

export default Icon;
