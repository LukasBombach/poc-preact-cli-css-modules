import { h } from 'preact';
import styles from './head.module.css';
import logo from '../assets/images/layout/logo.png';

const Head = () =>
  <header className={styles.header}>
    <a href="/"><img src={logo} alt="Bild Logo"/></a>
  </header>;

export default Head
