import styled  from "styled-components";
import logoPic from '../static/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border:1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    left:0;
    left:0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
    
`
export const Nav = styled.div`
    width: 960px;
    height: 56px;
    margin: 0 auto;
    

`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.login {
        margin-right: 50px;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    
    .search {
        text-align: center;
        line-height: 35px;
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        &.focused {
            background-color: #ccc;
        }
        &.slide-enter {
            transition: all .2s easy-out;
        }
        &.slider-enter-active {
            width: 240px;
        }
        &.slider-out {
            transition: all .2s easy-out;
        }
        &.slide-out-active {
            width: 160px;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    line-height: 38px;
    border-radius: 19px;
    border: none;
    font-size: 14px;
    outline: none;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    box-sizing: border-box;
    background-color: #eee;
    margin-left: 20px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ea6f5a; 
    float: right;
    margin-top: 9px;
    text-align: center;
    margin-right: 20px;
    color: #ea6f5a;
    cursor: pointer;
    &.writer {
        background-color: #ea6f5a;
        color: #fff;
        .icon-margin {
            margin-right: 5px;
        }
    }
    
`




