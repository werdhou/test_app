import React, { useState, useEffect } from "react"
import axios from "axios"
import Table from './components/Table'
import { TextField, CircularProgress, Button } from '@material-ui/core'
import cn from 'classnames'

import './index.css'

function App() {
  const [data, setData] = useState([])
  const [deleteFlag, setDeleteFlag] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [postsCount, setPostsCount] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(data)
        setLoading(false)
      }
      catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
  }, [deleteFlag])


  const searchData = (arr) => {
    const currentData = arr.filter(val => {
      // eslint-disable-next-line eqeqeq
      if (inputValue == "") {
        return val
      }
      else if (val.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return val
      }
      else if (val.body.toLowerCase().includes(inputValue.toLowerCase())) {
        return val
      }
      else if (String(val.id).includes(inputValue)) {
        return val
      }
      else if (String(val.userId).includes(inputValue)) {
        return val
      }
    })
    return currentData
  }
  const lastPostIdx = + postsCount
  const visiblePosts = searchData(data).slice(0, lastPostIdx)

  const loadMore = () => {
    setPostsCount(postsCount + 10)
  }

  const deleteClick = async (id, idx) => {
    let conf = window.confirm('Удалить элемент?')
    if (conf) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      data.splice(idx, 1)
      setDeleteFlag(idx+id)
      setData(data)
    }
  }
  
  if (!loading) {
    return (
      <div className={cn('app')}>
        <div className={cn('input')}>
          <TextField
            color='primary'
            label="Поиск"
            placeholder="Начните поиск"
            margin="normal"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <Table data={visiblePosts} deleteClick={deleteClick} />
        <div className={cn('button')}>
          <Button
            onClick={loadMore}
            variant="contained"
            disabled={postsCount > searchData(data).length}
            color="primary"> Загрузить еще </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={cn('loading')}>
        <CircularProgress
          size={100}
        />
      </div>
    )
  }

}

export default App;
