import React, { useState} from 'react'

export default function App () {
  const handleChange = (val) => {
    settext(val.target.value)
  }
  const addText = () => {
    console.log(text);
    setlist([...list, text])
    settext('')
  }
  const move = (index) => {
    var newList = [...list]
    newList.splice(index, 1)
    setlist(newList)
  }
  const [text, settext] = useState('')
  const [list, setlist] = useState(['aaa','bbb'])
  return (
    <div>
      <input onChange={handleChange} value={ text}>
      </input>
      <button onClick={() => { addText() }}>添加</button>
      <ul>
        {
          list.map((item,index) =>
            <li key={item}>{item}<button onClick={()=>move(index)}>移除</button></li>
          )
        }
      </ul>
      { !list.length&&<div>暂无待办事项</div>}
    </div>
  )
}
