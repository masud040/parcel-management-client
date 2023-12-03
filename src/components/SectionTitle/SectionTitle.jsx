import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text pb-2 border-indigo-600 border-b-4">
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
