import React, { useState, useEffect } from 'react'
import '@css/stripe-css/gateway-interface-visuals.css'

const ProductDisplay = (props) => (
  <section>
    <div className="product">
      <img
        src={`${process.env.ASSET_PATH}${props.obj.obj.img}`}
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>{props.name}</h3>
        <h3>{props.idRefKey}</h3>
        <h3>{process.env.ASSET_PATH}</h3>
        <h5>{props.obj.obj.selling_price}</h5>
      </div>
    </div>
    <form action={`${process.env.ASSET_PATH}api/checkout`} method="POST">
      <input
        defaultValue={props.idRefKey}
        style={{ display: 'none' }}
        name="InptT__nameAttr__refKeyId"
        id="InptT__idAttr__refKeyId"
      />
      <input
        defaultValue={props.obj.obj.name}
        style={{ display: 'none' }}
        name="InptT__nameAttr__name"
        id="InptT__idAttr__name"
      />
      <input
        defaultValue={`${process.env.ASSET_PATH}${props.obj.obj.img}`}
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
        defaultValue={props.obj.obj.qty}
        style={{ display: 'none' }}
        name="InptT__nameAttr__qty"
        id="InptT__idAttr__qty"
      />
      <input
        defaultValue={props.obj.obj.selling_price}
        style={{ display: 'none' }}
        name="InptT__nameAttr__selling_price"
        id="InptT__idAttr__selling_price"
      />
      <button type="submit">Checkout</button>
    </form>
  </section>
)

export default function StripeConfirmationCheckOut({ props, ...Any }) {
  const [message, setMessage] = useState('')
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('checkout-success')) {
      setMessage('Order placed! You will receive an email confirmation.')
    }
    if (query.get('checkout-cancel')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [])

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay name={Any.obj.name} obj={Any} idRefKey={Any.obj.id} />
  )
}
