/*
    文件是针对react学习过程的备注
    author: 55
 */

/**
 * PureComponent 是为了只有与自己相关数据改变时才会去重新渲染这个组件，
 * 注意：
 *      PureComponent 需要与 immutable.js 同时使用 否则可能会出现很多渲染上的坑
 */


/**
 * 路由相关
 * import { Link } from 'react-route-dom'
 *
 *
 * 第一种
 * <Route path='/detail/:id'  ></Route>
 *
 * <Link to='/detail/333'></Link>
 *
 *  参数传递
 *      <Link to='/detail/333'></Link>
 *
 *  参数接受
 *      componentDidMount(){
 *          let params = this.props.match.params.id
 *      }
 *
 * 第二种 通过 ？
 *  <Route path='/detail' ></Route>
 *
 * 参数传递
 *      <Link to='/detail?id=3'></Link>
 *
 *  参数接受
 *      componentDidMount(){
 *          let params = this.props.match.params // 能拿到参数 需要自己处理？号
 *      }
 *
 */


/**
 * react-loadable  解决的问题是 避免首页加载其他页面中的代码
 *
 * yarn add react-loadable
 *
 * 需要新建一个loadable.js
 *
 *  接受参数的时候可能会出现问题，需要引入一个 withRouter
 *
 *  import { withRouter } from 'react-router-dom'
 *
 *  在抛出时用到
 *  export default connect(mapState, mapDispatch)(withRoute(detail))
 *
 */



