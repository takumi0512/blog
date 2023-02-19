
import Link from 'next/link';
import styles from './Pagination.module.css'

export const Pagination = ({ totalCount ,visible}) => {
  const PER_PAGE = 2;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  //ページネーションを表示しなくてもいい場合
  if (!visible) return null;

  return (
    <div className={styles.numbers}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <div key={index} className={styles.number}>
          <Link href={`/page/${number}`}>{number}</Link>
        </div>
      ))}
    </div>
  );
};