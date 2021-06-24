import React from 'react'
import cn from 'classnames'

import './style.css'

const Post = (props) => {
    const {data, idx} = props
    debugger
    return (
        <div key={idx} className={cn('post')}>
            {data.title}
        </div>
    )
}

export default Post
