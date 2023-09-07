import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/daxoliveira.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Dax Oliveira</strong>
                            <time title="May 11th at 08:13h" dateTime='2023-08-07 08:13:30'>About 1 hour ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}