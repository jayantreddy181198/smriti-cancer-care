import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };

  const testimonials = [
    {
      title: "Life-Changing Care",
      text: "SmritiCancerCare provided me with life-changing care during my treatment. The personalized approach and the genuine concern from the team made all the difference. I am immensely grateful for their unwavering support.",
      author: "Michael Johnson",
      job: "Cancer Survivor",
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      title: "Highly Recommend",
      text: "I highly recommend SmritiCancerCare for anyone seeking comprehensive cancer care. Their professionalism, empathy, and expertise are unmatched. They helped me through every stage of my journey with kindness and competence.",
      author: "Sarah Lee",
      job: "Patient Advocate",
      imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      title: "Outstanding Service",
      text: "The service at SmritiCancerCare was outstanding. From the initial consultation to the follow-up care, every aspect was handled with the utmost professionalism. The team’s support was invaluable to my recovery.",
      author: "Dr. James Wilson",
      job: "Medical Director, Health Clinic",
      imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      title: "Incredible Team",
      text: "The team at SmritiCancerCare is incredible. Their commitment to patient care is evident in everything they do. They provided not only medical treatment but also emotional support that was crucial during my battle with cancer.",
      author: "Lisa Martinez",
      job: "Cancer Survivor and Advocate",
      imgSrc: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      title: "Supportive and Caring",
      text: "I was impressed by how supportive and caring everyone at SmritiCancerCare was. They made a challenging time much easier to navigate with their empathy and comprehensive care. I can't thank them enough.",
      author: "Robert Brown",
      job: "Patient",
      imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      title: "A Beacon of Hope",
      text: "SmritiCancerCare was a beacon of hope during my treatment. Their innovative approaches and compassionate care gave me confidence and strength throughout my journey. I’m deeply thankful for their support.",
      author: "Jessica White",
      job: "Cancer Researcher",
      imgSrc: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      title: "Top-Notch Facility",
      text: "The facility and the care provided by SmritiCancerCare are top-notch. Every member of the team played a vital role in my treatment, and their dedication was evident. I felt well-supported every step of the way.",
      author: "Dr. Samuel Green",
      job: "Oncology Specialist",
      imgSrc: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      title: "Compassionate Care",
      text: "The compassionate care I received from SmritiCancerCare made a significant difference in my treatment experience. Their attention to detail and genuine concern for my well-being were greatly appreciated.",
      author: "Emily Davis",
      job: "Healthcare Consultant",
      imgSrc: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      title: "Exceptional Experience",
      text: "My experience with SmritiCancerCare was exceptional. The team provided expert care and unwavering support throughout my treatment. Their dedication and professionalism were truly remarkable.",
      author: "David Harris",
      job: "Patient and Advocate",
      imgSrc: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  

  return (
    <div className="testimonials-section">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-content">
              <h2 className="testimonial-title">{testimonial.title}</h2>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
            <div className="testimonial-carousel-bottom">
              <div className="testimonial-image-holder">
                <img src={testimonial.imgSrc} alt={testimonial.author} />
              </div>
              <div className="testimonial-author">
                <h6 className="testimonial-author-text">{testimonial.author}</h6>
                <span className="testimonial-job">{testimonial.job}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
