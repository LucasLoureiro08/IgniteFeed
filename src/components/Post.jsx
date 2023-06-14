import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt, content }) {
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>
      </header>
     
        <div className={styles.content}>
            {content.map(line => {
            if (line.type === 'paragraph') {
                return <p>{line.content}</p>;
            } else if (line.type === 'link') {
                return <p><a href="#">{line.content}</a></p>
            }
            })}
        </div>
        <form className={styles.commentArea}>
            <strong>Deixe seu feedback</strong>
            <textarea 
                placeholder='Deixe seu comentário'           
            />
            <footer>
                <button type='submit'>
                    Publicar
                </button>
            </footer>
            
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
      
    </article>
    )
}