"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
export const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
      <Offcanvas show={show} onHide={handleShow}>
        <div className="offcanvasWrapper">
          {" "}
          <div className="logo">
            <Image src={"/Logo.png"} alt="logo" fill={true} />
          </div>
          <ul>
            <li onClick={()=>{
              handleShow()
            }}>
              <Link href={"#home"}>Home</Link>
            </li>
            <li onClick={()=>{
              handleShow()
            }}>
              <Link href={"#about-us"}>About</Link>
            </li>
            <li onClick={()=>{
              handleShow()
            }}>
              <Link href={"#services"}>Our services</Link>
            </li>
            <li onClick={()=>{
              handleShow()
            }}>
              <Link href={"#reviews"}>Reviews</Link>
            </li>
          </ul>
        </div>
      </Offcanvas>

      <section className={styles.blueHeaderWrapper}>
        <div className="mainContainer">
          <div className={styles.flexWrapper}>
            <div className={styles.phoneWrapper}>
              <div className={styles.iconWrapper}>
                <Image src={"/phoneIcon.png"} alt="phone icon" fill={true} />
              </div>
              <h6>+91 8289 992 948</h6>
            </div>
            <div className={styles.locationWrapper}>
              <h6> Manipuzha Junction, Kottayam</h6>
            </div>
            <div className={styles.iconWrapper}>
              <Image src={"/emailIcon.png"} alt="phone icon" fill={true} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainNavigation}>
        <div className="mainContainer">
          <div className={styles.flexWrapper}>
            <div className={styles.logoWrapper}>
              <Image src={"/Logo.png"} alt="logo" fill={true} />
            </div>
            <div className={styles.navWrappper}>
              <ul>
                <li>
                  <Link href={"#home"}>Home</Link>
                </li>
                <li>
                  <Link href={"#about-us"}>About</Link>
                </li>
                <li>
                  <Link href={"#services"}>Our services</Link>
                </li>
                <li>
                  <Link href={"#reviews"}>Reviews</Link>
                </li>
              </ul>
            </div>

            <div className={styles.chatWrapper}>
              <h6>Chat Now</h6>
              <div>
                <Image src={"/whatsappIcon.png"} alt="logo" fill={true} />
              </div>
            </div>

            <div
              className={styles.mobileBtn}
              onClick={() => {
                handleShow();
              }}
            >
              <svg
                width="34px"
                height="34px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Menu_Alt_05">
                    {" "}
                    <path
                      id="Vector"
                      d="M5 17H13M5 12H19M11 7H19"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
