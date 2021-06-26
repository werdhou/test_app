import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete'

import './style.scss'

const Post = ({ data, deleteClick, idx}) => {

    const {
        userId,
        id,
        title,
        body
    } = data
    return (
        <div  className={cn('post')}>
            <div className={cn('post__userId')}>{userId}</div>
            <div className={cn('post__id')}>{id}</div>
            <div className={cn('post__title')}>{title}</div>
            <div className={cn('post__body')}>{body}</div>
            <div className={cn('post__delete')} onClick={() => deleteClick(id, idx)}><DeleteIcon/></div>
        </div>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }).isRequired,
    idx: PropTypes.number.isRequired,
    deleteClick: PropTypes.func.isRequired
}

export default Post
