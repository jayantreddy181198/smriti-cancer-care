import React from 'react';
import './Home.css';
import ScrollToTopButton from './ScrollToTopButton';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './Testimonials';
import FocusArea from './FocusArea';


const Home = () => {
    return (
    <div>
        <section className="main-banner">
            <div class="banner-text">
                <p class="banner-heading-2">
                    <span>Fight for Right </span>
                    <span className="banner-heading-2-yellow">Cause</span>
                </p>
                <p class="banner-heading-3">
                Provide hope, healing, and unwavering support to every individual touched by cancer. Join us in our mission to make a difference and create a brighter, healthier future for all.
                </p>
                <a className="btn-default-theme-2" href="/donate"> Donate Now</a>           
            </div>
        </section>
        <section className="care-service-wrap">
            <div className="container">
            <div className="home-heading-wrap">We Care.<span> Do You?</span></div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="service-col">
                        <div className="icon-wrap">
                            <img src="images/hostt1.webp" loading="lazy" alt="Cancer Awareness Workshop" />
                        </div>
                        <div className="heading">
                            Cancer Awareness
                        </div>
                        <p className="parag">
                        In 2022, over 14,61,000 new cancer cases were reported in India and over 8,08,000 people died due to the disease. According to the World Health Organisation, between 30% – 50% of cancer deaths could be prevented by modifying or avoiding key risk factors, and implementing existing evidence-based prevention strategies.
                        </p>
                        <a className="btn-default-theme" href="/impact"> Read More</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="service-col">
                        <div className="icon-wrap">
                            <img src="images/hostt2.webp" loading="lazy" alt="Cancer Screening Workshop" />
                        </div>
                        <div className="heading">
                        Why Nutrition ?
                        </div>
                        <p className="parag">
                        It is estimated that around 70% of cancer patients in India are detected in advanced stages of the disease, leading to an extremely high mortality rate. In 2022 alone, over 8,08,000 people died due to cancer in India, with over 14,61,000 new cancer cases were reported in the same year.
                        </p>
                        <a className="btn-default-theme" href="/resources"> Read More</a>
                    </div>
                </div>
                <div className="col-sm-4">
                <div className="service-col">
                    <div className="icon-wrap">
                        <img src="images/hostt3.webp" loading="lazy" alt="Collaborate" />
                    </div>
                    <div className="heading">
                    Collaborate
                    </div>
                    <p className="parag-2">
                    Our mission is to empower all people to defeat cancer through awareness, early detection, patient support and survivor empowerment. We cannot do this alone, we believe that strategic collaboration is at the heart of the fight against cancer.
                    </p>
                    <a className="btn-default-theme" href="/getinvolved"> Read More</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <FocusArea /> {/* Add the Testimonials component here */}
        </section>
        <section>
            <Testimonials /> {/* Add the Testimonials component here */}
        </section>
        <ScrollToTopButton />
    </div>
    );
  };
  
export default Home;
