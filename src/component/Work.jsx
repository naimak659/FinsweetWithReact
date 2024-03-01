import React from "react";

export default function Work() {
  return (
    <>
      <section className="bg-cmAccent py-32">
        <div class="container flex mx-auto justify-between">
          <div class="wText">
            <h3 class="wText__title">How we work</h3>
            <p class="wText__lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a href="#" class="wText__link">
              Get in touch with us <i class="fa-light fa-arrow-right"></i>
            </a>
          </div>
          <div class="work__boxes">
            <div class="work__box">
              <div class="box__icon">
                <img
                  src="./images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p class="box__num">1</p>
              </div>
              <div class="box__title">Strategy</div>
              <p class="wBox__lorem">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div class="work__box">
              <div class="box__icon">
                <img
                  src="./images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p class="box__num">1</p>
              </div>
              <div class="box__title">Strategy</div>
              <p class="wBox__lorem">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div class="work__box">
              <div class="box__icon">
                <img
                  src="./images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p class="box__num">1</p>
              </div>
              <div class="box__title">Strategy</div>
              <p class="wBox__lorem">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div class="work__box">
              <div class="box__icon">
                <img
                  src="./images/pointer 1.png"
                  alt="./images/pointer 1.png"
                />
                <p class="box__num">1</p>
              </div>
              <div class="box__title">Strategy</div>
              <p class="wBox__lorem">
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
