import React, { useState, useEffect } from "react"

import Table from '../components/Table'
import GalleryModal from '../components/GalleryModal'

const Gallery = () => {
  const [show, setShow] = useState(false)
  const [body, setBody] = useState([])

  const data = {
    head: ['Ссылка на изображение', 'Дата создания',],
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
    // if (pageData !== null || pageData !== undefined) pageData.style.margin = '30px 30px 30px 280px;'

    setShow(false)
  }

  useEffect(async () => {
    const responce = await fetch('/api/find/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()


    setBody(candidate.gallery)

  }, [])


  const updateGallery = async () => {
    const responce = await fetch('/api/find/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()

    setBody(candidate.gallery)
  }

  return (
    <div className="bots">
      <div className="page-desc bots_desc">

        <div className="bots_desc_header">
          <div className="bots_desc_header_inner">
            <p className="subtitle">All notes</p>
            <button onClick={createNotesHandler} className="btn">create notes</button>
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
                  <td> {element.image} </td>
                  <td> {element.date} </td>
                </tr>
              ))
            }

          </tbody>
        </table>

        <GalleryModal createGalleryHandler={updateGallery} onClose={closeModal} show={show} />

      </div>
    </div>
  )
}

export default Gallery