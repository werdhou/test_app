import React, { useState, useEffect } from "react"
import axios from "axios"
import Table from './Table'
import cn from 'classnames'
import { searchData } from "../utils/searchData"

import { TextField, CircularProgress, Button } from '@material-ui/core'

import './style.scss'
import SelectPosts from "./Select"

function App() {
  const [data, setData] = useState([])
  const [deleteFlag, setDeleteFlag] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [postsCount, setPostsCount] = useState(10)
  const [selectValue, setSelectValue] = useState(' ')


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(data)
      }
      catch (error) {
        console.error(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
  }, [deleteFlag])

  const lastPostIdx = + postsCount
  const visiblePosts = searchData(data, inputValue).slice(0, lastPostIdx)

  const loadMore = () => setPostsCount(postsCount + 10)

  const deleteClick = async (id, idx) => {
    let conf = window.confirm('Удалить элемент?')
    if (conf) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      data.splice(idx, 1)
      setDeleteFlag(idx+id)
      setData(data)
    }
  }

  const sortFunc = (value) => {
    const newData = [...data]
    newData.sort((a, b) => a[value] > b[value] ? 1 : -1)
    setData(newData)
  }

  const handleChange = (event) => {
    setSelectValue(event.target.value)
    sortFunc(event.target.value)
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
          <SelectPosts handleChange={handleChange} selectValue={selectValue}/>
        </div>
        <Table data={visiblePosts} deleteClick={deleteClick} />
        <div className={cn('button')}>
          <Button
            onClick={loadMore}
            variant="contained"
            disabled={postsCount > searchData(data, inputValue).length}
            color="primary"> Показать больше </Button>
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
