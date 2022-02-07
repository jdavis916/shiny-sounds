import React, { useState } from "react";
//import { CardElement, Elements } from "@stripe/react-stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import FieldInp from "../FieldInp";

/*import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row
   } from 'react-bootstrap';*/

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      backgroundColor: "#999999",
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

/*const CardFieldInp = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);*/

export function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  /*const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }*/
    //setPaymentLoading(true);
    //const clientSecret = getClientSecret();

/*const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Faruq Yusuff",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };*/



  return (
    <figure className="formStripeWrapper">
      <div className="formStripeWrapperInner">
        <form className="formStripe">
          <div>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <FieldInp
                  label="First"
                  id="fName"
                  type="text"
                  placeholder="John"
                  required
                  autoComplete="fName"
                />
                <FieldInp
                  label="Last"
                  id="lName"
                  type="text"
                  placeholder="Doe"
                  required
                  autoComplete="lName"
                />
                <FieldInp
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  required
                  autoComplete="email"
                  /*value={billingDetails.email}
                  onChange={(e) => {
                    setBillingDetails({ ...billingDetails, email: e.target.value });
                  }}*/
                />
                <FieldInp
                  label="Birthdate"
                  id="birthdate"
                  type="date"
                  placeholder=""
                  required
                  autoComplete="birthdate"
                />
                <FieldInp
                  label="City"
                  id="city"
                  type="text"
                  placeholder="San Francisco"
                  required
                  autoComplete="city"
                />
                <FieldInp
                  label="State"
                  id="state"
                  type="text"
                  placeholder="California"
                  required
                  autoComplete="state"
                />
                <FieldInp
                  label="Phone"
                  id="phone"
                  type="tel"
                  placeholder="(941) 555-0123"
                  required
                  autoComplete="tel"
                  /*value={billingDetails.phone}
                  onChange={(e) => {
                    setBillingDetails({ ...billingDetails, phone: e.target.value });
                  }}*/
                />
              </div>
            </fieldset>
            <fieldset className="FormGroup">
              <CardElement
                className="card"
                options={CARD_OPTIONS}             
              />
              <button
                className="pay-button"
                disabled={isPaymentLoading}
              >
                {isPaymentLoading ? "Loading..." : "Sign-Up"}
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </figure>
  );
}

export default CheckoutForm;