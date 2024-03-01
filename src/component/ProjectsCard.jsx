import React from "react";

export default function ProjectsCard() {
  return (
  <>
  <div id="projects" className="py-32">
    <div className="container">
        <div className="proText">
            <h3>View our projects</h3>
            <div className="proText__link">
                <span>View Pricing</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
                </svg>
            </div>
        </div>
        <div className="proPics">
                <div className="left">
                    <div className="left_pic">
                        <picture>
                            <img src="Card.png" alt="Card.png" />
                        </picture>
                    </div>
                    <div className="overlay">
                        <h5>Workhub office Webflow Webflow Design</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <div className="propics__link">
                            <span>View Pricing</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="ups">
                        <img src="Rectangle 1313.png" alt="" />
                        <div className="ups__overlay right__over">
                            <h3>Unisaas Website Design</h3>
                            <div className="propics__link">
                                <span>View Pricing</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="dwn">
                        <img src="Card (1).png" alt="" />
                        <div className="dwn__overlay">
                            <h3>Unisaas Website Design</h3>
                            <div className="propics__link">
                                <span>View Pricing</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
  </>
  ) ;
}