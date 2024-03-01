import React from "react";

export default function Work() {
  return (
    <>
      <section className="bg-cmAccent py-32">
        <div className="container flex mx-auto justify-between">
          <div className="font-poppins">
            <h3 className="text-5xl text-cmDarkBlue font-semibold ">How we work</h3>
            <p className="text-base text-cmDarkBlue/70 max-w-96 font-normal py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a
              href="#"
              className="text-cmLightBlue font-medium text-lg hover:text-blue-800"
            >
              Get in touch with us <i className="fa-light  fa-arrow-right text-xl font-medium"></i>
            </a>
          </div>
          <div className="font-poppins max-w-screen-md flex flex-wrap gap-9">
            <div className="work__box">
              <div className="relative text-white">
                <img
                  src="src/assets/images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p className="absolute top-[10px] left-[22px]">1</p>
              </div>
              <div className="workBox__title ">Strategy</div>
              <p className="max-w-80 text-base leading-7 text-cmDarkBlue/70">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="work__box">
              <div className="relative text-white">
                <img
                  src="src/assets/images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p className="absolute top-[10px] left-[22px]">1</p>
              </div>
              <div className="workBox__title">Strategy</div>
              <p className="max-w-80">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="work__box">
              <div className="relative text-white">
                <img
                  src="src/assets/images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p className="absolute top-[10px] left-[22px]">1</p>
              </div>
              <div className="workBox__title">Strategy</div>
              <p className="max-w-80">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div className="work__box">
              <div className="relative text-white">
                <img
                  src="src/assets/images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p className="absolute top-[10px] left-[22px]">1</p>
              </div>
              <div className="workBox__title">Strategy</div>
              <p className="max-w-80">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
