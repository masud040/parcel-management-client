import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className=" w-[90%] text-gray-700 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
