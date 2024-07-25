import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHandsHelping, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function AboutUs(){
    return(
        <div>
            <div className='aboutus-banner-1'>
                <div className='aboutus-vision'>
                    <h2>Our Vision</h2>
                    <hr className="aboutus-line" />
                    <p>Our vision is to create a world where every individual has access to comprehensive, compassionate, and innovative cancer care, ensuring a future free from the burden of cancer.</p>
                </div>
           </div>
            <div className='aboutus-banner-2'>
                <div className='aboutus-mission'>
                    <div className='aboutus-mission-header'>
                        <h2>Our Mission</h2>
                    </div>
                    <div className='aboutus-mission-data'>
                        <div className='aboutus-mission-card'>
                            <div className='aboutus-rel-wrapper'>
                                <img src="https://www.cry.org/wp-content/themes/cry/images/about-card-1.gif"></img>
                            </div>
                            <h3 className='aboutus-cursive-text'>Taking Responsibility</h3>
                            <p className='aboutus-mission-desc'>To enable people to take responsibility for the situation of the deprived Indian health care and so motivate them to seek resolution through individual and collective action thereby enabling cancer care to realise their full potential.</p>
                        </div>
                        <div className='aboutus-mission-card'>
                            <div className='aboutus-rel-wrapper'>
                                <img src="https://www.cry.org/wp-content/themes/cry/images/about-card-2.gif"></img>
                            </div>
                            <h3 className='aboutus-cursive-text'>Mobilising Potential</h3>
                            <p className='aboutus-mission-desc'>To make people discover their potential for action and change.</p>
                        </div>
                        <div className='aboutus-mission-card'>
                            <div className='aboutus-rel-wrapper'>
                                <img src="https://www.cry.org/wp-content/themes/cry/images/about-card-3.gif"></img>
                            </div>
                            <h3 className='aboutus-cursive-text'>Inspiring Collective Action</h3>
                            <p className='aboutus-mission-desc'>To enable people’s collectives and movements encompassing diverse segments, to pledge their particular strengths, working in partnership to secure, protect and honour the rights of India’s cancer patients.</p>
                        </div>    
                    </div>
                </div>
            </div>
            <div className='aboutus-banner-3'>
                <div className='aboutus-ourstory'>
                    <div className='aboutus-ourstory-img' />
                    <div className='aboutus-ourstory-data'>
                        <h2><span>Our</span> Story</h2>
                        <p>The SmritiCancerCare Foundation is a non-profit organization established by Jayant Reddy, registered under the Bombay Trust Act, of 1950. Our Mission is to empower all people to fight cancer, through awareness, early detection, patient support, and survivor empowerment.</p>
                    </div>
                </div>
            </div>
            <div className='aboutus-banner-4'>
                <div className='aboutus-founder'>
                    <div className='aboutus-founder-msg'>
                        <h2><span>Founder's</span>  Message</h2>
                        <p>To all my well-wishers,</p>

                        <p>When we started the Smriti Cancer Care Foundation, it was with a simple yet profound vision: to create a world where every individual has access to comprehensive, compassionate, and innovative cancer care. Our mission is to ensure that no one faces the burden of cancer alone.</p>
                        <p>At the Smriti Cancer Care Foundation, we take responsibility for providing the highest quality care and support. We are dedicated to mobilizing potential by engaging with communities, healthcare professionals, and partners worldwide to bring innovative solutions and compassionate care to those in need. Our goal is to inspire collective action, encouraging everyone to join us in this fight against cancer.</p>
                        <p>Thank you for your support and belief in our mission. Together, we can make a significant impact and move closer to a future free from the burden of cancer.</p>
                        <p className='aboutus-founder-sign'>With heartfelt gratitude,</p>
                        <p className='aboutus-founder-sign'>Jayant Reddy</p>
                    </div>
                    <div className='aboutus-founder-img' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
