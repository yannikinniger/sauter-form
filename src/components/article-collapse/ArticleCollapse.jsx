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
                        <ArticleRow description="Aussenfühler EGT301F102"
                                    quantity={this.props.context.getItem().quantity}/>
                        <ArticleRow description="VL-Anlegefühler EGT311F102"
                                    quantity={this.props.context.getItem().quantity}/>
                        <ArticleRow description="Normschema" quantity={this.props.context.getItem().quantity}/>
                    </div>
                </div>
            </div>
        )
    }
}
