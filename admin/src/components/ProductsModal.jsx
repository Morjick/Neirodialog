import React, { useState } from "react"

import CloseImg from '../assets/close.png'

const ProductModal = items => {
  if (!items.show) return null

  function stopPropagationFunc(e) {
    e.stopPropagation()
  }

  const createProductHandler = async () => {
    const title = document.getElementById('productTitle')
    const subtitle = document.getElementById('productSubtitle')
    const image = document.getElementById('productImage')
    const price = document.getElementById('productPrice')

    const data = {
      title: title.value,
      desc: subtitle.value,
      image: image.value,
      price: price.value
    }

    const responce = await fetch('http://77.223.97.78/api/create/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const candidate = await responce.json()

    items.createProductHandler()
    items.onClose()
  }


  return (
    <div onClick={items.onClose} className="modal_shadow message_shadow bot_modal_top">

      <div onClick={stopPropagationFunc} className="message_modal">
        <div className="bot_modal_inner">

          <div onClick={items.onClose} className="bot_modal_close">
            <img src={CloseImg} className="bot_modal_close_img" alt="" />
          </div>

          <div className="bot_modal_title message_modal_title">Создать товар</div>

          <div className="bot_modal_value bot_modal--value">

            <div className="login_item bot_modal--inputs">
              <p>Title</p>
              <input
                id="productTitle"
                className="login_item_input "
                type="text"
                placeholder="введите наименоване продукта"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Подзаголовок</p>
              <input
                id="productSubtitle"
                className="login_item_input"
                type="text"
                placeholder="press note's subtitle"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Изображение товара</p>
              <input
                id="productImage"
                className="login_item_input bot_modal_select"
                type="text"
                placeholder="введите ссылку на картинку"
              />
            </div>


            <div className="login_item bot_modal--inputs">
              <p>Цена</p>
              <input
                id="productPrice"
                className="login_item_input bot_modal_select"
                type="text"
                placeholder="введите цену на товар без скидок"
              />
            </div>

          </div>

          <div className="btn-container--center">
            <button onClick={createProductHandler} className="btn--primery btn--primery--bg">Сохранить</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductModal