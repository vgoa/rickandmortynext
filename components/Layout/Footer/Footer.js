import React from "react";

import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a
        href="http://twitter.com/elvicortiz"
        target="_blank"
        rel="noopener noreferrer"
      >
        @elVicOrtiz
      </a>
    </footer>
  );
}

export default Footer;
