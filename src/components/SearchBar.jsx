'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const encodedQuery = encodeURIComponent(query);
      router.push(`/search?q=${encodedQuery}`);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search articles, tips, and guides..."
        value={query}
        onChange={handleInputChange}
        className={styles.input}
        disabled={isLoading}
      />
      <button 
        type="submit" 
        className={styles.button}
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}
