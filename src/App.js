import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

//Idea for Layout is that is not self-closing because I can wrap other elems in it


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Hi burger</p>
        </Layout>
      </div>
    );
  }
}

export default App;
