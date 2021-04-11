import React from 'react'

function Issues({title,status,number}) {
    return (
        <div className="issues" >
            <div className="issue__title">
                {title}
            </div>
            <div className="issue__status">
                Status:{status}
            </div>
            # {number}
        </div>
    )
}

export default Issues
