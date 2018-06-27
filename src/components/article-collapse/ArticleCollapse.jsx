import React from 'react'
import './ArticleCollapse.css'
import ArticleRow from '../article-row/ArticleRow'

export default class ArticleCollapse extends React.Component {

    render() {
        return (
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox"/>
                <label htmlFor="collapsible"
                       className="lbl-toggle">{this.props.context.getItem().quantity}x Heizungsregler-Set</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <ArticleRow description={this.props.context.state.item.articleNumber}
                                    quantity={this.props.context.getItem().quantity}/>
                        <ArticleRow description="Heizungsregler EQJW126F001"
                                    quantity={this.props.context.getItem().quantity}/>
                        <ArticleRow description="Aussentemperatur-Fühler EGT301F102"
                                    quantity={this.props.context.getItem().quantity}/>
                        <ArticleRow description="Vorlauftemperatur-Fühler EGT311F102"
                                    quantity={this.props.context.getItem().quantity}/>
                        <div className="price-row">
                            <label className="article">
                                <span className="quantityDisplay">{this.props.context.getItem().quantity}x</span>
                                Normschema <a href="https://hlk-components.ch/files/normschema_EQJW126.pdf" target="_blank" rel="noopener noreferrer">Link</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
