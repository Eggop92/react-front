import React from 'react'

interface BorderBoxProps {
    title: string,
    children: React.ReactNode
}
const BorderBox = ({ title, children }: BorderBoxProps) => {
    return (
        <div className="borderParent">
            <div className="borderContainer">
                <label className="borderText"> {title} </label>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BorderBox