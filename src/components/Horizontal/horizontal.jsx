import React from "react";
import data from "../data";
import Vertical from "../Vertical/Vertical";
import './horizontal.css';

const Horizontal = () => {
    return (
        <div className="h-container " >
            <div className="ro">
                <h5 className="heading mx-3 mb-0 py-2">New Connections</h5>
                <div className="horizontal-scrollable m-2">
                    <div className="  d-flex ">
                        {data.map((item) => {
                            return (
                                <div className="col-md-3  m-2" key={item.id}>
                                    <div className="card-c d-flex flex-column align-items-center" >
                                        <div className="image">
                                            <img className="card-image" src={item.image} alt={item.name} width={55} height={55} />
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <p className="h-card-title text-center mb-0">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
            <Vertical />
        </div>
    );
}

export default Horizontal;

