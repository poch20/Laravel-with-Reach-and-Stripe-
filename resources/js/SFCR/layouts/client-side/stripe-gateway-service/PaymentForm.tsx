import React, { useState } from 'react'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

// Styling
import '@css/stripe-css/gateway-interface-visuals.css'
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce833" },
      "::placeholder": { color: "#87bbfd" }
    },

    Invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}


export default function PaymentForm() {
  const [storeSuccess, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const formSubmitted = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })


  if(!error) {
    try {
      const {id} = paymentMethod
      const response = await axios.post('/payment/stripecontroller', {
        amount: 1000,
        id
      })

      if (response.data.success) {
        console.log("Successful Payment");
        setSuccess(true)
      }
    } catch (error) {
      console.log("Error", error);
    }
  } else {
    console.log(error.message);

  }
}
  return (
    <>
    {!success ?
      <form onSubmit={formSubmitted} action="" method="post">
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="ReactStripeDemo-submitButton">Pay</button>
      </form>
      :
      <div className="">
        <h2>Sweet Potato</h2>
      </div>
    }
    </>
  )
}
