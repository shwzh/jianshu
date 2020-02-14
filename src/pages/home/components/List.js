import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class List extends PureComponent {
    render() {
        return (
            <div>
                <div> <Link to='/detail/1'>跳转详情1</Link></div>
                <Link to='/detail/2'>跳转详情2</Link>
                <div><Link to='/detail/3'>跳转详情3</Link></div>
            </div>
        )
    }
}

export default List