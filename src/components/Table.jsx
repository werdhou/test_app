import React from 'react'
import Post from './Post'
import cn from 'classnames'

const Table = ({data, deleteClick}) => {

    return (
        <div className={cn('table')}>
            <div className={cn('table_head')}>
                <div className={cn('post_userId', 'head_userId')}>User Id</div>
                <div className={cn('post_id', 'head_id')}>ID</div>
                <div className={cn('post_title', 'head_title')}>Title</div>
                <div className={cn('post_body', 'head_body')}>Body </div>
                <div className={cn('post_delete', 'head_delete')}>Удалить</div>
            </div>
            {data.map((i, idx) => <Post key={idx} idx={idx} data={i} deleteClick={deleteClick}/>)}
        </div>

    )
}

export default Table
