import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Nav, Logo, NavItem, NavSearch,
    Addition,Button,SearchWrapper
} from "./style";

import { actionCreators } from './store'

class Header extends Component {
    render() {
      return (
          <HeaderWrapper>
              <Logo />
              <Nav>
                  <NavItem className='left active'>首页</NavItem>
                  <NavItem className='left'>下载app</NavItem>
                  <NavItem className='right login'>登录</NavItem>
                  <NavItem className='right '>Aa</NavItem>
                  <SearchWrapper>
                      <CSSTransition
                          in={this.props.focused}
                          timeout={200}
                          classNames='slide'
                      >
                          <NavSearch
                              className={ this.props.focused ? 'focused' : ''}
                              onFocus={this.props.handleInputFocused}
                              onBlur={this.props.handleInputBlur}
                          ></NavSearch>
                      </CSSTransition>

                      <span className={ this.props.focused ? 'iconfont search focused' : 'iconfont search'}>&#xe6fe;</span>
                  </SearchWrapper>

              </Nav>
              <Addition>
                  <Button className='writer'>
                      <span className='iconfont icon-margin'>&#xe6e5;</span>
                      写文章
                  </Button>
                  <Button className='register'>注册</Button>
              </Addition>
          </HeaderWrapper>
      )
    }

}
const mapState = (state) => ({
    focused: state.header.focused
})
const mapAction = (dispatch) => {
    return {
        handleInputBlur() {
            dispatch(actionCreators.inputBlurAction())

            console.log('失去焦点')
        },
        handleInputFocused() {
            console.log('聚焦')
            dispatch(actionCreators.inputFocusedAction())

        }
    }
}

export default connect(mapState, mapAction)(Header)
