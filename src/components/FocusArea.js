import "./FocusArea.css";

function FocusArea(){
    return (
        <div>
            <div className="focusarea-data-section">
                <h2 className="focusarea-data-heading">
                    <span className="focusarea-text-yellow">Key</span> Focus Areas
                </h2>
                <p className="focusarea-paragraph">
                    Our mission is to empower all people to defeat <span className="focusarea-text-yellow">cancer</span> through awareness, early detection, patient support, and survivor empowerment. We cannot do this alone; we believe that strategic collaboration is at the heart of the fight against <span className="focusarea-text-yellow">cancer</span>.
                </p>
                <div className="focusarea-key-items">
                    <div className="focusarea-key-item">
                        <a href="https://www.youwecan.org/pediatric-cancer-program" className="focusarea-icon-area">
                            <img src="https://www.youwecan.org/website/assets/images/pediatric-cancer_1.webp" loading="lazy" alt="Pediatric Cancer"/>
                            <p className="focusarea-icon-text">Pediatric Cancer</p>
                        </a>
                    </div>
                    <div className="focusarea-key-item">
                        <a href="https://www.youwecan.org/new-breast-cancer-program" className="focusarea-icon-area">
                            <img src="https://www.youwecan.org/website/assets/images/pediatric-cancer_2.webp" loading="lazy" alt="Breast Cancer"/>
                            <p className="focusarea-icon-text">Breast Cancer</p>
                        </a>
                    </div>
                    <div className="focusarea-key-item">
                        <a href="javascript:void(0)" className="focusarea-icon-area">
                            <img src="https://www.youwecan.org/website/assets/images/pediatric-cancer_3.webp" loading="lazy" alt="Oral, Head & Neck Cancer"/>
                            <p className="focusarea-icon-text">Neck Cancer</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="focusarea-metrics-section">
                <div className="focusarea-metrics-1">
                    <h2>50</h2>
                    <p>Donations Received</p>
                </div>
                <div className="focusarea-metrics-2">
                    <h2>5</h2>
                    <p>Hospitals Partnered with Us</p>
                </div>
                <div className="focusarea-metrics-3">
                    <h2>267</h2>
                    <p>Life-Saving Cancer Kits Distributed</p>
                </div>
                <div className="focusarea-metrics-4">
                    <h2>125</h2>
                    <p>Patients Supported in Their Treatment</p>
                </div>
            </div>
        </div>
    );
}

export default FocusArea;
