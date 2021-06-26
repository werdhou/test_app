import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import cn from 'classnames'

import './style.scss'

const names = [
    'userId',
    "id",
    "title",
    "body"
];


const SelectPosts = ({ handleChange, selectValue }) => {

    const useStyles = makeStyles(() => ({
        formControl: {
            minWidth: 120,
        }
    }));
    const classes = useStyles()

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
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectPosts
