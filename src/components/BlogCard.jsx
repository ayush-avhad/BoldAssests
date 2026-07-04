'use client';

import Link from 'next/link';
import { formatDate, calculateReadingTime, getExcerpt } from '../lib/utils';
import styles from '../styles/BlogCard.module.css';

export default function BlogCard({ post }) {
  return (
    <article className={styles.card}>
      {post.image && (
        <div className={styles.imageContainer}>
          <img src={post.image} alt={post.title} className={styles.image} />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.metadata}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.date}>{formatDate(post.date)}</span>
        </div>

        <h2 className={styles.title}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className={styles.excerpt}>
          {getExcerpt(post.content, 150)}
        </p>

        <div className={styles.footer}>
          <span className={styles.readingTime}>
            {calculateReadingTime(post.content)}
          </span>
          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
