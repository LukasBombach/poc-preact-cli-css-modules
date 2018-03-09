import {h, Component} from 'preact';
import {Router} from 'preact-router';
import Stage from './pages/stage';
import Article from './pages/article';

if (module.hot) {
  require('preact/debug');
}

export default class App extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Stage path="/"/>
          <Article path="/article/:id/:platform?"/>
        </Router>
      </div>
    );
  }
}