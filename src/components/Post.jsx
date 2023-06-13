import styles from './Post.module.css'
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/116582484?v=4" />
          <div className={styles.authorInfo}>
            <strong>Lucas Loureiro</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="07 de Junho ás 15:45" dateTime="2023-06-7 15:45:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
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
      </div>
    </article>
    )
}