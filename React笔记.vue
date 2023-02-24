/*
!一、React介绍
*1、React的特性
1.声明式设计-(想做什么,直接告诉它,剩下的渲染交给react)。
2.高效-React通过对DOM(虚拟DOM)的模拟,最大限度地减少与DOM的交互。
3.灵活-React可以与已知的库或框架很好地配合。
4.JSX-React使用JSX语法来描述UI组件,这种语法类似于HTML,但是它可以嵌入JavaScript表达式,使得编写React组件更加方便和灵活。用babel进行解析。
5.组件-通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。（复用）
6.单向响应的数据流- React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
React使用单向数据流来管理组件状态,从而简化了应用程序的数据管理和状态更新。这种数据流也使得React组件更易于调试和测试
w
总的来说,React具有组件化开发、虚拟DOM、JSX语法、单向数据流、生命周期和React Hooks等特性,这些特性使得React在构建用户界面方面变得更加高效、灵活和易于维护。
*2、虚拟DOM
1.传统的DOM更新需要手动操作DOM,从而引起重排和回流,影响浏览器的性能。
2.React根据后端返回的数据,先将数据放入虚拟DOM中,若数据发生改变,则与虚拟DOM数据进行对比,将增删改的数据进行操作,未改变的数据不受影响。

!二、React脚手架(create-react-app)
1.全局安装create-react-app
?npm install -g create-react-app
2.创建一个项目
?create-react-app XXX
TODO:PS:若npm安装失败。
(1)安装npm包的仓库
?npm i -g nrm
(2)查看nrm版本
?nrm-V
(3)显示nrm命令
?nrm ls
(4)切换镜像
?nrm use 名称

!三、编写第一个React应用程序(最简单的创建应用的方式)
1.删除src下面的所有文件并创建index.js文件。(public文件夹下的index.html是整个文件的入口文件,它会加载index.js文件)
2.引入React和ReactDOM核心模块。
?import React from 'react'
(只要你写React.js组件就必须引入React,因为react里有一种语法叫JSX,要写JSX,就必须引入React。)
?import ReactDOM from 'react-dom'
(ReactDOM可以帮助我们把React组件渲染到页面上去。)
3.使用render方法(渲染组件并且构造DOM树,然后插入到页面上某个特定的元素上)
(1)
?ReactDOM.render(
  ?'111111111111',document.getElementById('root')
  *获取index.html中的root节点并将11111渲染到root节点中去
  ?)
(2)
?ReactDOM.render(
  ?<div><p>11111111</p></div>,
  ?document.getElementById('root')
  *获取index.html中的root节点并将div标签渲染到root节点中去
  )
TODO: JSX== JS+XML(render中的内容属于xml结构)

!四、JSX语法原理(由Babel提供的JSX编译器编译为js,代码由浏览器执行)

!五、组件的创建(类组件)
1.在src文件夹中创建components文件夹。
2.创建组件文件xxx.js
?import React from 'react'

?class App extends React.Component{
?render(){
?  return <div>hello!component</div>
   }
 }

?export default App
TODO:index.js中导入APP必须大写首字母

!六、组件的创建(函数组件)
?function App(){
  ?return(
    ?<div>
      ?<div>
      ?<p>这是函数式组件内容</p>
      ?</div>
    ?</div>
  )
}

?export default App

!七、嵌套组件
?import React, { Component } from 'react'

*嵌套类组件
?class Header extends Component {
  ?render(){
  ?return(
  ?<dvi>
    ?<p>嵌套的类Header组件</p>
  ?</div>
    )
  }
}
*嵌套函数式组件
TODO:函数式组件的简写
?const Center =()=><div><p>嵌套的Center函数式组件</p></div>

?export default class App extends Component {
  ?render() {
    ?return (
      ?<div>
      ?<div>嵌套组件</div>
        ?<Header/>
      ?</div>
    )
  }
}

!八、组件样式
*React推荐我们使用行内样式,因为React觉得每一个组件都是一个独立的整体
?import React, { Component } from 'react'

?export default class App extends Component {
  ?render() {
    ?const header={
      ?background-color="red"
    }
    ?return (
      ?<div>
      ?<div>组件样式</div>
      ?<p classNmae={header}>header</p>
      ?{20+4}-{2}
      ?<p style={backgroundColor="green"}></p>
        ?<div>
          ?<label htmlFor='userName'>
            ?用户名：
            ?<input type='text' id='userName'>
            ?</input>
          ?</label>
        ?</div>
      ?</div>
    )
  }
}

!九、事件绑定

1、写法
?import React, { Component } from 'react'

?export default class App extends Component {
  ?render() {
    ?return (
      ?<div>
      ?<div>事件绑定</div>
      ?<div>
        ?<input/>
        *事件绑定写法1(函数不多推荐,this指向问题)
        ?<button onClick={()=>{ console.log('click','如果处理函数过多,则不适用!')}}></button>
        *事件绑定写法2(不推荐)
        ?<button onClick={this.handleClick2.bind(this)}></button>
        *事件绑定写法3(比较推荐,this指向问题)
        ?<button onClick={this.handleClick3}></button>
        *事件绑定写法4(推介写法,this指向问题&传参适用)
        <button onClick={()=>{ this.handleClick4()}}></button>
      ?</div>
      ?</div>
    )
  }
  ?handleClick2(){
    ?console.log('click2')
  ?}
  ?handleClick3=()=>{
    ?console.log('click3')
  ?}
  ?handleClick4=()=>{
    ?console.log('click3')
  }
}

2.改变this指向方法(call、apply、bind)
(1)call&apply改变this指向,立即执行方法
(2)bind改变this指向,手动执行方法

TODO:===面试题===React绑定事件跟原生绑定事件的区别?
(React并不会绑定事件在每一个具体的元素身上,而是采用事件代理的模式绑定在根节点上)

!十、ref的应用
1、写法 xxx=React.createRef()（声明变量,并在标签中用ref={this.xxx}进行使用）。

!十一、状态初体验！！！！
?import React, { Component } from 'react'

?export default class header extends Component {
  ?inputValueRef = React.createRef()
  *定义状态(ps:必须为state)
  ?state = {
    ?headerState:true
  }
  ?render () {
    ?return (
      ?<div>
      ?<input type="text" ref={this.inputValueRef}></input>
        ?<button onClick={
          ?() => {
            ?this.Click()
          }
        }>
        *状态改变,按钮显示改变
        ?{this.state.headerState?'收藏':'取消收藏'}
        ?</button>
        ?<div>这是header这是header这是header这是header</div>
      ?</div>
    )
  }
  ?Click () {
    *访问Refs
    ?const refVlaues=this.inputValueRef.current
    *使用点击函数改变状态
    ?this.setState({
      ?headerState:!this.state.headerState
    })
  }
}
1、组件内部特有的数据载体,改变数据,页面更新。
2、使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)。

!十二、列表渲染
1、遍历数组
*使用map函数
?import React, { Component } from 'react'

?state={
  ?list:['今天','明天','后天']
}
?export default class center extends Component {
  ?render() {
    ?const newList=this.state.list.map(()=><li key={item}>{item}</li>)
    ?return (
      ?<div>
      ?<div>
      ?<ul>
        ?{newList}
      ?</ul>
      ?</div>
      ?</div>
    )
  }
}
2、使用key值
*为了列表的复用和重排,提高性能。

!十三、案例-todolist增加、删除
*新增使用ref删除使用splice

!十四、条件渲染

{this.state.list.length===0?<div>暂无待办事项</div>}
{this.state.list.length===0&&<div>暂无待办事项</div>}
 <div className={this.state.list.length===0?'':'hidden'}>暂无待办事项</div>

!十五、输入框中加入富文本(可以用,但是比较危险)
<span dangerouslySetInnerHTML={__html:item.mytext}></span>

!十六、选项卡案例
1、数据请求(利用axios-npm i axios)

  ?import axios from 'axios'

  ?axios(post\post\put)({
    ?url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=929717',
    ?method:'get',
    ?headers:{
      ?X-Client-Info: {"a":"3000","ch":"1002","v":"5.2.1","e":"167644485072395968741377","bc":"110100"}
      ?X-Host: mall.film-ticket.cinema.list
        }
    ?}).then(res=>{
      ?console.log(res,'res')
    ?}).catch(err=>{
      ?console.log(err,'err')
    ?})
2、搜索过滤数据(利用filter过滤函数)
  eg:
    ?var arr =['aaa','abc','bcc']
    ?var newarr = arr.filter(item=>item.includes('b'))
    ?console.log(newarr)

    TODO:过滤数据对源数据没有影响！

!十六、setState同步/异步
TODO:面试题:连续多次调用setState()之后会发生什么？
TODO:setState处于异步更新状态
?this.setState({
  ?count:this.state.count+1
  ?},()=>{
    *状态和真实DOM已经更新完了
  ?console.log(this .state.count)
  })
TODO:1、setstate处在同步的逻辑中,setstate处在异步的逻辑中,异步更新状态,更新真实dom同步更新状态,同步更新真实dom。
TODO:2、setstate 接受第二个参数， 第二个参数是回调函数,状态和dom更新完后就会被触发。

!十七、betterScroll(列表平滑滚动效果)
 ?npm i better-scroll
 ?import BetterScrall from 'better-scroll'
 ?new BetterScrall('.divClassName')

 !十八、属性(props)实现组件【复用】以及组件之间的【通信】
 1、复用
  *①、原始用法:
  this.props.title可实现获取父组件的title值。
  *②、解构用法:
  let {title,leftShow} = this.props;

import React, { Component } from 'react'

export default class app extends Component {
  render() {
    *解构用法
    let {title,leftShow} = this.props;
    return (
      <div>{title}</div>
     {leftShow&&<div>leftShow</div>}
    )
  }
}
2、属性验证
 ①、验证类属性
  Navbar.propTypes={
    title:验证是不是字符串的方法,
    leftShow:验证是不是bool的方法
  }
  使用小模块进行验证：
    import jnPropsTypes form 'prop-types'
TODO:类属性
  static【放入类函数中】.propTypes={
    title:jnPropsTypes.string,
    leftShow:jnPropsTypes.bool
  }
 TODO:类属性默认值
  static【放入类函数中】.defaultProps={
    leftShow:true
  }
*属性和状态
?相似点:
*都是纯is对象,都会触发render更新,都具有确定性 (状态/属性相同，结果相同)
?不同点:
*1.属性能从父组件获取，状态不能
*2.属性可以由父组件修改，状态不能
*3.属性能在内部设置默认值，状态也可以，设置方式不一样
*4.属性不在组件内部修改，状态要在组件内部修改
*5.属性能设置子组件初始值，状态不可以
*6.属性可以修改子组件的值，状态不可以
TODO:尽量多写无状态组件,少写状态组件。(可降低代码的维护难度,增强组件的可复用性)

!十九、表单的受控与非受控-狭义(广义:是否被传递的props控制)
1、非受控组件
  import React, { Component } from 'react'

  export default class App extends Component {
    myuserName= this.React.createRef()
  render() {
    return (
      <div>
      <h1>登录页</h1>
        <input type="text" ref={this.myuserName}/>
        <button onClick={()=>{this.login()}}>登录</button>
        <button onClick={()=>{this.myuserName.current.value=''}}>重置</button>
      </div>
      *需求：在输入框之默认有一个值,可使用value="zhangjinning"实现,但无法自行输入值(这便是非受控行为)。此时将value改为defaultValue即可更改
    )
  }
}
2、受控组件(推荐使用)
import React, { Component } from 'react'

  export default class App extends Component {
    state={
      userName:'zhangjinning'
    }
  render() {
    return (
      <div>
      <h1>登录页</h1>
        <input type="text" value={this.state.userName} onChange={(evt)=>{
         this.setState({
          userName:event.target.value
         })
        }}/>
        <button onClick={()=>{}}>登录</button>
        <button onClick={()=>{}}>重置</button>
      </div>
    )
  }
  }
3、受控写法

















*/
