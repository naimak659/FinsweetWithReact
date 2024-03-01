import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-cmTintBlue py-32 font-poppins">
        <div class="container flex mx-auto">
          <div class="left">
            <h1 className="text-white text-6xl font-bold">
              Building stellar websites for early startups
            </h1>
            <p class=" text-cmGrey font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="btms">
              <div class="btm">View our work</div>
              <div class="link__">
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
                    fill="#F4F6FC"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="right">
            <img src="Illustration.png" alt="Illustration.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
