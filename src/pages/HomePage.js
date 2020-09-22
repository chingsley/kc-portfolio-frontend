import React from 'react';
import Logo from '../components/Logo';
import PageLoader from '../components/PageLoader';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>This is home page</h1>
        <Logo />
        <PageLoader />
      </div>
    );
  }
}

export default HomePage;
