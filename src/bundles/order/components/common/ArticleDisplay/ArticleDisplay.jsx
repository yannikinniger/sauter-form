import React from 'react'
import './ArticleDisplay.css'
import {Link} from 'react-router-dom'

export default class ArticleDisplay extends React.Component {

    render() {
        return (
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox"/>
                <label htmlFor="collapsible"
                       className="lbl-toggle">{this.props.item.quantity}x Heizungsregler-Set</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <ArticleRow description={this.props.item.articleNumber}
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description="Heizungsregler EQJW126F001"
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description="Aussentemperatur-Fühler EGT301F102"
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description="Vorlauftemperatur-Fühler EGT311F102"
                                    quantity={this.props.item.quantity}/>
                        <div className="price-row">
                            <label className="article">
                                <span className="quantityDisplay">{this.props.item.quantity}x</span>
                                Normschema <Link target="_blank" to="/normschema_EQJW126.pdf">Link</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function ArticleRow(props) {
    return(
            <div className="price-row">
                <label className="article">
                    <span className="quantityDisplay">{props.quantity}x</span>
                    {props.description}
                </label>
            </div>
        );
}
