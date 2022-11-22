import React from 'react'
import Custom from '../Components/Custom'
import custom from "../custom"

export default function Pie() {
    const pies = custom.map(pie => {
        return (
            <Custom
                key={pie.id}
                pie={pie}

            />
        )
    })
    return (
        <div className='pie--list'>
            {pies}
        </div>
    )
}

