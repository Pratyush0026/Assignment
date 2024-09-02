import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[475px] relative overflow-hidden shrink-0 z-[4] text-left text-xl text-white font-poppins ${className}`}
    >
      <div className="absolute top-[37px] left-[20px] shadow-[0px_4px_10px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-xl bg-gray-200 w-[149px] h-[62px]" />
      <div className="absolute top-[53px] left-[59px] font-medium inline-block min-w-[72px] z-[1] mq450:text-base">
        Gallery
      </div>
      <div className="absolute top-[91px] left-[-19px] w-[300px] h-[319px] z-[1]">
        <img
          className="absolute top-[55px] left-[39px] rounded-3xl w-[190px] h-[179px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5160@2x.png"
        />
      </div>
      <div className="absolute top-[91px] left-[192px] w-[300px] h-[319px] z-[2]">
        <img
          className="absolute top-[55px] left-[39px] rounded-3xl w-[190px] h-[179px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5160@2x.png"
        />
      </div>
      <div className="absolute top-[90px] left-[403px] w-[300px] h-[319px] z-[3]">
        <img
          className="absolute top-[55px] left-[39px] rounded-3xl w-[190px] h-[179px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5160@2x.png"
        />
      </div>
      <div className="absolute top-[90px] left-[614px] w-[300px] h-[319px] z-[4]">
        <img
          className="absolute top-[55px] left-[39px] rounded-3xl w-[190px] h-[179px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-5160@2x.png"
        />
      </div>
      <img
        className="absolute top-[49px] left-[581px] w-[45px] h-[45px] z-[5]"
        loading="lazy"
        alt=""
        src="/component-312.svg"
      />
      <img
        className="absolute top-[48px] left-[518px] w-[45px] h-[45px] z-[4]"
        loading="lazy"
        alt=""
        src="/component-313.svg"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
