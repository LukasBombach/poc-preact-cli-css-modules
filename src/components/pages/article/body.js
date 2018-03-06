import { h, Component } from 'preact';
import appendHtml from 'appendhtml';
import Paragraph from "./content/paragraph";
import styles from './body.module.scss';

export default class Body extends Component {

  static contentMap = {
    unstyled: Paragraph,
    default: Paragraph,
  };

  static defaultProps = {
    article: {},
  };

  static getBlockTag(block) {
    return Body.contentMap[block.type] || Body.contentMap.default;
  }

  static renderBlock(block, key) {
    const BlockTag = Body.getBlockTag(block);
    return <BlockTag key={key} block={block} />
  }

  getBody() {
    return this.props.article.body || [];
  }

  async componentDidMount() {
    const response = await fetch('https://www.welt.de/oembed?url=https://twitter.com/BILD/status/965993478273622016');
    const json = await response.json();
    await appendHtml(json.html, this.tweetContainer);
  }

  render() {
    return (
      <div className={styles.body}>
        { this.getBody().map((block, key) => Body.renderBlock(block, key)) }
        <div ref={container => this.tweetContainer = container} />
      </div>
    );
  }

}
