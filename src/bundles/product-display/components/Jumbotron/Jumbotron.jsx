import React from 'react'
import {withRouter} from 'react-router-dom'
import './Jumbotron.css'
import {Paths} from "../../../order/routes/order";

class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="content-block jumbotron-container">
                    <h2>Bereits ab 570.-</h2>
                    <button className="order-now-button"
                            onClick={() => this.props.history.push(Paths.configuration)}>
                        Zur Bestellung
                    </button>
                </div>
            </div>
        )
    }

}

export default withRouter(Jumbotron)