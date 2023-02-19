import styles from './BlogBox.module.css'
import Link from 'next/link';
import Image from 'next/image';
import {Pagination} from 'components/Pagination';


const BlogBox = (props) => {
    return (
        <div>


          <div className={styles.blogPage}>
            <div className={styles.blogBox}>
              {props.blogs.map((blogs) =>(
                // ブログそれぞれの表示
                <div key={blogs.id} className={styles.blogContent}>
                  <div className={styles.blogItem}>
                    <Link href={`/blogs/${blogs.id}`}>
                      <div className={styles.blogImg}>
                        <img className={styles.blogImg} src={blogs.samune.url} alt=""/>
                      </div>
                      <div className={styles.dateBox}>
                        <div className={styles.dateItem}>
                          <Image src="/pencil.jpeg" width={15} height={15} />
                          {blogs.createdAt.substring(0,10)}
                        </div>
                        <div className={styles.dateItem}>
                          <Image src="/reload.jpeg" width={15} height={15} />
                          {blogs.updatedAt.substring(0,10)}
                        </div>
                      </div>
                      <div className={styles.blogTitle}>
                        {blogs.title}
                      </div>
                      <div className={styles.tag}>
                        {blogs.category.map((category) => (
                          <div className={styles.tagItem}>
                            {category.name}
                          </div>
                        ))}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Pagination totalCount={props.totalCount} visible={props.visible}/>
          </div>



        </div>
    );
}

export default BlogBox;