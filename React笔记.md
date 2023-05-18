# 一、React介绍
  ## 1、React的特性
        1.声明式设计-(想做什么,直接告诉它,剩下的渲染交给react)。
        2.高效-React通过对DOM(虚拟DOM)的模拟,最大限度地减少与DOM的交互。
        3.灵活-React可以与已知的库或框架很好地配合。
        4.JSX-React使用JSX语法来描述UI组件,这种语法类似于HTML,但是它可以嵌入JavaScript表达式,使得编写React组件更加方便和灵活。用babel进行解析。
        5.组件-通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。（复用）
        6.单向响应的数据流- React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
        React使用单向数据流来管理组件状态,从而简化了应用程序的数据管理和状态更新。这种数据流也使得React组件更易于调试和测试

        总的来说,React具有组件化开发、虚拟DOM、JSX语法、单向数据流、生命周期和React Hooks等特性,这些特性使得React在构建用户界面方面变得更加高效、灵活和易于维护。
   ## 2、虚拟DOM
        1.传统的DOM更新需要手动操作DOM,从而引起重排和回流,影响浏览器的性能。
        2.React根据后端返回的数据,先将数据放入虚拟DOM中,若数据发生改变,则与虚拟DOM数据进行对比,将增删改的数据进行操作,未改变的数据不受影响。

# 二、React脚手架(create-react-app)
  ## 1.全局安装create-react-app
  ```JS
  npm install -g create-react-app
  ```
  ## 2.创建一个项目
  ```JS
  create-react-app XXX
  ```
* PS:若npm安装失败。
>(1)安装npm包的仓库
>npm i -g nrm
>(2)查看nrm版本
>nrm-V
>(3)显示nrm命令
>nrm ls
>(4)切换镜像
>nrm use 名称

# 三、编写第一个React应用程序(最简单的创建应用的方式)
## 1.删除src下面的所有文件并创建index.js文件。
* public文件夹下的index.html是整个文件的入口文件,它会加载index.js文件
## 2.引入React和ReactDOM核心模块。
 ```js
 import React from 'react'
 //只要你写React.js组件就必须引入React,因为react里有一种语法叫JSX,要写JSX,就必须引入React。
 ```
 ```js
 import ReactDOM from 'react-dom'
 //ReactDOM可以帮助我们把React组件渲染到页面上去。
 ```

## 3.使用render方法(渲染组件并且构造DOM树,然后插入到页面上某个特定的元素上)
  ```js
  ReactDOM.render('111111111111',document.getElementById('root')
  //获取index.html中的root节点并将11111渲染到root节点中去)
  ```
 ```js
 ReactDOM.render(<div><p>11111111</p></div>,document.getElementById('root')
 //获取index.html中的root节点并将div标签渲染到root节点中去)
 ```
* JSX== JS+XML(render中的内容属于xml结构)

# 四、JSX语法原理
* 由Babel提供的JSX编译器编译为js,代码由浏览器执行

# 五、组件的创建(类组件)
## 1.在src文件夹中创建components文件夹。
## 2.创建组件文件xxx.js

```js
import React from 'react'
class App extends React.Component{
render(){
  return <div>hello!component</div>
   }
 }
export default App
//index.js中导入APP必须大写首字母
```

# 六、组件的创建(函数组件)
```js
export function Name(){
  return (
    <div>
      <h1>这是函数式组件</h1>
    </div>
  )
}
```

# 七、嵌套组件
## 1.嵌套类组件
```js
import React, { Component } from 'react'

class Header extends Component {
  render(){
  return(
  <div>
    <p>嵌套的类Header组件</p>
  </div>
    )
  }
}
```
## 2.嵌套函数式组件
```JS
//函数式组件的简写
const Center =()=><div><p>嵌套的Center函数式组件</p></div>

export default class App extends Component {
  render() {
    return (
      <div>
      <div>嵌套组件</div>
        <Header/>
      </div>
    )
  }
}
```

# 八、组件样式
* React推荐我们使用行内样式,因为React觉得每一个组件都是一个独立的整体
```JS
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const header={
      background-color="red"
    }
    return (
      <div>
      <div>组件样式</div>
      <p classNmae={header}>header</p>
      {20+4}-{2}
      <p style={backgroundColor="green"}></p>
        <div>
          <label htmlFor='userName'>
            用户名：
            <input type='text' id='userName'>
            </input>
          </label>
        </div>
      </div>
    )
  }
}
```
# 九、事件绑定

## 1、写法
```JS
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
      <div>事件绑定</div>
      <div>
        <input/>
        //事件绑定写法1(函数不多推荐,this指向问题)
        <button onClick={()=>{ console.log('click','如果处理函数过多,则不适用!')}}></button>
        //事件绑定写法2(不推荐)
        <button onClick={this.handleClick2.bind(this)}></button>
        //事件绑定写法3(比较推荐,this指向问题)
        <button onClick={this.handleClick3}></button>
        //事件绑定写法4(推介写法,this指向问题&传参适用)
        <button onClick={()=>{ this.handleClick4()}}></button>
      </div>
      </div>
    )
  }
  handleClick2(){
    console.log('click2')
  }
  handleClick3=()=>{
    console.log('click3')
  }
  handleClick4=()=>{
    console.log('click3')
  }
}
```

## 2.改变this指向方法(call、apply、bind)
* call&apply改变this指向,立即执行方法
* bind改变this指向,手动执行方法

* 面试题:React绑定事件跟原生绑定事件的区别?
(React并不会绑定事件在每一个具体的元素身上,而是采用事件代理的模式绑定在根节点上)

# 十、ref的应用
* 写法:
```JS
xxx=React.createRef()
//声明变量,并在标签中用ref={this.xxx}进行使用。
```

# 十一、状态初体验！！！！
```JS
import React, { Component } from 'react'

export default class header extends Component {
  inputValueRef = React.createRef()
  //定义状态(ps:必须为state)
  state = {
    headerState:true
  }
  render () {
    return (
      <div>
      <input type="text" ref={this.inputValueRef}>
      </input>
        <button onClick={
          () => {
            this.Click()
          }
        }>
        //状态改变,按钮显示改变
        {this.state.headerState?'收藏':'取消收藏'}
        </button>
        <div>这是header这是header这是header这是header</div>
      </div>
    )
  }
  Click () {
    //访问Refs
    const refVlaues=this.inputValueRef.current
    //使用点击函数改变状态
    this.setState({
      headerState:!this.state.headerState
    })
  }
}
//1、组件内部特有的数据载体,改变数据,页面更新。
//2、使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)。
```

# 十二、列表渲染
## 1、遍历数组
```JS
//使用map函数
import React, { Component } from 'react'

state={
  list:['今天','明天','后天']
}
export default class center extends Component {
  render() {
    const newList=this.state.list.map(()=><li key={item}>{item}
    </li>)
    return (
      <div>
      <div>
      <ul>
        ?{newList}
      </ul>
      </div>
      </div>
    )
  }
}
```
## 2、使用key值
* 为了列表的复用和重排,提高性能。

# 十三、案例-todolist增加、删除
* 新增使用ref删除使用splice

# 十四、条件渲染

```JS
{this.state.list.length===0?<div>暂无待办事项</div>}
{this.state.list.length===0&&<div>暂无待办事项</div>}
 <div className={this.state.list.length===0?'':'hidden'}>暂无待办事项
 </div>
 ```

# 十五、输入框中加入富文本(可以用,但是比较危险)

```JS
<span dangerouslySetInnerHTML={__html:item.mytext}/>

  ```

# 十六、选项卡案例
  ## 1、数据请求(利用axios-npm i axios)
```JS
  import axios from 'axios'

  axios(post\post\put)({
    url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=929717',
    method:'get',
    headers:{
      X-Client-Info: {"a":"3000","ch":"1002","v":"5.2.1","e":"167644485072395968741377","bc":"110100"}
      X-Host: mall.film-ticket.cinema.list
        }
    }).then(res=>{
      console.log(res,'res')
    }).catch(err=>{
      console.log(err,'err')
    })
  ```
## 2、搜索过滤数据(利用filter过滤函数)

  ```JS
    var arr =['aaa','abc','bcc']
    var newarr = arr.filter(item=>item.includes('b'))
    console.log(newarr)
  ```
   PS:过滤数据对源数据没有影响！

## 十六、setState同步/异步
* 面试题:连续多次调用setState()之后会发生什么？
      setState处于异步更新状态
```JS
this.setState({
  count:this.state.count+1
  },()=>{
    //状态和真实DOM已经更新完了
  console.log(this .state.count)
  })
  ```
* 1、setstate处在同步的逻辑中,异步更新状态,更新真实dom。
* 2、setstate处在异步的逻辑中,同步更新状态,同步更新真实dom。
* 3、setstate接受第二个参数,第二个参数是回调函数,状态和dom更新完后就会被触发。

# 十七、betterScroll(列表平滑滚动效果)
 ```JS
 npm i better-scroll
 import BetterScroll from 'better-scroll'
 new BetterScrall('.divClassName')
 ```
 # 十八、属性(props)实现组件【复用】以及组件之间的【通信】
 ## 1、复用
  ### ①、原始用法:
  ```JS
  this.props.title//可实现获取父组件的title值。
  ```
  ### ②、解构用法:

  ```JS
  let {title,leftShow} = this.props;
  ```

  ```JS
import React, { Component } from 'react'

export default class app extends Component {
  render() {
    //解构用法
    let {title,leftShow} = this.props;
    return (
      <div>{title}</div>
     {leftShow&&<div>leftShow</div>}
    )
  }
}
 ```
## 2、属性验证
 ### ①、验证类属性
  ```JS
  Navbar.propTypes={
    title:验证是不是字符串的方法,
    leftShow:验证是不是bool的方法
  }
  ```
  ### ②、使用小模块进行验证：
  ```JS
    import jnPropsTypes form 'prop-types'
//类属性
  static【放入类函数中】.propTypes={
    title:jnPropsTypes.string,
    leftShow:jnPropsTypes.bool
  }
 //类属性默认值
  static【放入类函数中】.defaultProps={
    leftShow:true
  }
  ```
### 属性和状态
* 相似点:
都是纯js对象,都会触发render更新,都具有确定性 (状态/属性相同，结果相同)
* 不同点:
1.属性能从父组件获取，状态不能
2.属性可以由父组件修改，状态不能
3.属性能在内部设置默认值，状态也可以，设置方式不一样
4.属性不在组件内部修改，状态要在组件内部修改
5.属性能设置子组件初始值，状态不可以
6.属性可以修改子组件的值，状态不可以
PS:尽量多写无状态组件,少写状态组件。(可降低代码的维护难度,增强组件的可复用性)

# 十九、表单的受控与非受控-狭义(广义:是否被传递的props控制)
## 1、非受控组件
 ```JS
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
      //需求：在输入框之默认有一个值,可使用value="zhangjinning"实现,但无法自行输入值(这便是非受控行为)。此时将value改为defaultValue即可更改
    )
  }
}
 ```
## 2、受控组件(推荐使用)
```JS
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
          userName:evt.target.value
         })
        }}/>
        <button onClick={()=>{}}>登录</button>
        <button onClick={()=>{}}>重置</button>
      </div>
    )
  }
  }
 ```
## 3、受控写法

# 二十一、父子组件通信方式-表单域组件(eg:label和input封装在一起的组件)
* 受控版表单域组件
* ref版表单域组件

# 二十二、非父子组件通信方式
  ### 1、状态提升(中间人模式)
  * React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件。
  ### 2、发布订阅模式实现(推荐)
  * 并非react特有。
    js中为了实现两个不同模块通信的一种功能(在订阅用户中调用订阅方法,在发布用户中调用发布方法/先订阅后才能发布)

    ```JS
    //定义发布订阅模式
    var bus = {
      //调度中心
      list: [],
      //订阅方法
      subscribe (callBack) {
        this.list.push(callBack)
      },
      //发布方法
      publish (text) {
        this.list.forEach(callBack => {
          callBack&&callBack(text)
        })
      }
    }
    ```
 ### 3、context方案
  #### 1.创建context对象【官方提供】
  ```JS
      const GlobalContext = React.createContext()
  ```
  #### 2.创建供应商组件
   ```JS
      <GlobalContext.Provider value={{
        phone:'22222222222',
        name:this.state.name,
        changeName:(val)=>{
          this.state.name:val
        }
      }}>
        //render中的div标签
      </GlobalContext.Provider>
  ```
  #### 3.让组件成为消费者(覆盖组件中的div标签并使用</GlobalContext.Consumer>标签,子组件均能访问供应商组件中的value)
   ```JS
      <GlobalContext.Consumer>
        {
        (value)=>{
          return(
            <div onClick={()=>{
              this.value.changeName(info)
            }}>{value.phone}</div>
          )
        }
        }
     </GlobalContext.Consumer>
  ```
# 二十三、React中的插槽(1.为了复用。2.一定程度上减少父子组件通信。)
  * 在父组件中的子组件标签中放置要插入的内容
 ```JS
  <child><div>插槽中的内容</div></child>
  ```
  * 在子组件中使用{this.props.children}占位就可以显示“插槽中的内容”

 ```JS
 <div>{this.props.children}</div>
  ```

# 二十四、生命周期
 ```JS
 //将要把状态加载到DOM中(初始化数据)
 UNSAFE_componentsWillMount(){}
 //已经把状态加载到DOM中(数据请求/BetterScroll)
 componentsDidMount(){}
 //正在加载状态
 render(){}
 //是否进行更新
 shouldComponentsUpdate(oldVal,oldState){
  return false/true
 }
 //DOM更新完成后
 componentsDidUpdate(){
  //DOM更新后的操作
 }
 //子组件接收最新父组件的属性值
 UNSAFE_componentWillReceiveProps(newVal){
   //最先获得父组件传来的属性,可以利用属性进行ajax或者逻辑处理
   //把属性转换成孩子自己的状态
 }
 //销毁阶段(在删除组件之前进行清理操作,比如计时器和事件监听器)
 //事件解绑(组件销毁后,将窗口的绑定事件同时销毁)、定时器清除可以在这个钩子函数中做
 componentWillUnmount(){

 }
 ```

# 二十五、React中性能优化
## 1、shouldComponentUpdate
* 手动优化方案
## 2、PureComponent
* [PureComponent会帮你比较新props 跟旧的props,新的state和老的state (值相等,或者对象含有相同的属性、且属性值相等 ),
决定shouldcomponentUpdate 返回true 或者false,从而决定要不要呼叫 render function。]
!注意:如果你的 state 或 props 永远都会变，那 PureCpmponent 并不会比较快,因为shallowEqual 也需要花时间.

# 二十六、轮播图案例

# 二十七、React Hooks

## 1、使用hooks理由:
### (1).高阶组件为了复用，导致代码层级复杂。
### (2).生命周期的复杂。
### (3).写成functional组件,无状态组件,因为需要状态,又改成了class,成本高。

## 2、useState(保存组件状态)
* 让函数式立马拥有自己的状态

```JS
const [state,setstate] = usestate(initialstate)
  ```

## 3、useEffect(处理副作用)和useLayoutEffect (同步执行副作用)
* Function Component 不存在生命周期,所以不要把Cass Component 的生命周期概念搬过来试图对号入座。
* 不要对 Dependencies 撒谎,如果你明明使用了某个变量,却没有申明在依赖中,你等于向 React 撒了谎,后果就是,当依赖的变量改变时,useEffect 也不会再次执行,eslint会报警告
* Preview页面改造成函数式组件,在路径上从id=1切换到d=2也会自动重新加载,比class组件方便


## 4、useCallback(记忆函数)
* 记住调用的函数,放入缓存中,再次调用时从内存中调用。【防止因为组件重新渲染，导致方法被重新创建，起到缓存作用 只有第二个参数 变化才重新声明一次】
```JS
const changeVlaue=useCallback(
  ()=>{
    函数表达式
  },[]
)
```
## 5、useMemo(记忆组件)
## 6、useRef(保存引用值)
```JS
const useref=useRef()
<input ref={useref}></input>
```
## 7、useContext(实现跨级通信方便)

# 二十八、路由引入
* 一个针对React而设计的路由解决方案、可以友好的帮你解决react components 到URl之间的同步映射关系
* 路由是根据不同的 url 地址展示不同的内容或页面
## 1、路由安装
 ```JS
 npm install react-router-dom@5
 ```
## 2、使用路由
### ①、导入路由库：import {HashRouter} from 'react-router-dom'(会让使用的组件在地址栏中带一个#)
### ②、在render中使用<HashRouter></HashRouter>
### ③、引入Route:import {Route} from 'react-router-dom'
### ④、在<HashRouter></HashRouter>中使用<Route>:<HashRouter><Route path='/films' components={加载的组件}/>
## 3、重定向
### ①、引入Redirect:import { Redirect} from 'react-router-dom'
### ②、使用:在无法找到路由后加载 <Redirect from='/' to='/footer' exact></Redirect>
### ③、解决每次跳转路由后跳回重定向路由的问题：
  * (1.)导入Switch:import {Switch}from 'react-router-dom'。
  * (2.)使用Switch：只渲染匹配到的第一个路由
    ```JS
    <div>
        <HashRouter>
          <Switch>
            <Route path='/header' component={Header}></Route>
            <Route path='/center' component={Center}></Route>
            <Route path='/footer' component={Footer}></Route>
            {/* 模糊匹配 */}
            {/* exact精确定向匹配(即当路径为'/'时才加载重定向) */}
            <Redirect from='/' to='/footer' exact></Redirect>
            <Route component={NotFind}></Route>
          </Switch>
        </HashRouter>
    </div>
    ```
## 4、嵌套路由
## 5、声明式导航/编程式导航
  ①、声明式导航
    (1、)


















# 面试题
## 1、为什么多个 JSX 标签需要被一个父元素包裹？
- JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。
## 2、