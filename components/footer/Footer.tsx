import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="mainContainer">
        
        <div className={styles.flexWrapper}>
          <div className={styles.leftContent}>
            <h2>Wellstar Facility Management</h2>
          </div>
          <div className={styles.rightContent}>
            <div>
              <h5>Quick Links</h5>

              <ul>
                <li><Link href={'#home'}>Home</Link></li>
                <li><Link href={'#about-us'}>About Us</Link></li>
                <li><Link href={'#services'}>Our Services</Link></li>
                <li><Link href={'#reviews'}>Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h5>Address</h5>

              <ul>
                <li>
                  Wellstar Manpower Solutions 123, Lorem Ipsum Road, Kottayam,
                  Kerala - 123001, India
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.iconWrapper}>
            <div>
              <Image src={"/footerEmailIcon.png"} alt="icon" fill={true} />
            </div>
            <div>
              <Image src={"/footerInstaIcon.png"} alt="icon" fill={true} />
            </div>
            <div>
              <Image src={"/footerFbIcon.png"} alt="icon" fill={true} />
            </div>
          </div>

          <p>&#169;2025 wellstar facility management</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
