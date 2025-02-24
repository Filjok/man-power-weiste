"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <section className="heroSection" id="home">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          effect={"creative"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, 0],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative,Autoplay]}
          className="mySwiper"
        >
          {[1, 2, 3, 4].map((_, index) => (
            <SwiperSlide key={index}>
              <Image alt="slider image" src={"/sliderImage1.png"} fill={true} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cotentSection">
            <h1>Reliable Workforce Solutions for <span>Healthcare</span></h1>
            <p>We provide skilled and professional manpower solutions tailored to meet the unique demands of various industries.</p>
            <button>Explore Now</button>
        </div>
      </section>
      <section className="aboutSection" id="about-us">
          <div className="mainContainer">
            <div className="flexWrapper">
              <div className="leftContent">
                <h6>About Us</h6>

                <h3>Your Trusted Partner in Manpower & Facility Solutions</h3>

                <div>
                  <Image
                  src={'/aboutImage.png'}
                  alt="about Image"
                  fill={true}
                  />
                </div>
              </div>
              <div className="rightContent">
                <p>
                  At Wellstar, we are committed to providing top-tier manpower
                  solutions that ensure efficiency, safety, and professionalism
                  across various industries. With years of experience in
                  workforce management, we specialize in housekeeping, security
                  services, labor contracts, facility maintenance, and employee
                  training, catering to businesses of all sizes.
                  <br />
                  <br />
                  Our team consists of trained professionals dedicated to
                  maintaining high standards in cleanliness, security, and
                  operational support.
                </p>

                <ul>
                  <li>
                    <h4>1000+</h4>
                    <p>Skilled Professionals</p>
                  </li>
                  <li>
                    <h4>1000+</h4>
                    <p>Skilled Professionals</p>
                  </li>
                  <li>
                    <h4>1000+</h4>
                    <p>Skilled Professionals</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="why-choose-us">
          <div className="mainContainer">
            <div className="whyChooseUsSection">
              <div className="leftContent">
                <div>
                  <div className="iconWrapper">
                    <div>
                    <Image
                  src={'/workspaceIcon.png'}
                  alt="servce Image"
                  fill={true}
                  />
                    </div>
                  </div>

                  <h4>Skilled & Verified Workforce</h4>
                  <p>
                    Our professionally trained and background-verified staff
                    ensure reliability, efficiency, and quality service across
                    various industries, meeting business needs with expertise
                    and dedication.
                  </p>
                </div>
                <div className="blue">
                  <div className="iconWrapper">
                    <div>
                    <Image
                  src={'/serviceIcon.png'}
                  alt="servce Image"
                  fill={true}
                  />
                    </div>
                  </div>

                  <h4>Skilled & Verified Workforce</h4>
                  <p>
                    Our professionally trained and background-verified staff
                    ensure reliability, efficiency, and quality service across
                    various industries, meeting business needs with expertise
                    and dedication.
                  </p>
                </div>
                <div className="blue">
                  <div className="iconWrapper">
                    <div>
                    <Image
                  src={'/efficientIcon.png'}
                  alt="servce Image"
                  fill={true}
                  />
                    </div>
                  </div>

                  <h4>Skilled & Verified Workforce</h4>
                  <p>
                    Our professionally trained and background-verified staff
                    ensure reliability, efficiency, and quality service across
                    various industries, meeting business needs with expertise
                    and dedication.
                  </p>
                </div>
                <div className="">
                  <div className="iconWrapper">
                    <div>
                    <Image
                  src={'/expertiesIcon.png'}
                  alt="servce Image"
                  fill={true}
                  />
                    </div>
                  </div>

                  <h4>Skilled & Verified Workforce</h4>
                  <p>
                    Our professionally trained and background-verified staff
                    ensure reliability, efficiency, and quality service across
                    various industries, meeting business needs with expertise
                    and dedication.
                  </p>
                </div>
              </div>
              <div className="rightContent">
                <h3>Why Chooose Us?</h3>
                <p>
                  Finding the right manpower provider is a crucial decision that
                  impacts the efficiency, safety, and productivity of your
                  business.{" "}
                </p>

                <div>
                  <img src="/whyChooseImage.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="serviceSection" id="services">
          <div className="mainContainer">
            <div className="headContent">
              <h6>Our Services</h6>

              <h4>Expert Manpower & Facility Services</h4>
              <p>
                We provide skilled manpower and facility solutions, ensuring
                efficiency, cleanliness, and security across various industries.
              </p>
            </div>
          </div>

          <div className="sliderWrapper">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={3.5}
              spaceBetween={14}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1.5 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5},
              }}
              
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="sliderItem">
                    <div>
                    <Image
                  src={'/sliderImage1.png'}
                  alt="servce Image"
                  fill={true}
                  />
                    </div>

                    <h5>Housekeeping Service</h5>
                    <p>
                      Ensure a clean and organized environment with our
                      professional housekeeping services, designed for homes,
                      offices, hotels, and commercial spaces.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="reviewSection" id="reviews">
          <div className="headContent">
            <h6>Reviews</h6>

            <h4>Trusted by Businesses, Valued for Excellence</h4>
            <p>
              "Client satisfaction is our priority. Hear from businesses that
              trust our reliable manpower and facility solutions."
            </p>
          </div>

          <div className="sliderWrapper">
            <Swiper
              modules={[Autoplay]}
              className="mySwiper"
              slidesPerView={3.5}
              spaceBetween={14}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={10000}
              freeMode={true}
              breakpoints={{
                320: { slidesPerView: 1.1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3},
                1199: { slidesPerView: 3.5},
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="sliderItem">
                    <div className="profileWrapper">
                      <div className="imageWrapper">
                      <Image
                  src={'/profileImage.png'}
                  alt="servce Image"
                  fill={true}
                  />
                      </div>
                      <div className="contentWrapper">
                        <h6>Aisha Rahman</h6>
                        <p>Hotel Manager</p>
                      </div>
                      <div>
                        <img src="/4StarIcon.png" alt="" />
                      </div>

                      <div></div>
                    </div>

                    <h5>"Trustworthy Security Services"</h5>
                    <p>
                      The security personnel provided by Wellstar are
                      well-trained and disciplined. We feel much safer with
                      their services in place.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sliderWrapper">
            <Swiper
              modules={[Autoplay]}
              className="mySwiper"
              slidesPerView={3.5}
              spaceBetween={14}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={10000}
              freeMode={true}
              breakpoints={{
                320: { slidesPerView: 1.1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3},
                1199: { slidesPerView: 3.5},
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="sliderItem">
                    <div className="profileWrapper">
                      <div className="imageWrapper">
                      <Image
                  src={'/profileImage.png'}
                  alt="servce Image"
                  fill={true}
                  />
                      </div>
                      <div className="contentWrapper">
                        <h6>Aisha Rahman</h6>
                        <p>Hotel Manager</p>
                      </div>
                      <div>
                        <img src="/4StarIcon.png" alt="" />
                      </div>

                      <div></div>
                    </div>

                    <h5>"Trustworthy Security Services"</h5>
                    <p>
                      The security personnel provided by Wellstar are
                      well-trained and disciplined. We feel much safer with
                      their services in place.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    </>
  );
}
