import FrameComponent2 from "./FrameComponent2";
import Component1 from "./Component1";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start relative gap-1.5 max-w-full z-[6] text-center text-lg text-gray-40 font-poppins mq825:flex-wrap ${className}`}
    >
      <div className="h-full w-[195px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] shadow-[-8.4px_-16.9px_50.6px_-16.87px_#485b71,_13.5px_16.9px_67.47px_8.43px_#0a0a0a] rounded-2xl bg-gray-100" />
      <div className="rounded-2xl flex flex-row items-start justify-start py-4 px-[54px] z-[1] text-white">
        <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[87px]">
          About Me
        </a>
      </div>
      <FrameComponent2 />
      <Component1 />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
