import React from 'react';
import logo from '../../images/text-logo.png';
import styled from 'styled-components'

const SearchDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  border-bottom: 1px solid black;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  width: 20%;
`;

const Logo = styled.div`
  border-right: 1px solid black;
  padding-right: 10px;
`;

const LogoImg = styled.img`
  width: 150px;
  height: auto;
`;

const InputBar = styled.input`
  padding: 5px
  width: 200px;
  margin-top: 20px;
`;

const Icons = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
  align-self: center;
  width: 20%;
  margin-right: 1%;
`;

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
      <SearchDiv>
        <Logos>
          <Logo className="fab fa-instagram fa-5x" />
          <LogoImg src={logo} alt="instagram" />
        </Logos>
        <form onSubmit={this.handleSubmit}>
          <InputBar
            value={this.props.value}
            name={this.props.name}
            onChange={this.handleChanges}
            placeholder="Search username..."
            />
        </form>
        <Icons>
          <i className="far fa-compass fa-2x"></i>
          <i className="far fa-heart fa-2x"></i>
          <i className="far fa-user fa-2x"></i>
        </Icons>
      </SearchDiv>
    );
  }
}

export default SearchBar;