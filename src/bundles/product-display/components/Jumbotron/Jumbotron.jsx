import React from 'react'
import {withRouter} from 'react-router-dom'
import './Jumbotron.css'
import {Paths} from "../../../order/routes/order";

class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="content-block jumbotron-container">
                    <h2>{this.props.text.jumbotron}</h2>
                    <button className="order-now-button"
                            onClick={() => this.props.history.push(`${window.location.pathname}/${Paths.configuration}`)}>
                        {this.props.text.orderButton}
                    </button>
                </div>
            </div>
        )
    }

}

export default withRouter(Jumbotron)