import React, { useState } from "react";
import data from "../data";
import './Vertical.css';

const Vertical = () => {
    const [filter, setFilter] = useState('');

    return (
        <div className="v-container" >
            <div className="card">
                <div className="d-flex mx-3 py-3 align-items-center justify-content-between">
                    <h5 className="heading mb-0 ">Messages</h5>
                    <div className="d-flex align-items-center">
                        <img className="search-icon" src="/assests/search.png " alt="search" width={28} height={28} />
                        <input type="text" placeholder="Search" onChange={e => setFilter(e.target.value)} />
                    </div>
                </div>
                <div className="vertical-scrollable m-2">
                    <div className=" d-flex flex-column ">
                        <div className="search">
                            {data.filter((val) => {
                                if (filter === "") {
                                    return val
                                }
                                else if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                                    return val;
                                }
                            })
                                .map((val) => {
                                    return (
                                        <div className="col-md  m-2 " key={val.id}>
                                            <div className="card-c d-flex  align-items-center" >
                                                <div className="v-image px-1">
                                                    <img className="card-image" src={val.image} alt={val.name} width={55} height={55} />
                                                </div>
                                                <div className="card-body  d-flex flex-column ">
                                                    <h5 className="v-card-title fw-bold mb-0">{val.name}</h5>
                                                    <p className="mb-0">{val.message}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vertical;

