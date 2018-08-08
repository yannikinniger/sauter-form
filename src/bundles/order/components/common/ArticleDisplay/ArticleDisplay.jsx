import React from 'react'
import './ArticleDisplay.css'
import {Link} from 'react-router-dom'
import {TranslationProvider} from "../../../../translations";

export default class ArticleDisplay extends React.Component {

    text = TranslationProvider.translationObject.productDisplay;

    render() {
        return (
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox"/>
                <label htmlFor="collapsible"
                       className="lbl-toggle">{this.props.item.quantity}x {this.text.regulatorKit}</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <ArticleRow description={this.props.item.articleNumber}
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description={`${this.text.descriptionRegulator} EQJW126F001`}
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description={`${this.text.descriptionVL} EGT311F102`}
                                    quantity={this.props.item.quantity}/>
                        <ArticleRow description={`${this.text.descriptionAT} EGT301F102`}
                                    quantity={this.props.item.quantity}/>
                        <div className="price-row">
                            <label className="article">
                                <span className="quantityDisplay">{this.props.item.quantity}x</span>
                                Normschema <Link target="_blank" to="/normschema_EQJW126.pdf">{this.text.link}</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function ArticleRow(props) {
    return (
        <div className="price-row">
            <label className="article">
                <span className="quantityDisplay">{props.quantity}x</span>
                {props.description}
            </label>
        </div>
    );
}
