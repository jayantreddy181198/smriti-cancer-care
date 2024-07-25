import React, { useState } from 'react';
import './DonationForm.css'; // Import the CSS file

function DonationForm() {
  const [paymentType, setPaymentType] = useState('give-once');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isEditingCustomAmount, setIsEditingCustomAmount] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleAmountClick = (value) => {
    if (value === 'other') {
      setIsEditingCustomAmount(true);
      setAmount(''); // Clear predefined amount
    } else {
      setAmount(value);
      setCustomAmount('');
      setIsEditingCustomAmount(false);
    }
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getAmountDisplay = () => {
    if (customAmount) {
      return customAmount;
    }
    return amount ? amountLabels[amount].split('/')[0] : '';
  };

  const amountLabels = paymentType === 'give-monthly'
    ? { 500: '₹500/mo', 1000: '₹1000/mo', 1500: '₹1500/mo' }
    : { 500: '₹500', 1000: '₹1000', 1500: '₹1500' };

  const faqs = [
    {
      question: 'Will I get a tax deduction on my donations, and by when?',
      answer: 'Yes, all donations made by tax-paying Indian Citizens to Smriti Cancer Care Foundation are 50% tax-deductible under Section 80G of the Income Tax Act, 1961. We will send you an 80G certificate to the email address you’ve provided within ten working days of receiving your donation. Please note that a valid PAN and email are required to issue Form 10BE to claim your 80G benefit.',
    },
    {
      question: 'How does monthly giving work?',
      answer: 'Our monthly giving program, The Giving Table, allows you to automatically give as much as you’d like every month. Once you choose your payment method, your generous contributions will be automatically deducted from the date you’ve signed up and will occur every month on the same day for one year. You will also receive monthly updates about our work from the field.',
    },
    {
      question: 'Will I receive a report on how my donation is being used?',
      answer: 'We know this is your hard-earned money, and use it responsibly. We will share regular updates via email about how your money is helping kids around the country fight cancer.',
    },
    {
      question: 'How do I contact Smriti Cancer Care Foundation regarding my donation?',
      answer: 'For more details or any further assistance, please email smriticancercarefoundation.it@gmail.com. We respond to emails within two working days.',
    },
    {
      question: 'How do I make an anonymous donation?',
      answer: 'As per Government regulations, recipient organisations must maintain records of donors’ tax identity.  Therefore, we cannot accept anonymous donations.',
    },
    {
      question: 'Can Indian nationals donate in foreign currencies (US dollars, pounds, etc.)?',
      answer: 'Indian nationals can use international currency-based credit/debit cards to donate. Although the amount displayed on the form will be in INR only, the equivalent amount in your currency will be debited from your account.',
    },
    {
      question: 'Do you accept offline donations?',
      answer: 'For offline donations via cheque or NEFT, you can write to smriticancercarefoundation.it@gmail.com, and we will help you with the account details.',
    },
    {
      question: 'Why do I need to share my ID details (such as a PAN card)?',
      answer: 'We require your PAN to comply with the Income Tax Act, 1961 and other laws applicable to us. As per Government regulations, recipient organisations must maintain records of donors’ tax identity.',
    },

    // Add more FAQs as needed
  ];

  return (
    <div>
      <div className="donation-main-banner">
        <div className="donation-banner-text">
          <p className="donation-banner-heading-2">
            <span>Your support is crucial in ensuring cancer treatment for all! </span>
          </p>
          <p className="donation-banner-heading-3">
            All donations to SmritiCancerCare Foundation are eligible for 50% tax exemption under section 80G of the Income Tax Act.
          </p>
        </div>
      </div>
      <div className="donation-container">
        <form className="donation-form">
          <div className="donation-header">
            <h1 className="donation-heading">Donation Window</h1>
            <div className="donation-tab-container">
              <label
                className={paymentType === 'give-once' ? 'donation-active-tab' : 'donation-tab'}
                onClick={() => setPaymentType('give-once')}
              >
                Give once
              </label>
              <label
                className={paymentType === 'give-monthly' ? 'donation-active-tab' : 'donation-tab'}
                onClick={() => setPaymentType('give-monthly')}
              >
                Give monthly
              </label>
            </div>
          </div>

          {/* Conditionally render sections based on paymentType */}
          {paymentType && (
            <>
              <label className="donation-subheading">Donation Amount</label>
              <div className="donation-amount-options">
                {[500, 1000, 1500].map(value => (
                  <div
                    key={value}
                    className="donation-amount-box"
                    style={{
                      backgroundColor: amount == value ? '#000' : '#F0F3FA',
                      color: amount == value ? '#fff' : '#000',
                    }}
                    onClick={() => handleAmountClick(value)}
                  >
                    {amountLabels[value]}
                  </div>
                ))}
                <div
                  className="donation-amount-box"
                  style={{
                    backgroundColor: isEditingCustomAmount ? '#000' : '#F0F3FA',
                    color: isEditingCustomAmount ? '#fff' : '#000',
                  }}
                  onClick={() => handleAmountClick('other')}
                >
                  {isEditingCustomAmount ? (
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="donation-custom-input"
                      onBlur={() => {
                        setAmount(customAmount);
                        setIsEditingCustomAmount(false);
                      }}
                      autoFocus
                    />
                  ) : (
                    'Others'
                  )}
                </div>
              </div>

              <label className="donation-subheading">Fill in your details</label>
              <div className="donation-input-row">
                <input className="donation-input" type="text" id="firstName" name="firstName" placeholder="First Name" required />
                <input className="donation-input" type="text" id="lastName" name="lastName" placeholder="Last Name" required />
              </div>
              <div className="donation-input-row">
                <input className="donation-input" type="email" id="email" name="email" placeholder="Email" required />
                <input className="donation-input" type="tel" id="mobile" name="mobile" placeholder="Mobile" required />
              </div>
              <div className="donation-input-row">
                <input className="donation-input" type="text" id="panCard" name="panCard" placeholder="PAN Card" required />
                <input className="donation-input" type="text" id="city" name="city" placeholder="City" required />
              </div>
              <div className="donation-input-row">
                <input className="donation-input" type="text" id="zipCode" name="zipCode" placeholder="Zip / Postal Code" required />
                <input className="donation-input" type="text" id="country" name="country" placeholder="Country" required />
              </div>

              <div className="donation-checkbox-row">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={agreement}
                  onChange={() => setAgreement(!agreement)}
                  required
                />
                <label className="donation-checkbox-label" htmlFor="agreement">
                  I agree that the above information is true to the best of my knowledge.
                </label>
              </div>
            </>
          )}
          <div className="donation-button-container">
            <button className="donation-button" type="submit">
              Donate {getAmountDisplay()}
            </button>
          </div>
        </form>
        <div className='donation-disclaimer-box'>
          <p>Your payment is secure. Donations are not refundable or transferable. All donations made by Indian citizens are 50% exempt from tax under Section 80G of the Income Tax Act. If your PAN and contact details are incorrect, you will not be able to access Form 10BE for the 80G benefit.</p>
        </div>
      </div>
      <div className="donation-banner-2">
        <div className="form-and-faq-container">
          <div className="faq-section">
            <h2 className="faq-heading">
              FAQs
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question} <span>{openFaqIndex === index ? '▲' : '▼'}</span>
                </div>
                {openFaqIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;
