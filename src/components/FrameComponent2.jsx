import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  propPadding,
  propHeight,
  propWidth,
  propTextDecoration,
  propBottom,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
      width: propWidth,
    };
  }, [propPadding, propHeight, propWidth]);

  const experiencesStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const rectangleDivStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-row items-start justify-start py-4 px-[43px] relative gap-2.5 text-center text-lg text-gray-40 font-poppins ${className}`}
      style={frameDivStyle}
    >
      <a
        className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[108px]"
        style={experiencesStyle}
      >
        Experiences
      </a>
      <div
        className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[-200px] rounded-2xl [background:linear-gradient(90deg,_rgba(39,_39,_40,_0.12),_rgba(150,_190,_231,_0.06))]"
        style={rectangleDivStyle}
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propBottom: PropTypes.any,
};

export default FrameComponent2;
