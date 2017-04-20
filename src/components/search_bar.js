import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div>
        <input
         value = {this.state.term} //state by mel ridit value, ne naopak
         onChange={(event) => this.setState({term: event.target.value})}/>
      </div>
    );
  }

}

export default SearchBar;

//zmena state componenty vzdy vyvola rerender
