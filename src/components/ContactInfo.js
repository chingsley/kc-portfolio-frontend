import React from 'react';
import style, { css } from 'styled-components';
import EmailIcon from '../svg/EmailIcon';
import FacebookIcon from '../svg/FacebookIcon';
import InstagramIcon from '../svg/InstagramIcon';
import LocationIcon from '../svg/LocationIcon';
import PhoneIcon from '../svg/PhoneIcon';
import TwitterIcon from '../svg/TwitterIcon';
import locationImage from '../assets/my_location.png';

const Div = style.div`
  ${(props) => {
    return css`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      .contact-details {
        // border: 1px solid blue;
        margin: 0;
        display: flex;

        &__icon {
          // border: 1px solid red;
          margin-right: 1rem;
        }
        &__map-img {
          // border: 2px solid red;
          width: 20rem;
          border-radius: 4px;
          overflow: hidden;
        }
      }

      @media only screen and (max-width: 768px) {
        .contact-details {
          // border: 1px solid blue;
          height: auto;
          margin-bottom: 2rem;
  
          &__icon {
            // border: 1px solid red;
          }
          &__map-img {
            // border: 2px solid red;
            width: 100%;
          }
      }
    `;
  }}`;

function ContactInfo() {
  return (
    <Div>
      <div className="contact-details">
        <div className="contact-details__icon">
          <LocationIcon />
        </div>

        <div>
          13 Adeniji Street, The View Apartment, Atlantic View estate, New Road
          Lekki, Lagos Nigeria
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details__icon">
          <PhoneIcon />
        </div>
        +234 0810 903 7816
      </div>
      <div className="contact-details">
        <div className="contact-details__icon">
          <EmailIcon />
        </div>
        eneja.kc@gmail.com
      </div>
      <div className="contact-details">
        <div className="contact-details__icon">
          <FacebookIcon />
        </div>
        <div className="contact-details__icon">
          <InstagramIcon />
        </div>
        <div className="contact-details__icon">
          <TwitterIcon />
        </div>
      </div>
      <div className="contact-details">
        <img
          className="contact-details__map-img"
          src={locationImage}
          alt="my location"
        />
      </div>
    </Div>
  );
}

export default ContactInfo;
