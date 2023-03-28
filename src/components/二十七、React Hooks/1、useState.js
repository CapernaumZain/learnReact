import React, { useState} from 'react'

export default function App () {
  //加入状态
  const [state, setState] = useState('ZHANGJINNING')

  return (
    <div>
      { state}
      <button onClick={() => {setState('ZHANGJINXIN') }}>改变</button>
    </div>
  )
}