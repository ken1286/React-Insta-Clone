import React from 'react';

const withAuthenticate = ArgComponent => 
  class extends React.Component {
    render() {
      return(
        <ArgComponent />
      )
    }
  }

  export default withAuthenticate;