import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div id="navbar_part" className="bg-cmTintBlue py-8">
          <div class="container mx-auto">
            <div class="flex justify-between items-center text-white">
              <div class="logo">
                <img
                  src="/src/assets/images/finsweetLogo.png"
                  alt="finsweetLogo.png"
                />
              </div>
              <div class="ml-auto">
                <ul className="flex text-cmGrey space-x-5 px-12 font-poppins font-medium ">
                  <li>
                    <a href="#" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="">
                <button className="simpleBTN">Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
