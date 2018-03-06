import { h, Component } from 'preact';
import {rendersPlatforms} from "../../../platforms/index";
import styles from './paragraph.module.scss';

@rendersPlatforms
export default class Paragraph extends Component {

  renderWeb() {
    return <p className={styles.paragraph}>{this.props.block.text}</p>;
  }

  renderAmp() {
    return <p>{this.props.block.text}</p>;
  }

}
