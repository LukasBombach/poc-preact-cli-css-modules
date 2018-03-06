import { h, Component } from 'preact';
import {rendersPlatforms} from "../../platforms/index";
import styles from './head.module.css';

@rendersPlatforms
export default class Head extends Component {

  renderWeb() {
    return (
      <div>
        <h1 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{this.props.article.title}</h1>
        { this.props.article.teaserImg ? <img src={this.props.article.teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
        { this.props.article.teaserText ? <p className={styles.teaser}>{this.props.article.teaserText}</p> : null }
      </div>
    );
  }

  renderAmp() {
    return (
      <div>
        <h1 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{this.props.article.title}</h1>
        { this.props.article.teaserImg ? <amp-img src={this.props.article.teaserImg} layout="responsive" /> : null }
        { this.props.article.teaserText ? <p className={styles.teaser}>{this.props.article.teaserText}</p> : null }
      </div>
    );
  }

}