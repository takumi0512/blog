


import styles from './Category.module.css';
import Link from 'next/link';


const categoryList = ["SwiftUI","JavaScript","TypeScript","HTML,CSS","Firebase","Unity","blog"]
// let categoryNumber = {};


const Category = (props) => {

  //それぞれのカテゴリに何記事あるかを数えるハッシュマップ
  let categoryNumber = {};
  props.blogs.map((blog) => {
    blog.category.map((category) => {
      if (category.name in categoryNumber){
        categoryNumber[category.name] += 1
      } else {
        categoryNumber[category.name] = 1
      }
    })
  })

    return (
        <div>

          <div className={styles.categoryBox}>

            <div className={styles.categoryTitle}>
              カテゴリ一覧
            </div>

            <div className={styles.categoryList}>
              {categoryList.map((category) => (
                <Link href={`../blog?category=${category}`}>
                  <div key={category} className={styles.categoryListItem}>
                      <div className={styles.Item}>{category}</div>
                      <div className={styles.Item}>{categoryNumber[category]}</div>
                    </div>
                </Link>
              ))}
            </div>
          </div>


        </div>
    );
}

export default Category;