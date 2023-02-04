import { toast } from 'react-toastify';
import { useState } from "react";
import PropTypes from 'prop-types';

import { FormStyle, Input, Button } from "./Form.styled";


const Form = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handlChange = (evt) => {
    setQuery(evt.target.value)
  }

  const handlSubmit = (evt) => {
    evt.preventDefault()

    if (query.trim() === '') {
      toast.warn("Please, input something!")
      return
    }

      onSubmit(query.trim())
      setQuery('')
  }
   
  return (
    <FormStyle onSubmit={handlSubmit}>
        <Input
          className="SearchForm-input"
          type="text"
          value={query}
          onChange={handlChange}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <Button type="submit">
            Search
        </Button>
      </FormStyle>
      
  );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;