import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import cn from 'classnames'

import './style.scss'

const names = [
    { userId: 'User Id' },
    { id: "ID" },
    { title: "Title" },
    { body: "Body" }
];


const SelectPosts = ({ handleChange, selectValue }) => {

    const useStyles = makeStyles(() => ({
        formControl: {
            minWidth: 140,
        }
    }));
    const classes = useStyles()

    const getItems = (name ,idx) => {
        const key = Object.keys(name)
        return (
            <MenuItem key={idx} value={key[0]}>
            {name[key[0]]}
        </MenuItem>

        )
}
    return (
        <div className={cn('select')}>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Сортировка по:</InputLabel>
                <Select
                    labelId="select-labe"
                    id="select-names"
                    value={selectValue}
                    onChange={handleChange}
                >
                    {names.map(getItems)}
                </Select>
            </FormControl>
        </div>
    )
}

SelectPosts.propTypes = {
    handleChange: PropTypes.func.isRequired,
    selectValue: PropTypes.string
}

export default SelectPosts
