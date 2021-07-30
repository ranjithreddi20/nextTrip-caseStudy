import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: 300,
  }
}));

const Dropdown = props => {
  const classes = useStyles();
  const { options, type, update, selected } = props
  const initialValue = 'init'
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          className={classes.select}
          labelId="demo-simple-select-outlined-label"
          data-testid="dropdown-select"
          onChange={e => update(e.target.value)} 
          value={selected ? selected : initialValue}
        >
          <MenuItem disabled value={initialValue}>
            <em>Select a {type}</em>
          </MenuItem>
          {options ? options.map(option => (
            <MenuItem key={option.Value} value={option.Value}>
              {option.Text}
            </MenuItem>
          )): ''}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown