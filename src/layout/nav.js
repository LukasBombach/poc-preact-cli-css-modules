import { h } from 'preact';
import styles from './nav.module.css';

const Nav = () =>
  <nav className={styles.nav}>
    <ul>
      <li>BILDplus</li>
      <li>NEWS</li>
      <li>POLITIK</li>
      <li>GELD</li>
      <li>UNTERHALTUNG</li>
      <li>SPORT</li>
      <li>BUNDESLIGA</li>
      <li>LIFESTYLE</li>
      <li>RATGEBER</li>
      <li>REISE</li>
      <li>AUTO</li>
      <li>DIGITAL</li>
      <li>SPIELE</li>
      <li>REGIO</li>
      <li>VIDEO</li>
    </ul>
  </nav>;

export default Nav;
