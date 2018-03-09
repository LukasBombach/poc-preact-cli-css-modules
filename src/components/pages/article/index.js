import { h, Component } from 'preact';
import Layout from "../../layout";
import Head from './head';
import Body from './body';
import { getArticle } from '../../__mocks';
// import { getArticle } from '../../../data-api';

export default class Article extends Component {

  static defaultProps = {
    platform: 'Web',
  };

  state = {
    article: {},
  };

  async componentDidMount() {
    const article = await getArticle(this.props.id);
    this.setState({ article });
  }

  getChildContext() {
    return { platform: this.props.platform };
  }

  render() {
    return (
      <Layout>
        <Head article={this.state.article} />
        <Body article={this.state.article} />
      </Layout>
    );
  }

};
