import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top:30px;
    .banner-img {
        width: 625px;
        height: 270px;
        
    }
`
export const HomeRight = styled.div`
    width: 240px;
    float: right
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px;
    margin-left: -18px;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    margin-left: 18px;
    line-height: 32px;
    background-color: #f7f7f7;
    padding-right: 10px;   
    font-size: 14px;
    color: #000;
    border:1px solid #dcdcdc;
    border-radius: 5px;
    .topic-img {
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }

`

export const TestBackground = styled.div`
    margin-top: 100px;
    width: 50px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;

`
