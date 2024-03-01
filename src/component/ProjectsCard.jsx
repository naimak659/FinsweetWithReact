import React from "react";

export default function ProjectsCard() {
  return (
    <>
      <div id="projects" className="py-32 font-poppins">
        <div className="container mx-auto">
          <div className="proText flex justify-between">
            <h3 className="text-cmDarkBlue text-5xl font-semibold leading-relaxed">
              View our projects
            </h3>
            <div className="proText__link flex items-center font-medium text-base leading-7">
              <span>View Pricing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#282938"
                />
              </svg>
            </div>
          </div>
          <div className="proPics flex mt-16 justify-between">
            <div className="left group overflow-hidden relative ">
              <div className="left_pic   w-[843px] ">
                <picture>
                  <img src="src/assets/images/Card.png" alt="Card.png" />
                </picture>
              </div>
              <div
                className="pt-72 px-9 w-1/2 text-white 
                gradiantHover h-full gradiantPROJECT "
              >
                <h5 className="font-semibold text-2xl leading-9">
                  Workhub office Webflow Webflow Design
                </h5>
                <p className="font-medium text-base leading-7 text-white/80 pt-4 pb-9">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <div className="flex items-center text-cmyellow space-x-3">
                  <span>View Pricing</span>
                  <i className="fa-light  fa-arrow-right text-xl font-light"></i>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="ups relative overflow-hidden group">
                <img src="src/assets/images/Rectangle 1313.png" alt="" />
                <div className="ups__overlay h-full w-full pt-32 px-10 space-y-3 gradiantHover1  gradiantPROJECT">
                  <h3 className="text-white text-2xl font-semibold w-2/3">
                    Unisaas Website Design
                  </h3>
                  <div className=" text-base font-medium flex items-center gap-3 text-cmyellow">
                    <span>View Pricing</span>{" "}
                    <i className="fa-light  fa-arrow-right text-xl font-light"></i>
                  </div>
                </div>
              </div>
              <div className="dwn">
                <img src="Card (1).png" alt="" />
                <div className="dwn__overlay">
                  <h3>Unisaas Website Design</h3>
                  <div className="propics__link">
                    <span>View Pricing</span>
                    <i className="fa-light  fa-arrow-right text-xl font-light"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
