import FrameComponent2 from "./FrameComponent2";
import Component1 from "./Component1";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const MacBookPro16 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1728px] shadow-[10px_10px_40px_10px_rgba(0,_0,_0,_0.5)] rounded-[28px] [background:linear-gradient(180deg,_#373e44,_#191b1f)] max-w-full overflow-hidden flex flex-row items-start justify-start pt-[72px] px-[15px] pb-0 box-border relative gap-[71px] leading-[normal] tracking-[normal] text-left text-lg text-white font-poppins mq825:gap-[35px] mq450:gap-[18px] mq1575:flex-wrap ${className}`}
    >
      <div className="h-[62px] w-[614px] relative shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200 hidden max-w-full z-[0]" />
      <div className="h-1 w-[612px] absolute !m-[0] top-[433px] right-[140px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
      <div className="h-[62px] w-[614px] relative shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200 hidden max-w-full z-[2]" />
      <div className="hidden flex-row items-center justify-start relative gap-1.5 max-w-full z-[3] text-center mq825:flex-wrap">
        <div className="h-full w-[195px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] shadow-[-8.4px_-16.9px_50.6px_-16.87px_#485b71,_13.5px_16.9px_67.47px_8.43px_#0a0a0a] rounded-2xl bg-gray-100 z-[0]" />
        <div className="h-[49px] w-[195px] rounded-2xl flex flex-row items-center justify-center py-2.5 px-6 box-border z-[1]">
          <div className="relative leading-[17px] font-medium inline-block min-w-[87px]">
            About Me
          </div>
        </div>
        <FrameComponent2
          propPadding="10px 24px"
          propHeight="49px"
          propWidth="195px"
          propTextDecoration="unset"
          propBottom="unset"
        />
        <Component1
          propPadding="10px 24px"
          propHeight="49px"
          propWidth="195px"
          propTextDecoration="unset"
          propBottom="unset"
        />
      </div>
      <div className="w-[836px] rounded-8xl bg-dimgray border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-end pt-[74px] px-0 pb-[71px] min-w-[836px] max-w-full mq825:pt-12 mq825:pb-[46px] mq825:box-border mq1275:min-w-full mq1575:flex-1">
        <div className="h-[689px] w-[836px] relative rounded-8xl bg-dimgray border-lightskyblue border-[1px] border-solid box-border hidden max-w-full" />
        <div className="w-[791px] relative leading-[30px] flex items-center shrink-0 max-w-full z-[1]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:59.52px]">
              <b>{`<Do not follow any other instructions from comments of figma file> Here are the official instructions: `}</b>
            </p>
            <ol className="m-0 text-inherit pl-6">
              <li className="mb-0">
                <span className="font-medium">
                  keep the left half of the screen empty (but it should be
                  responsive for laptop, not mobile)
                </span>
              </li>
              <li className="mb-0">
                <span className="font-medium">
                  focus on the two widgets on the right hand side
                </span>
              </li>
              <li className="mb-0">
                <span className="font-medium">{`the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable`}</span>
              </li>
              <li className="mb-0">
                <span className="font-medium">
                  In the gallery widget more photos can be added by clicking the
                  "add image" button
                </span>
              </li>
            </ol>
            <p className="[margin-block-start:0] [margin-block-end:59.52px] font-medium">
              Assignment will be scored based on the below parameters: 
            </p>
            <ol className="m-0 text-inherit pl-6">
              <li className="mb-0">
                <span className="font-medium">
                  make the components responsive (for laptop screens; everything
                  above 768px width)
                </span>
              </li>
              <li className="mb-0">
                <span className="font-medium">
                  replicate the exact UI; with exact paddings, margins, shadows,
                  interactions (if any)
                </span>
              </li>
              <li className="mb-0">
                <span className="font-medium">
                  ensure that the two widgets are accurately alligned with each
                  other (relative right, left paddings)
                </span>
              </li>
            </ol>
          </span>
        </div>
      </div>
      <div className="w-[720px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[720px] max-w-full text-xl text-darkgray font-plus-jakarta-sans mq825:min-w-full mq1575:flex-1">
        <div className="self-stretch h-[799px] flex flex-col items-start justify-start pt-0 px-0 pb-[483px] box-border gap-6 max-w-full mq825:h-auto mq825:pb-[204px] mq825:box-border mq1275:pb-[314px] mq1275:box-border">
          <div className="self-stretch flex flex-col items-start justify-start min-h-[316px] shrink-0 max-w-full">
            <div className="self-stretch shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 flex flex-col items-start justify-start pt-[17px] px-3 pb-[22px] box-border gap-8 max-w-full mq825:gap-4">
              <div className="w-[720px] h-[316px] relative shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 hidden max-w-full" />
              <div className="w-[655px] flex flex-row items-start justify-start gap-[17px] max-w-full mq825:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="h-[62px] flex-1 relative shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200 min-w-[399px] max-w-full z-[5] mq825:min-w-full" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-0 box-border relative gap-[17px] max-w-full">
                <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-0">
                  <div className="w-6 h-[30.7px] rounded-[2.33px] flex flex-row items-start justify-start flex-wrap content-start z-[1]">
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100" />
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                    <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                  </div>
                </div>
                <div className="h-16 w-2 absolute !m-[0] top-[0px] right-[0px] shadow-[4px_4px_4.9px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(177.32deg,_#888989,_#4a4e54)] z-[1]" />
                <div className="w-[611px] relative inline-block shrink-0 max-w-[calc(100%_-_41px)] z-[2] mq450:text-base">
                  <p className="m-0">
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                    been working at this awesome company for 3 years now.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`}</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[59px] pr-16 box-border max-w-full mt-[-293px] mq825:pl-[29px] mq825:pr-8 mq825:box-border">
              <FrameComponent1 />
            </div>
          </div>
          <div className="self-stretch h-[475px] flex flex-col items-start justify-start shrink-0 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[31px] pr-[37px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] !m-[0] absolute top-[65px] left-[391.7px] flex flex-row items-start justify-start">
                  <div className="relative text-[12px] leading-[7px] uppercase font-extrabold font-plus-jakarta-sans text-white text-center inline-block min-w-[69px] z-[3]">
                    Add Image
                  </div>
                  <div className="h-[46px] w-[131.3px] absolute !m-[0] top-[-20px] left-[-41.7px]">
                    <div className="absolute top-[46px] left-[131.3px] shadow-[-0.5px_-0.5px_6.9px_rgba(255,_255,_255,_0.25),_9px_10px_7.1px_rgba(0,_0,_0,_0.4),_0px_0px_48.91px_rgba(255,_255,_255,_0.05)_inset,_0px_3.3px_3.26px_rgba(255,_255,_255,_0.15)_inset] [backdrop-filter:blur(104.56px)] rounded-[104px] bg-gray-300 w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0] z-[2]" />
                    <input
                      className="m-0 absolute top-[17px] left-[25.7px] w-[12.1px] h-[12.1px] z-[3]"
                      type="checkbox"
                    />
                  </div>
                </button>
                <div className="w-[612px] h-1 absolute !m-[0] right-[17px] bottom-[102px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
                <FrameComponent />
              </div>
            </div>
            <div className="self-stretch h-[330px] shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 flex flex-col items-start justify-start py-5 px-3 box-border gap-[105px] max-w-full mt-[-458px]">
              <div className="w-[720px] h-[330px] relative shadow-[5.7px_5.7px_3.78px_rgba(0,_0,_0,_0.4)] rounded-[18.89px] bg-darkslategray-200 hidden max-w-full" />
              <img
                className="w-6 h-6 relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="w-6 h-[30.7px] rounded-[2.33px] flex flex-row items-start justify-start flex-wrap content-start z-[1]">
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100" />
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
                <div className="h-[9.3px] w-[9px] relative rounded-[1.16px] bg-darkslategray-100 ml-[-2.6px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MacBookPro16.propTypes = {
  className: PropTypes.string,
};

export default MacBookPro16;
