import React, { Component } from 'react'
import axios from 'axios'
import '../css/filmItem.css'

//创建context对象
const GlobalContext = React.createContext()

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      moviesData: [],
      name:''
    }
    axios.get(`/test.json`).then(res => {
      this.setState({
        moviesData: res.data.data.films
      })
    })
  }
  render () {
    return (
      <GlobalContext.Provider value={{
        phone: '222222',
        name: this.state.name,
        changeName: (val) => {
          this.setState({
            name:val
          })
        }
      }}>
      <div>
        {
          this.state.moviesData.map((item, index) =>
            <MoviesList key={index} {...item}></MoviesList>)
        }
        <FilmDetail/>
        </div>
      </GlobalContext.Provider>
    )
  }
}

 class MoviesList extends Component {
   render () {
     let {poster,name, synopsis} =this.props
     return (
       <GlobalContext.Consumer>
         {
          (val) => {
           return(
              <div className='filmItem' onClick={() => {
                val.changeName(synopsis)
                }}>
                <img src={poster} alt={name}></img>
                <h1>{ name}</h1>
              </div>
           )
         } }
      </GlobalContext.Consumer>
    )
  }
}
class FilmDetail extends Component {
   render () {
     return (
       <GlobalContext.Consumer>
         {
           (val) => {
             return (
               <div className='filmItemDetail'>
                 { val.name}
                </div>
             )
           }
         }
       </GlobalContext.Consumer>
    )
  }
}
