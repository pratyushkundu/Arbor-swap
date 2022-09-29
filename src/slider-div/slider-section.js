import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function Aside() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setFlag(!flag);
    setIsOpen(!isOpen);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className={flag ? "main" : null}>
        <nav
          className="slider"
          style={{
            width: isOpen ? "270px" : "80px",
          }}
        >
          <header>
            <span
              onClick={toggle}
              className="arrow_close"
              style={{ marginLeft: isOpen ? "25%" : "0%" }}
            >
              {/* className="toggle" */}
              <img src="/images/arrow-left.png" alt="" srcset="" />
            </span>
            <span
              onClick={toggle}
              className="arrow_close1"
              style={{ display: isOpen ? "none" : "0%" }}
            >
              {/* className="toggle" */}
              <img src="/images/arrow-left.png" alt="" srcset="" />
            </span>
          </header>

          <div className="menu-bar">
            <div>
              {/* <div className={open ? "sidebar-item open" : "sidebar-item"}> */}
              <div className="menu">
                <ul className="menu-links">
                  <div>
                    <li className="nav-link ">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        {/* <!-- <i className='bx bxs-grid-alt bx-rotate-180 icon' style='color:#a69f9f' ></i> --> */}
                        <img src="/img/element-3.png" alt="" />
                        {/* <img src="/img/AirdropRIP.png" alt="" /> */}
                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          Dashboard
                        </span>
                      </a>
                    </li>
                  </div>
                  <div
                    className={open1 ? "sidebar-item open1" : "sidebar-item"}
                    id="tag1"
                  >
                    <li className="nav-link">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        <img src="/img/Icon.png" className="icon" alt="" />

                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          <p className="">
                            Launchpad
                          </p>
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen1(!open1)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div
                      class="sidebar_contain_aside"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      <p to="/LaunchpadPool/pools">Pools</p>

                      <p to="/Createsale">Create Sale </p>
                    </div>
                  </div>
                  <div
                    className={open2 ? "sidebar-item open2" : "sidebar-item"}
                    id="tag2"
                  >
                    <li className="nav-link">
                      <a href="#">
                        <img
                          src="/img/shield-security.png"
                          className="icon"
                          alt=""
                        />

                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          Locker
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen2(!open2)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div class="sidebar_contain_aside">
                      <p to="/Locker">Locked Assets</p>

                      <p to="/Createsalelocker">Token Locker</p>

                      <p to="/Createsalelocker/LPLocker">LP Locker</p>
                    </div>
                  </div>
                  <div
                    className={open3 ? "sidebar-item open3" : "sidebar-item"}
                    id="tag3"
                  >
                    <li className="nav-link">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        <img src="/img/airplane.png" className="icon" alt="" />

                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          Airdropper
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen3(!open3)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                    <div class="sidebar_contain_aside">
                      <p to="/live">Airdrops</p>

                      <p to="/Createsale">Create Airdrop</p>
                    </div>
                  </div>
                  <div
                    className={open4 ? "sidebar-item open4" : "sidebar-item"}
                    id="tag4"
                  >
                    <li className="nav-link">
                      <a href="#">
                        {/* <!-- <i className='bx bx-home icon' ></i> --> */}
                        <img src="/img/menu1.png" className="icon" alt="" />

                        <span
                          className="text nav-test"
                          style={{ display: isOpen ? "block" : "none" }}
                        >
                          More Products
                        </span>
                        <i
                          class="bi bi-chevron-down toggle_btn_aside"
                          onClick={() => setOpen4(!open4)}
                          style={{ display: isOpen ? "block" : "none" }}
                        ></i>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="bottom-content">
              <li className=""></li>
              <li class="mode">
                <div class="moon-sun">
                  {/* <!-- <i class='bx bx-moon icon moon' ></i>
                        <i class='bx bx-sun icon sun' ></i> --> */}
                  <img src="/img/Sun.png" alt="" srcset="" />
                </div>
                {/* <!-- <span class="mode-text text">Dark Mode</span> --> */}

                <div class="toggle-switch">
                  <span class="switch"></span>
                </div>
              </li>
              <ul
                className="menu-links"
                style={{ display: isOpen ? "block" : "none" }}
                id="social-icons"
              >
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-telegram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-twitter social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-instagram social_media"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span className="text nav-test ">
                      <i className="bx bxl-dribbble social_media"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="clear"></div>
              <p
                class="copy-right"
                style={{ display: isOpen ? "block" : "none" }}
              >
                @2022 Arborswap. All right Reserved.{" "}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}