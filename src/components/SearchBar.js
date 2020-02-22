import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    /* using the arrow function instead of binding the change method
    * so the (this) will refer to the class and not this function. */

    handleChange = (event) => {
       this.setState({ searchTerm: event.target.value })
    }

    /* fetch our search term on the state */
    handleSubmit = () => {
        // using destrcuture of ES6 less code repetetion
        const {searchTerm } = this.state;
        const {onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return(
            <Paper elevation={6} style={{ padding: '25px'}}>
              <form onSubmit={this.handleSubmit}>
                  <TextField fullWidth label="Search..." onChange={this.handleChange} />
              </form>
            </Paper>
        )
    }
}

export default SearchBar;