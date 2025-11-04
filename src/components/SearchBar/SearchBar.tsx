import { type FormEvent, useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      toast.error('Please enter your search query.');
      return;
    }
    onSubmit(trimmed);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.link} href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          Powered by TMDB
        </a>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;