import React from 'react'
import cn from 'classnames'
import DeleteIcon from '@material-ui/icons/Delete';

import './style.css'

const Post = ({ data, deleteClick, idx}) => {
    const {
        userId,
        id,
        title,
        body
    } = data
    return (
        <div  className={cn('post')}>
            <div className={cn('post_userId')}>{userId}</div>
            <div className={cn('post_id')}>{id}</div>
            <div className={cn('post_title')}>{title}</div>
            <div className={cn('post_body')}>{body}</div>
            <div className={cn('post_delete')} onClick={() => deleteClick(id, idx)}><DeleteIcon/></div>
        </div>
    )

}

export default Post
