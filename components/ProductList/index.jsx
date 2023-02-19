
import styles from './ProductList.module.css';
import Image from 'next/image';
import Link from 'next/link';


const ProductList = () => {
    return (
        <div>


            <div className={styles.productBox}>

                <div className={styles.productContent}>
                    <Link href="https://nogizakaquiz.com">
                        <Image src="/nogicheck.jpeg" width={100} height={100} className={styles.image}/>
                    </Link>
                </div>  
                <div className={styles.productContent}>
                    <Link href="https://nogizakaquiz.com">
                        <Image src="/dasen.png" width={100} height={100} className={styles.image}/>
                    </Link>   
                </div> 
                <div className={styles.productContent}>
                    <Link href="https://nogizakaquiz.com">
                        <Image src="/nogizaka.jpeg" width={100} height={100} className={styles.image}/>
                    </Link>     
                </div> 
                <div className={styles.productContent}>
                    <Link href="https://kpop-sort.com">
                        <Image src="/kpop.jpeg" width={100} height={100} className={styles.image}/>
                    </Link> 
                </div>
                <div className={styles.productContent}>
                    <Link href="https://kpop-sort.com">
                        <Image src="/mleagu.png" width={100} height={100} className={styles.image}/>
                    </Link> 
                </div>             

          </div>



        </div>
    );
}

export default ProductList;