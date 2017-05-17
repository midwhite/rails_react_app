import React     from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './css/app.scss';

class Hello extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <section id="application">
          <div id="container">
            <Switch>
              <Route exact path="/"        component={Home} />
              <Route exact path="/mypage"  component={MyPage} />
              <Route path="*"              component={NoMatch} />
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render(){
    return(
      <div id="home">
        <h1>Home Component</h1>
        <Links />
      </div>
    );
  }
}

class MyPage extends React.Component {
  render(){
    return(
      <div id="mypage">
        <h1>MyPage Component</h1>
        <Links />
      </div>
    );
  }
}

class NoMatch extends React.Component {
  render(){
    return(
      <div id="error404">
        <h1>404 Not Found</h1>
        <Links />
      </div>
    );
  }
}

class Links extends React.Component {
  render(){
    return(
      <div className="links">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/mypage">MyPage</Link></p>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
});