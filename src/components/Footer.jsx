'use client';

import Link from 'next/link';
import { siteConfig } from '../config/site.config';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>About {siteConfig.title}</h3>
            <p>{siteConfig.description}</p>
          </div>

          <div className={styles.section}>
            <h3>Categories</h3>
            <ul>
              {siteConfig.categories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} {siteConfig.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
