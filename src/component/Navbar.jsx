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
              <div class=" ml-auto">
                <ul className="flex text-cmGrey space-x-5 px-4 font-poppins font-medium ">
                  <li>
                    <a href="#" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="text-base font-medium">
                <button className="px-12 py-4 border border-white rounded-full bg-transparent hover:bg-cmyellow hover:text-cmDarkBlue duration-300 hover:border-transparent">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
