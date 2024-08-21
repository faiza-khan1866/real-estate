import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InvestmentDataContainer extends Component {
    render() {
        return (
            <div className="investment-data-container pd-top-60 pd-bottom-35 ">
                <div className="container">
                    <div>
                        <h3>SUBMIT YOUR INVESTMENT OPPORTUNITY</h3>
                        <p>If you have a property development opportunity that can’t be missed or need a big hitter to help you
                            develop a building to your company’s specifications, get in touch with the right person on our development team. </p>
                        <h5 className="pd-top-35" style={{ fontSize: "21px" }}>Makeen property is keen on investing into land and assets, please fill in the form and we will be in touch soon.</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default InvestmentDataContainer;

