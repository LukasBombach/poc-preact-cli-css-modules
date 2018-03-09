import { h, Component } from 'preact';
import Layout from "../../layout";
import Teaser from "./teaser";
import { getStage } from '../../__mocks';
// import { getStage } from '../../../data-api';

export default class Stage extends Component {

  static defaultProps = {
    platform: 'Web',
  };

  state = {
    articles: [],
  };

  async componentDidMount() {
    const ids = ['5a93e0723195eb0001099411', '5a93e0723195eb0001099411', '5a93e0723195eb0001099411'];
    const articles = await getStage(ids);
    this.setState({ articles });
  }

  getChildContext() {
    return { platform: this.props.platform };
  }

  render() {
    return (
      <Layout>
        {this.state.articles.map((article, key) => <Teaser key={key} article={article} />)}
      </Layout>
    );
  }

};
