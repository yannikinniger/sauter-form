import React from 'react'
import {withRouter} from 'react-router-dom';
import './ProductView.css';

class ProductView extends React.Component {
    render() {
        return (
            <div>


                <header>
                    <h1>Header Content</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="white" points="0,100 100,0 100,100"/>
                    </svg>
                </header>

                <section>
                    <h1>Section Content</h1>
                </section>


            </div>
        );

    }
}

export default withRouter(ProductView);