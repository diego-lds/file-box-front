const Spinner = ({ ...rest }) => {
  return (
    <img src="/spinner.svg" alt="Loading spinner" className={" "} {...rest} />
  );
};

export default Spinner;
