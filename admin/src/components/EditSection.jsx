import React from "react"

import CloseImg from '../assets/close.png'

const EditSection = items => {
  if (!items.show) return null

  function stopPropagationFunc(e) {
    e.stopPropagation()
  }

  const editSectionHandler = () => {

  }

  return (
    <div onClick={items.onClose} className="modal_shadow message_shadow bot_modal_top">

      <div onClick={stopPropagationFunc} className="bot_modal">
        <div className="bot_modal_inner">

          <div onClick={items.onClose} className="bot_modal_close">
            <img src={CloseImg} className="bot_modal_close_img" alt="" />
          </div>

          <div className="bot_modal_title message_modal_title">Редактирование раздела</div>

          <div className="bot_modal_value bot_modal--value">

            <div className="login_item bot_modal--inputs">
              <p>Название</p>
              <input
                id="productTitle"
                className="login_item_input "
                type="text"
                placeholder="введите название"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Будет курс или вебинар</p>
              <select
                id="botCurrency"
                className="login_item_input bot_modal_select"
                type="text"
                placeholder="my answer"
              >
                <option value="course">Курс</option>
                <option value="webinar">Вебинар</option>
              </select>
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Краткое опсиание</p>
              <input
                id="productSubtitle"
                className="login_item_input"
                type="text"
                placeholder="краткое описание"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Имя куратора</p>
              <input
                id="productSubtitle"
                className="login_item_input"
                type="text"
                placeholder="имя куратора"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Девиз куратора</p>
              <input
                id="productSubtitle"
                className="login_item_input"
                type="text"
                placeholder="девиз куратора"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Резюме куратора</p>
              <input
                id="productSubtitle"
                className="login_item_input"
                type="text"
                placeholder="резюме куратора"
              />
            </div>

            <textarea
              id="noteBody"
              className="login_item_input bot_modal_select"
              type="text"
              placeholder="Что будет на курсе или вебинаре"
            ></textarea>

          </div>

          <div className="btn-container--center">
            <button onClick={editSectionHandler} className="btn--primery btn--primery--bg">Сохранить</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditSection