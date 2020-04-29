import React from 'react';
import './Event-card.css';
import imga from './../../media/meeting.jpg';

const EventCard = (props) => {
    
    return(
        <div className="card mb-3 card-ev">
            <div className="row no-gutters">
                <div className="col-md-4 shadow">
                    <img src={imga} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title} ({props.date})</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.form_link}>
                            <button className="btn bg-cus">Attend</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;