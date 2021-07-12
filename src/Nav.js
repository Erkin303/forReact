import React from "react"
import "./Nav.css"

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return <div className=" d-flex p-2">
            <a href="#" className="text-light text-decoration-none" >{this.state.navb}</a>

        </div>
    }
}
export default Nav;
