import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem, TestBackground } from "../style";

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img className='topic-img' src="https://upload.jianshu.io/users/upload_avatars/13253432/8243a8c9-30a9-4814-a66f-691620e33f32.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt=""/>
                    社会热点
                </TopicItem>
                <TestBackground imgUrl="https://upload.jianshu.io/users/upload_avatars/16775500/74e0addd-ce55-4040-9481-2926240e99a0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp"></TestBackground>
            </TopicWrapper>
        )
    }
}

export default Topic