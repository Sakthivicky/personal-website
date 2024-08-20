import React from 'react'

const Tabbutton = ({ active, selectTab, children }) => {
    const buttonclass = active ? 'text-white  border-b border-purple' : 'text-[#ADB7BE]'


    return (
        <div>
            <button onClick={selectTab} >
                <p className={`mr-3  font-semibold  text-gray-400 hover:text-white ${buttonclass}`}>
                    {children}
                </p>
            </button>
        </div>
    )
}

export default Tabbutton
