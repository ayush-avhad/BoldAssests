import { format } from 'date-fns';

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function formatDate(dateString) {
  return format(new Date(dateString), 'MMMM d, yyyy');
}

export function formatDateWithTime(dateString) {
  return format(new Date(dateString), 'MMMM d, yyyy - HH:mm');
}

export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

export function getExcerpt(content, length = 150) {
  const text = content.replace(/#+\s/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  return text.substring(0, length).trim() + '...';
}
