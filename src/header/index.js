import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Nav, Logo, NavItem, NavSearch,
    Addition,Button,
    SearchWrapper,SearchInfo,SearchInfoTitle,
    SearchInfoSwitch, SearchInfoItem, SearchList
} from "./style";

import { actionCreators } from './store'
import { Link } from "react-router-dom";


class Header extends PureComponent {
    getListItem(){
        const { focused, list } = this.props;
        if(focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜多
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchList>
                        {
                            list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused, handleInputFocused, handleInputBlur } = this.props;
        return (
          <HeaderWrapper>
              <Link to='/'>
                  <Logo />
              </Link>
              <Nav>
                  <NavItem className='left active'>首页</NavItem>
                  <NavItem className='left'>下载app</NavItem>
                  <NavItem className='right login'>登录</NavItem>
                  <NavItem className='right '>Aa</NavItem>
                  <SearchWrapper>
                      <CSSTransition
                          in={focused}
                          timeout={200}
                          classNames='slide'
                      >
                          <NavSearch
                              className={ focused ? 'focused' : ''}
                              onFocus={handleInputFocused}
                              onBlur={handleInputBlur}
                          ></NavSearch>
                      </CSSTransition>

                      <span className={ focused ? 'iconfont search focused' : 'iconfont search'}>&#xe6fe;</span>
                      { this.getListItem()}
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
    };

}
const mapState = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
})
const mapAction = (dispatch) => {
    return {
        handleInputBlur() {
            dispatch(actionCreators.inputBlurAction())

            console.log('失去焦点')
        },
        handleInputFocused() {
            console.log('聚焦')
            dispatch(actionCreators.getListData()); // 这里为什么用dispatch 自己找了好久的坑
            dispatch(actionCreators.inputFocusedAction())


        }
    }
}

export default connect(mapState, mapAction)(Header)
