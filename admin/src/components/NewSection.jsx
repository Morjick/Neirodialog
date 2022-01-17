import React, { useState } from "react"

import CloseImg from '../assets/close.png'

const NewSection = items => {
  if (!items.show) return null

  function stopPropagationFunc(e) {
    e.stopPropagation()
  }

  const createNewSection = () => {

  }

  return (
    <div onClick={items.onClose} className="modal_shadow message_shadow bot_modal_top">

      <div onClick={stopPropagationFunc} className="message_modal message_modal--sm">
        <div className="bot_modal_inner">

          <div onClick={items.onClose} className="bot_modal_close">
            <img src={CloseImg} className="bot_modal_close_img" alt="" />
          </div>

          <div className="bot_modal_title message_modal_title">Добавить новый раздел</div>

          <div className="bot_modal_value bot_modal--value">

            <div className="login_item bot_modal--inputs">
              <p>Название раздела</p>
              <input
                id="productTitle"
                className="login_item_input "
                type="text"
                placeholder="введите название раздела"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Описание раздела</p>
              <input
                id="productTitle"
                className="login_item_input "
                type="text"
                placeholder="введите описание раздела"
              />
            </div>

          </div>

          <div className="btn-container--center">
            <button onClick={createNewSection} className="btn--primery btn--primery--bg">Сохранить</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewSection