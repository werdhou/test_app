import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(data)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        data.map((i, idx) => <Post idx={idx} data={i}/>)
    )
}

export default Table
