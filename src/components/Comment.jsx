import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/daxoliveira.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Dax Oliveira</strong>
                            <time title="May 11th at 08:13h" dateTime='2023-08-07 08:13:30'>About 1 hour ago</time>
                        </div>

                        <button title="Delete comment">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Great job, congrats!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}