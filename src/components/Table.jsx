import React from 'react'
import Post from './Post'
import cn from 'classnames'

const Table = ({data, deleteClick}) => {

    return (
        <div className={cn('table')}>
            <div className={cn('table__head')}>
                <div className={cn('post__userId', 'head_column')}>User Id</div>
                <div className={cn('post__id', 'head_column')}>ID</div>
                <div className={cn('post__title', 'head_column')}>Title</div>
                <div className={cn('post__body', 'head_column')}>Body </div>
                <div className={cn('post__delete_title', 'head_column')}>Удалить</div>
            </div>
            {data.map((i, idx) => <Post key={idx} idx={idx} data={i} deleteClick={deleteClick}/>)}
        </div>

    )
}

export default Table
