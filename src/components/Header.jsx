'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          TechBlog
        </Link>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/tips" className={styles.navLink}>Tips</Link>
          <Link href="/guidance" className={styles.navLink}>Guidance</Link>
          <Link href="/news" className={styles.navLink}>News</Link>
          <Link href="/search" className={styles.navLink}>Search</Link>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}
