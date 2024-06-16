const Spinner = ({ ...rest }) => {
  return (
    <img
      src="/spinner.svg"
      alt="Loading spinner"
      className="spinner"
      {...rest}
    />
  );
};

export default Spinner;
