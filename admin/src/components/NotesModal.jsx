import React, { useState } from "react"

import CloseImg from '../assets/close.png'

const NotesModal = items => {
  const [value, setValue] = useState(50)

  if (!items.show) return null

  function stopPropagationFunc(e) {
    e.stopPropagation()
  }

  const rangeHendler = (e) => {
    let luckValue = e.target.value
    setValue(luckValue)
  }

  const createNoteHandler = async () => {
    const title = document.getElementById('noteTitle')
    const subtitle = document.getElementById('noteSubtitle')
    const image = document.getElementById('noteImage')
    const type = document.getElementById('noteType')
    const body = document.getElementById('noteBody')

    const data = {
      title: title.value, 
      subtitle: subtitle.value,
      image: image.value,
      type: type.value,
      body: body.value
    }

    console.log(data)

    const responce = await fetch('http://77.223.97.78/api/create/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const candidate = await responce.json()

    items.createNoteHandler()
    items.onClose()
  }


  return (
    <div onClick={items.onClose} className="modal_shadow message_shadow bot_modal_top">

      <div onClick={stopPropagationFunc} className="bot_modal">
        <div className="bot_modal_inner">

          <div onClick={items.onClose} className="bot_modal_close">
            <img src={CloseImg} className="bot_modal_close_img" alt="" />
          </div>

          <div className="bot_modal_title message_modal_title">Создать запись</div>

          <div className="bot_modal_value bot_modal--value">

            <div className="login_item bot_modal--inputs">
              <p>Title</p>
              <input
                id="noteTitle"
                className="login_item_input "
                type="text"
                placeholder="press note's title"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Subtitle</p>
              <input
                id="noteSubtitle"
                className="login_item_input"
                type="text"
                placeholder="press note's subtitle"
              />
            </div>

            <div className="login_item bot_modal--inputs">
              <p>Image URL</p>
              <input
                id="noteImage"
                className="login_item_input bot_modal_select"
                type="text"
                placeholder="press image url/uri"
              />
            </div>


            <div className="login_item bot_modal--inputs">
              <p>Type</p>
              <select
                id="noteType"
                className="login_item_input bot_modal_select"
                type="text"
                placeholder="my answer"
              >
                <option value="main">Главная запись</option>
                <option value="profiles">Профили</option>
                <option value="pluces">Наши плюсы</option>
                <option value="directions">Направления</option>
              </select>
            </div>

          </div>

          <textarea
            id="noteBody"
            className="login_item_input bot_modal_select heightMax"
            type="text"
            placeholder="press note's body text"
          ></textarea>

          <div className="btn-container--center">
            <button onClick={createNoteHandler} className="btn--primery btn--primery--bg">Save</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NotesModal