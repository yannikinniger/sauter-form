import React from 'react'
import {TranslationProvider} from "../../../../translations";
import './ButtonRow.css'

export const ButtonRow = props => {
    const text = TranslationProvider.translationObject.order.buttons;
    return (
        <div className="twin-button-row">
            <button onClick={props.backCallback}>{text.back}</button>
            <button onClick={props.proceedCallback}>{text.proceed}</button>
        </div>
    )
}