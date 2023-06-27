import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }){

    function handleDeleteComment() {
        onDeleteComment(content);
      }

    return (
        <div className={styles.comment}>
            <Avatar  hasBorder = {false} src="https://avatars.githubusercontent.com/u/116582484?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Loureiro</strong>
                            <time className={styles.authorTime} title="07 de Junho ás 15:45" dateTime="2023-06-7 15:45:00">Publicado há 1h</time>
                        </div>
                        <button 
                            className={styles.trashButtom} 
                            title='Excluir Comentário'
                            onClick={ handleDeleteComment }>
                            <Trash size={24} 
                        />
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer >
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}