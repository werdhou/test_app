import React, { useState, useEffect } from "react"
import Table from './Table'
import SelectPosts from "./Select"
import cn from 'classnames'
import { searchData } from "../utils/searchData"
import { useDispatch, useSelector } from "react-redux"
import { fetchingData, onDeleteClick, onSortClick } from "../redux/actions"

import { TextField, CircularProgress, Button } from '@material-ui/core'

import './style.scss'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [postsCount, setPostsCount] = useState(10)
  const [selectValue, setSelectValue] = useState('')

  const dispatch = useDispatch()
  const { data, loading } = useSelector(({ data }) => data)

  useEffect(() => {
    dispatch(fetchingData())

  }, [dispatch])


  const lastPostIdx = + postsCount
  const visiblePosts = searchData(data, inputValue).slice(0, lastPostIdx)

  const loadMore = () => setPostsCount(postsCount + 10)

  const deleteClick = (id, idx) => window.confirm('Удалить элемент?') && dispatch(onDeleteClick(data, idx, id))

  const handleChange = (event) => {
    setSelectValue(event.target.value)
    dispatch(onSortClick(data, event.target.value))
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
          <SelectPosts handleChange={handleChange} selectValue={selectValue} />
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
