import React, { useState, useEffect } from 'react'

import Table from '../components/Table'
import ProductModal from '../components/ProductsModal'

const Product = () => {
  const [show, setShow] = useState(false)
  const [body, setBody] = useState([])

  const data = {
    head: ['Название товара', 'Ссылка на картинку', 'Описание товара', 'Цена'],
    body
  }

  const renderTable = () => {
    return <Table items={data} />
  }

  const createProductHandler = () => {
    setShow(true)
  }

  const closeModal = () => {
    const pageData = document.querySelector('.page-data')

    setShow(false)
  }

  useEffect(async () => {
    const responce = await fetch('/api/find/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()


    setBody(candidate.products)

  }, [])

  const updateProduct = async () => {
    const responce = await fetch('/api/find/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()

    setBody(candidate.products)
  }

  return (
    <div className="page-desc bots_desc">

      <div className="bots_desc_header">
        <div className="bots_desc_header_inner">
          <p className="subtitle">Все продукты</p>
          <button onClick={createProductHandler} className="btn">Добавить товар</button>
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
                <td> {element.image} </td>
                <td> {element.desc} </td>
                <td> {element.price} </td>
              </tr>
            ))
          }

        </tbody>
      </table>

      <ProductModal createProductHandler={updateProduct} onClose={closeModal} show={show} />

    </div>
  )
}

export default Product