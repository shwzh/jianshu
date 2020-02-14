import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img className='topic-img' src="" alt=""/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic