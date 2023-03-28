
import axios from 'axios'
import React, { useState,useEffect} from 'react'

export default function App () {
  const [name, setName] = useState('ZHANGJINNING')
  const [list, setlist] = useState([])
  useEffect(() => {
    axios.get(`/test.json`).then(res => {
        setlist(res.data.data.films[0].actors)
    })
setName(name.substring(0,1).toUpperCase()+name.substring(1))
  }, [name])
  const changeName = (val) => {
    setName(val)
  }
  return (
    <div>
      {name}
      <button onClick={() => changeName('xiaoming')}> 改变</button>
      {
        list.map(item => <ul>
        <li key={item.role}>{ item.name}</li>
        </ul>)
      }
    </div>
  )
}
