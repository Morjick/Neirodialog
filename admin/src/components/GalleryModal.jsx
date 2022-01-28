import React, { useState } from "react"

import CloseImg from '../assets/close.png'

import { toast } from 'react-toastify'

const GalleryModal = items => {
  if (!items.show) return null

  function stopPropagationFunc(e) {
    e.stopPropagation()
  }

  const createGalleryHandler = async () => {
    const image = document.getElementById('galleryUrl')
    const date = document.getElementById('galleryDate')

    const data = {
      image: image.value,
      date: date.value
    }

    const responce = await fetch('/api/create/gallery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const candidate = await responce.json()

    toast(candidate.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })

    items.createGalleryHandler()
    items.onClose()
  }


  return (
    <div onClick={items.onClose} className="modal_shadow message_shadow bot_modal_top">

      <div onClick={stopPropagationFunc} className="message_modal message_modal--sm">
        <div className="bot_modal_inner">

          <div onClick={items.onClose} className="bot_modal_close">
            <img src={CloseImg} className="bot_modal_close_img" alt="" />
          </div>

          <div className="bot_modal_title message_modal_title">Добавить изображение</div>

          <div className="bot_modal_value bot_modal--value">

            <div className="login_item bot_modal--inputs">
              <p>Ссылка на изображение</p>
              <input
                id="galleryUrl"
                className="login_item_input "
                type="text"
                placeholder="введите наименоване продукта"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Дата добавления</p>
              <input
                id="galleryDate"
                className="login_item_input"
                type="text"
                placeholder="press note's subtitle"
                value={new Date()}
                disabled
              />
            </div>

          </div>

          <div className="btn-container--center">
            <button onClick={createGalleryHandler} className="btn--primery btn--primery--bg">Сохранить</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GalleryModal