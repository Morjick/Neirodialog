import React, { useState, useEffect } from "react"

import Table from '../components/Table'
import NotesModal from '../components/NotesModal'

const Notes = () => {
  const [show, setShow] = useState(false)
  const [body, setBody] = useState([])

  const data = {
    head: ['Title', 'Subtitle', 'Image', 'Body'],
    body
  }

  const renderTable = () => {
    return <Table items={data} />
  }

  const createNotesHandler = () => {
    setShow(true)
  }

  const closeModal = () => {
    const pageData = document.querySelector('.page-data')

    setShow(false)
  }

  useEffect(async () => {
    const responce = await fetch('http://77.223.97.78/api/find/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()


    setBody(candidate.notes)

  }, [])

  const updateNotes = async () => {
    const responce = await fetch('/api/find/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()

    setBody(candidate.notes)
    console.log(body)
  }

  return (
    <div className="bots">
      <div className="page-desc bots_desc">

        <div className="bots_desc_header">
          <div className="bots_desc_header_inner">
            <p className="subtitle">Все записи</p>
            <button onClick={createNotesHandler} className="btn">Создать запись</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {
                data.head.map(el => (
                  <th key={el} scope="col">{el}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>

            {
              data.body.map(element => (
                <tr>
                  <td> {element.title} </td>
                  <td> {element.subtitle} </td>
                  <td> {element.image} </td>
                  <td> {element.body} </td>
                </tr>
              ))
            }

          </tbody>
        </table>

        <NotesModal createNoteHandler={updateNotes} onClose={closeModal} show={show} />

      </div>
    </div>
  )
}

export default Notes