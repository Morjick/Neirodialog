import React, { useState, useEffect } from "react"

import Table from '../components/Table'
import { NavLink } from 'react-router-dom'

const Users = () => {
  const [body, setBody] = useState([])

  let actives = document.querySelectorAll('.active--sidebar')

  actives.forEach(el => {
    el.classList.remove('active--sidebar')
  })

  const botItemActive = document.getElementById('userItem')
  if (botItemActive != null) botItemActive.classList.add('active--sidebar')

  const data = {
    head: ['Login', 'Registration date', 'Games played', 'Input money', 'Output money', 'Balance',],
    body
  }

  useEffect(async () => {
    const responce = await fetch('/api/find/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }, [])

    const candidate = await responce.json()

    let timesArray = []

    candidate.users.forEach(el => {
      let timesArr = [el.login, el.registerDate, el.played, el.input, el.putput, el.balance]

      timesArray.push(timesArr)
    })

    setBody(timesArray)
  })

  const activeHendler = (e) => {
    e.stopPropagation()

    let actives = document.querySelectorAll('.activeBtn')

    actives.forEach(el => {
      el.classList.remove('activeBtn')
    })
    e.target.className += ' activeBtn'
  }

  return (
    <div className="messages">

      <div className="messages_header">
        <div className="week_message">
          <span onClick={activeHendler} className="btn btn--subsidiary btn--subsidiary--long activeBtn">
            All users
          </span>

          <span onClick={activeHendler} className="btn btn--subsidiary btn--subsidiary--long">
            Online users
          </span>
        </div>
      </div>

      <div className="bots_desc page-desc-sm message_table">
        <Table items={data} />
      </div>
    </div>
  )
}

export default Users