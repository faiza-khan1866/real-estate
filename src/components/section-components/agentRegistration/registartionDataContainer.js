import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegistartionDataContainer extends Component {
    render() {
        return (
            <div className="investment-data-container pd-top-60 pd-bottom-35 ">
                <div className="container">
                    <div>
                        <h3>
                            {this.props?.intro?.title}
                            {/* REGISTER AS AN AGENT */}
                        </h3>
                        <p className='generalDiv'
                            dangerouslySetInnerHTML={{
                                __html: this.props?.intro?.subtitle
                            }}
                        >

                            {/* Makeen Properties has an ever-growing portfolio of properties in commercial, residential and industrial:
                            kindly fill up the details below to receive regular updates on property availability.  */}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistartionDataContainer;

