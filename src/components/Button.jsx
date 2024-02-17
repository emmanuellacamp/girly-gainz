import React from 'react'

export default function Button(props) {
        const {text, func} = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-pink-800 border-pink-500 border-solid pinkShadow duration-200'>
        <p>{text}</p>
    </button>
    )
}