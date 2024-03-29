import React, {Fragment} from "react";
import {TranslationProvider} from "../../../../translations";

const ArticleOverview = (props) => {
    const text = TranslationProvider.translationObject.order.configuration;
    return(
        <Fragment>
            <h4>{text.configuration}</h4>
            <div style={style}>
                <section>{text.valve.title}</section>
                <section>{props.item.valveAmount}-{text.valve.way}</section>
                <section>DN</section>
                <section>{props.item.dn}</section>
                <section>KVS</section>
                <section>{props.item.kvs}</section>
                <section>{text.price}</section>
                <section>CHF {props.item.price}.-</section>
            </div>
        </Fragment>
    )
};

const style = {
    display: 'grid',
    gridTemplateColumns: '25% 75%',
    gridGap: '20px'
};

export default ArticleOverview;