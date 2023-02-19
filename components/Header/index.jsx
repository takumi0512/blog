

import styles from './Header.module.css'
import Link from 'next/link';



export default function Header() {
    return (
        <div>

            <div className={styles.header}>
                <Link href='/'>
                    <h1>SITENAME</h1>
                </Link>

                <div className={styles.headerItemConten}>
                    <Link href='/product'>
                        <div className={styles.headerItem}>
                            product
                        </div>
                    </Link>
                    <Link href='/blog'>
                        <div className={styles.headerItem}>
                            blog
                        </div>
                    </Link>
                </div>
            </div>


            
        </div>
    );
}