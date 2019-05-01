import React from 'react';
import './SearchBar.css';
import logo from '../../images/text-logo.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchUser(this.state.searchInput);
    this.setState({
      searchInput: ''
    })
  }

  render() {
    return(
      <div className="searchbar">
        <div className="left-logos">
          <i className="fab fa-instagram"></i>
          <img className="logo-img" src={logo} alt="instagram" />
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input 
            className="input-bar"
            value={this.props.value}
            name={this.props.name}
            onChange={this.handleChanges}
            />
        </form>
        <div className="right-icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;