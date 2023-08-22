import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/daxoliveira.png" />
                    <div className={styles.authorInfo}>
                        <strong>Dax Oliveira</strong>
                        <span>React.js Developer</span>
                    </div>
                </div>

                <time title="May 11th at 08:13h" dateTime='2023-08-07 08:13:30'>Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Hi everyone!</p>
                <p>I've just uploaded a new project to my portfolio. It's a simple social network for devs who are into design as well!</p>
                <p><a href=''>https://github.com/daxoliveira/react_movie_search</a></p>
                <p>
                    <a href=''>#newproject</a>{' '}
                    <a href=''>#react</a>{' '}
                    <a href=''>#devdesigner</a>
                </p>
            </div>
        </article>
    )
}