

import styles from './Footer.module.css'
import Link from 'next/link';



export default function Footer() {
    return (
        <div>

            <div className={styles.footer}>
                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSeKzteTjJU9Tew7RGvM_WqpPPFbH14JaLVZnMZTPdDxzrLkBg/viewform?usp=sf_link'>
                    <div className={styles.ItemLeft}>お問い合わせ</div>
                </Link>

                <div className={styles.headerItemConten}>
                    <Link href='/privacy1'>
                        <div className={styles.headerItem}>
                            プライバシーポリシー
                        </div>
                    </Link>
                    <Link href='/privacy2'>
                        <div className={styles.headerItem}>
                            免責事項　
                        </div>
                    </Link>
                </div>
            </div>


            
        </div>
    );
}