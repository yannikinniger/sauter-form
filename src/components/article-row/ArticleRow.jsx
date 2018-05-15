import React from 'react'
import './ArticleRow.css'

export default function ArticleRow(props) {
    return (
        <div className="price-row">
            <label className="article">
                <span className="quantityDisplay">{props.quantity}x</span>
                {props.description}
            </label>
        </div>
    )
}