import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    return (
        <button onClick={()=>console.log("I was pressed")} className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </button>
    )
}

export default StatusCard
