import React from "react"
import "./Card.css"


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return <tr className="border">
            <td className="m-2 p-2 ff"> <div className="d-flex"><img src={this.state.img} className="rasm" alt="Rasm" /> <div>{this.state.name} <p className="text-secondary">{this.state.name2}</p></div></div></td>
            <td>{this.state.policy}</td>
            <td className="ff2">{this.state.policystatus}</td>
            <td className="ff3">{this.state.destionation}</td>
            <td>{this.state.status}</td>
        </tr>
    }
}
export default Card;
