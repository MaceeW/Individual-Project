import React, { useState } from 'react';
import '../styles/WeBuyVinyl.css'; 

const WeBuyVinyl = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    recordCount: '',
    isDamaged: 'No',
    damageDescription: '',
    collectionDescription: '',
    preferredContact: '',
    bestTimes: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState({
    text: '',
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
   
    if (submissionMessage.text) {
      setSubmissionMessage({ text: '', isError: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['email', 'firstName', 'lastName', 'phone', 'recordCount', 'isDamaged', 'collectionDescription', 'preferredContact'];
    const isMissingFields = requiredFields.some(field => !formData[field]);

    if (isMissingFields || (formData.isDamaged === 'Yes' && !formData.damageDescription)) {
      setSubmissionMessage({
        text: 'Error: All required fields must be filled out.',
        isError: true,
      });
      return;
    }

    console.log('Sell Vinyl Form Submitted:', formData);
    setSubmissionMessage({
      text: 'You have successfully sent your inquiry.',
      isError: false,
    });
  
    setFormData({
      email: '', firstName: '', lastName: '', phone: '', recordCount: '',
      isDamaged: 'No', damageDescription: '', collectionDescription: '',
      preferredContact: '', bestTimes: '',
    });
  };

  const isDamaged = formData.isDamaged === 'Yes';

  return (
    <section className="we-buy-vinyl-section">
      <div className="image-container">
        <div className="slogan-content">
          <h1>
            <span className="line-one">Got Records?</span>
            <br />
            <span className="line-two">We Buy Vinyl Records!</span>
          </h1>
        </div>
        <div className="arch-overlay"></div>
      </div>
      
      <div className="sell-vinyl-container">
        <h1 className="form-title">Sell us your used vinyl records!</h1>
        <p className="form-description">Get started by filling out the form below.</p>

        <form onSubmit={handleSubmit} className="sell-vinyl-form" noValidate>
          <div className="form-group">
            <label htmlFor="email" className="required">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Name</label>
            <div className="name-fields">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="required">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="required">How many records are in your collection that you are looking to sell or donate?</label>
            <div className="radio-group">
              {['1 - 10', '10 - 50', '50 - 100', '100 - 500', '500 - 1000', '1000+'].map(count => (
                <label key={count}>
                  <input
                    type="radio"
                    name="recordCount"
                    value={count}
                    checked={formData.recordCount === count}
                    onChange={handleChange}
                  />
                  {count}
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="required">Are the records damaged? (water, mold, smoke, etc.)</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isDamaged"
                  value="Yes"
                  checked={isDamaged}
                  onChange={handleChange}
                />
                Yes (please describe below)
              </label>
              <label>
                <input
                  type="radio"
                  name="isDamaged"
                  value="No"
                  checked={!isDamaged}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="damageDescription">
              If some or all of the records are damaged, please describe the damage below:
            </label>
            <textarea
              id="damageDescription"
              name="damageDescription"
              value={formData.damageDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="collectionDescription" className="required">
              Please describe a bit about the collection. (Does the collection mainly consist of LPs, 45s, 78s, or a mix? Is there a style of music and/or era of music that your collections is mostly composed of (i.e. jazz records, 60s rock records, classical, etc...)?)</label>
            <textarea
              id="collectionDescription"
              name="collectionDescription"
              value={formData.collectionDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="required">Preferred method of contact</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="Email"
                  checked={formData.preferredContact === 'Email'}
                  onChange={handleChange}
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="Phone"
                  checked={formData.preferredContact === 'Phone'}
                  onChange={handleChange}
                />
                Phone
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="bestTimes">What days/times are best to call you to set up an appointment?</label>
            <textarea
              id="bestTimes"
              name="bestTimes"
              value={formData.bestTimes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
          {submissionMessage.text && (
            <p className={`submission-message ${submissionMessage.isError ? 'error' : 'success'}`}>
              {submissionMessage.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default WeBuyVinyl;