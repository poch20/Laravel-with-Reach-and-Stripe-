import React, { useState, useEffect } from 'react'

const ProductDisplay = (props) => {
  console.log('Passed Arguments =>',props);

  return (
    <section>
      <div className="product">
        <img
          src={`${process.env.ASSET_PATH}${props.baseObj.obj.img}`}
          alt="The cover of Product Attachments"
        />
        <div className="description">
          <h3>{props.nameProp}</h3>
          <h3>{props.idProp}</h3>
          <h5>{props.baseObj.obj.selling_price}</h5>
        </div>
      </div>
      <form
        action={`${process.env.ASSET_PATH}api/test-checkout-to-stripe`}
        method="POST"
      >
        <input
          defaultValue={props.idProp}
          style={{ display: 'none' }}
          name="InptT__nameAttr__refKeyId"
          id="InptT__idAttr__refKeyId"
        />
        <input
          defaultValue={props.baseObj.obj.name}
          style={{ display: 'none' }}
          name="InptT__nameAttr__name"
          id="InptT__idAttr__name"
        />
        <input
          defaultValue={`${process.env.ASSET_PATH}${props.baseObj.obj.img}`}
          style={{ display: 'none' }}
          name="InptT__nameAttr__img"
          id="InptT__idAttr__img"
        />
        <input
          defaultValue={process.env.ASSET_PATH}
          style={{ display: 'none' }}
          name="InptT__nameAttr__assetPath"
          id="InptT__idAttr__assetPath"
        />
        <input
          defaultValue={props.baseObj.obj.qty}
          style={{ display: 'none' }}
          name="InptT__nameAttr__qty"
          id="InptT__idAttr__qty"
        />
        <input
          defaultValue={props.baseObj.obj.selling_price}
          style={{ display: 'none' }}
          name="InptT__nameAttr__selling_price"
          id="InptT__idAttr__selling_price"
        />
        <button type="submit" id="checkout-button">
          Checkout
        </button>
      </form>
    </section>
  )
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
)

export default function PreBuiltStripeCheckOut({ props, ...Any }) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('checkout-success')) {
      setMessage('Order placed! You will receive an email confirmation.')
    }

    if (query.get('checkout-canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [])

  return message ? <Message message={message} /> : <ProductDisplay
    nameProp={Any.obj.name} baseObj={Any} idProp={Any.obj.id}
  />
}
