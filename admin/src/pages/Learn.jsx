import React, { useEffect, useState } from "react"

import NewSection from "../components/NewSection"
import EditSection from "../components/EditSection"
import Table from "../components/Table"

const Learn = () => {
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [body, setBody] = useState([])

  const renderTable = () => {
    return <Table items={data} />
  }

  const data = {
    head: ['Название', 'Краткое описание', 'Имя куратора', 'Девиз куратора', 'Резюме куратора', 'Что будет на курсе?',],
    body
  }

  const timesDirections = ['Неиродиагностика', 'Дефектология', 'Неиродиалогия', 'Логопедия', 'Психолгия', 'Неиродиагностика',]
  const [directions, setDirections] = useState(timesDirections)

  let Day
  const [itDay, setItDay] = useState(Day)

  useEffect(() => {
    const thisDay = document.getElementById(directions[0])
    
    setItDay(directions[0])
    thisDay.classList.add('activeBtn')
  }, [])


  const activeHendler = async (e) => {
    let thisDay = e.target.textContent
    setItDay(thisDay)

    let actives = document.querySelector('.activeBtn')

    actives.classList.remove('activeBtn')
    e.target.className += ' activeBtn'
  }

  const closeModal = () => {
    const pageData = document.querySelector('.page-data')

    setShow(false)
  }

  const createSection = () => {
    setShow(true)
  }

  const editSection = () => {
    setEdit(true)
  }

  return (
    <div className="messages">

      <div className="messages_header">
        <div className="week_message">

          {
            directions.map(direction => (
              <span id={direction} onClick={activeHendler} className="btn btn--subsidiary">
                {direction}
              </span>
            ))
          }

        </div>
        <div className="headerBtnContainer">
          <button onClick={() => setShow(true)} className="btn btn--height">создать раздел</button>
          <button onClick={() => setEdit(true)} className="btn btn--height">редактировать раздел</button>
        </div>
      </div>

      <div className="bots_desc page-desc-sm message_table">
        {
          renderTable()
        }
      </div>

      <EditSection editSectionHandler={editSection} onClose={() => setEdit(false)} show={edit} />

      <NewSection createSectionHendler={createSection} onClose={() => setShow(false)} show={show} />
    </div>
  )
}

export default Learn