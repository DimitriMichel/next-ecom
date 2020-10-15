import React from 'react';
import styles from '../styles/Header.module.css';
import { RiShoppingCart2Fill, RiSearchLine,RiHeartLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Seine.</div>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <RiSearchLine size={35} />
        </li>
        <li className={styles.item}>
          <RiHeartLine size={35} />
        </li>
        <li className={styles.cart}>
          <RiShoppingCart2Fill size={35} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
