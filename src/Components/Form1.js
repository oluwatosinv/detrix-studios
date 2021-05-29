import React from "react";
import emailjs from "emailjs-com"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const FormPage = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sjkxywc', 'template_tdf4cwk', e.target, 'user_M8QeqjwMCrjTmh8dOwrDd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <MDBContainer>
      <MDBRow className='centering'>
        <MDBCol md="8" className='form-center'>
          <form onSubmit={sendEmail}>
            <h1 className="h1 text-center mb-4">GET IN TOUCH</h1>
            <div className="grey-text">
              <MDBInput name='ClientName' label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" />
              <MDBInput name='emaill' label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <div className='form-select'>
                <i data-test="fa" className="fa fa-tag prefix md-form icon-forms"></i>
                <select className="browser-default custom-select  select-customize" name='eventss'>
                  <option disabled selected>Select your Event Type</option>
                  <option value="White and Traditional Wedding">White and Traditional Wedding</option>
                  <option value="Commercial video production">Commercial</option>
                  <option value="Corporate video production">Corporate</option>
                  <option value="Court Wedding">Court Wedding</option>
                  <option value="Business video production">Business</option>
                  <option value="Introduction">Introduction</option>
                  <option value="White Wedding">White Wedding</option>
                  <option value="Marternity">Marternity</option>
                  <option value="Family">Family</option>
                  <option value="Uncatergorized">Uncatergorized</option>
                </select>
              </div>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput name='phoneThrough' label="Phone number" icon="phone-alt" group type="tel" validate error="wrong" success="right" />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput name='heard' label="How did you hear about us" icon="users" group type="text" validate error="wrong" success="right" />
                </MDBCol>
              </MDBRow>
              <MDBInput name='dayDate' label="Event date/ shoot date" icon="calendar" group type="date" validate error="wrong" success="right" />
              <MDBInput name='message' type="textarea" rows="2" label="Tell us more about your shoot/events" icon="pencil-alt" />
            </div>
            <div className="text-center">
              <MDBBtn outline color="primary" type='submit reset'>
                Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;