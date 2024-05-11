import PropTypes from "prop-types";
const SectionContent = ({ title, bottomContent, topContent }) => {
  return (
    <div className="poppins text-center space-y-3">
      {topContent && (
        <p className="text-base text-primary font-medium uppercase">
          {topContent}
        </p>
      )}
      <h2 className="text-2xl sm:text-4xl font-bold text-base-content">
        {title}
      </h2>
      {bottomContent && (
        <p className="text-[15px] text-base-content mx-auto w-[85%]  lg:w-[60%] xl:w-[50%]">
          {bottomContent}
        </p>
      )}
    </div>
  );
};

SectionContent.propTypes = {
  title: PropTypes.string,
  topContent: PropTypes.string,
  bottomContent: PropTypes.string,
};

export default SectionContent;
