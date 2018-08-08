import React from "react";
import {TranslationProvider} from "../../../../translations";

const ArticleOverview = (props) => {
    const text = TranslationProvider.translationObject.order.configuration;
    console.log(text);
    return(
        <div style={style}>
            <section>{text.valve.title}</section>
            <section>{props.item.valveAmount}-{text.valve.way}</section>
            <section>DN</section>
            <section>{props.item.dn}</section>
            <section>KVS</section>
            <section>{props.item.kvs}</section>
            <section>{text.price}</section>
            <section>{props.item.price}.-</section>
        </div>
    )
};

const style = {
    display: 'grid',
    gridTemplateColumns: '25% 75%',
    gridGap: '20px'
};

export default ArticleOverview;