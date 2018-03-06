import { h, Component } from 'preact';
import { getArticle } from '../../__mocks';
import Layout from "../../layout";
import Head from './head';
import Body from './body';
// import { getArticle } from 'data-api';

export default class Article extends Component {

  static defaultPlatform = 'web';

  state = {
    article: {},
  };

  async componentDidMount() {
    const article = await getArticle(this.props.match.params.id);
    this.setState({ article });
  }

  getChildContext() {
    const platform = this.props.match.params.platform || Article.defaultPlatform;
    return { platform };
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
