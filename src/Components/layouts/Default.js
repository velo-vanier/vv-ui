import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  innerContainer: {
    flex: '1 1 auto'
  }
}

const DefaultLayout = props => {
  return (
    <div style={styles.container}>
      <Navigation />
      <div className="container py-4" style={styles.innerContainer}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout