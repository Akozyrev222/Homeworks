import React from 'react'
import './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div >
            <div className='messageClass'>sdfsdfsdf</div>

        </div>
    )
}

export default Message
