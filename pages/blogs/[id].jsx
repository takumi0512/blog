//SSG
import {client} from "../../libs/client";
import styles from '../../styles/blog.module.scss';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId:id});


    return {
        props: {
            blogs: data,
        },
    };
};


export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog"});
    const paths = data.contents.map((content) => `/blogs/${content.id}`);
    
    return {
        paths,
        fallback:false,
    }
}


export default function BlogId({blogs}) {
    return(
        <div>

        <Header/>

        <main className={styles.main}>
            <h1 className={styles.title}>{blogs.title}</h1>
            <p className={styles.publishedAt}>{blogs.publishedAt}</p>
            <div 
                dangerouslySetInnerHTML={{__html: `${blogs.content}`}}
                className={styles.post}
                ></div>
        </main>

        <Footer/>

        </div>
    );
}

