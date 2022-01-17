import React, { useState, useEffect } from "react"
import Data from '../data/data'

const Settings = () => {
  const [body, setBody] = useState([])
  const [universalPassword, setUniversalPassword] = useState('')


  let actives = document.querySelectorAll('.active--sidebar')

  actives.forEach(el => {
    el.classList.remove('active--sidebar')
  })

  const botItemActive = document.getElementById('settingsItem')
  if (botItemActive != null) botItemActive.classList.add('active--sidebar')

  useEffect(async () => {
    const responce = await fetch('/api/find/password', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()
    const thisPassword = candidate.data[0]
    
    if(thisPassword == 0 || thisPassword == undefined) {
      setUniversalPassword('Пароль не задан')
    } else {
      setUniversalPassword(thisPassword.data)
    }
    
  }, [])

  useEffect(async () => {
    const responce = await fetch('/api/find/numbers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidate = await responce.json()


    let timesArray = []
    const newNumber = candidate.numbers[0].data


    newNumber.forEach(el => {
      timesArray.push(el)
    })
    
    setBody(timesArray)
  }, [])

  

  let nubmersArr = body

  const addNumber = () => {
    const number = document.getElementById('settingNumber')

    const data = {
      name: 'Numbers',
      data: Number(number.value)
    }

    async function findNumbers() {
      const responce = await fetch('/api/setting/numbers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const newNumbers = await fetch('/api/find/numbers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      const candidate = await newNumbers.json()
  
  
      let timesArray = []
      const newNumber = candidate.numbers[0].data
  
  
      newNumber.forEach(el => {
        timesArray.push(el)
      })

      setBody(timesArray)
    }

    number.value = ''

    findNumbers()
  }

  const updatePassword = async () => {
    const settingPassword = document.getElementById('settingPassword')

    const data = {
      name: 'universalPassword',
      data: settingPassword.value
    }
    
    const responce = await fetch('/api/setting/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const candidate = await responce.json()
    console.log('candidate', candidate)

    const responcePassword = await fetch('/api/find/password', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const candidateNewPassword = await responcePassword.json()
    const thisPassword = candidateNewPassword.data[0]
    
    if(thisPassword == 0 || thisPassword == undefined) {
      setUniversalPassword('Пароль не задан')
    } else {
      setUniversalPassword(thisPassword.data)
    }

    settingPassword.value = ''
  }

  return (
    <div className="page-desc">
      <div className="page_inner">

        <div className="numbers">
          <div className="numbers_inner">
            <p>List of numbers to break the graph</p>
            <div className="numbers_add">
              <div className="login_item settings_input">
                <input
                  id="settingNumber"
                  className="login_item_input "
                  type="text"
                  placeholder="number"
                />
              </div>
              <button
                onClick={addNumber}
                className="btn btn--md btn--primery p-5 settings_btn_item"
              >Add</button>
            </div>
            <div className="number_list">
              {body.map(el => (
                <div key={el} className="number_list_item">{el}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="bots">
          <div className="bots_inner settings_inner_bots">
            <p>Universal password for bots</p>
            <p>Current password: {universalPassword}</p>
            <div className="login_item">
              <input 
                id="settingPassword"
                className="login_item_input" 
                type="text" 
                placeholder="New password..." />
            </div>
            <button onClick={updatePassword} className="btn btn--md btn--primery p-5">Save</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings