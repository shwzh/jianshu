import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Nav, Logo, NavItem, NavSearch,
    Addition,Button,SearchWrapper
} from "./style";
import { HANDLE_INPUT_BLUR, HANDLE_INPUT_FOCUSED} from "./store/actionType";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        };
        this.handleInputFocused = this.handleInputFocused.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
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
                          in={this.state.focused}
                          timeout={200}
                          classNames='slide'
                      >
                          <NavSearch
                              className={ this.state.focused ? 'focused' : ''}
                              onFocus={this.handleInputFocused}
                              onBlur={this.handleInputBlur}
                          ></NavSearch>
                      </CSSTransition>

                      <span className={ this.state.focused ? 'iconfont search focused' : 'iconfont search'}>&#xe6fe;</span>
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
    focused: state.focused
})
const mapAction = (dispatch) => {
    return {
        handleInputBlur() {
            dispatch()
        },
        handleInputFocused() {
            this.setState({
                focused: true
            })
        }
    }
}

export default connect(mapState, mapAction)(Header)
