
import styles from './Author.module.css';
import Image from 'next/image';




const Author = () => {
    return (
        <div>
            <div className={styles.authorBox}>
              <div>運営者紹介</div>
              <div>
                <Image src="/kpop.jpeg" width={70} height={70} />
              </div>
              <div>
                いっくん
              </div>
          </div>
        </div>
    );
}

export default Author;