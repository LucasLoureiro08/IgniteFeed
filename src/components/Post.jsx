import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'
import { useState } from 'react'




export function Post({ author, publishedAt, content }) {
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })

    const [newCommentText, setNewCommentText] = useState('');
    
    const [comments, setComments] = useState([
        "Que Post legal."
    ]) 
// função para criar um novo comentário
    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;
        
        setComments([...comments, newCommentText ]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        })
    
        setComments(commentsWithoutDeletedOne);
    }

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
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
                })}
            </div>
            <form  
                onSubmit={handleCreateNewComment} 
                className={styles.commentArea}
            >
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    name='comment'
                    value={newCommentText}
                    
                    onChange={handleNewCommentChange}
                    placeholder='Deixe seu comentário'           
                />
                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
                
            </div>
      
    </article>
    )
}