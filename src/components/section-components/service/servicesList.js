import React from 'react';
import Professional from "../../section-components/professional";
import SellHome from "../../section-components/sellhome";

function ServicesList(props) {

    return (
        <div>
            <div className="section-title container pt-5">
                <h3 className="title" style={{ textTransform: "uppercase" }}>{props.title}</h3>
            </div>
            {props.serviceData.map((item, index) =>
                index % 2 == 0 ?
                    <Professional data={item}
                        data1={index}
                    />
                    :
                    <SellHome data={item} />
            )}
        </div>
    )
}
export default ServicesList