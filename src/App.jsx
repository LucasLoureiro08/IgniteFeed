import { Post} from './components/Post'
import { Header } from './components/Header';
import { useState } from 'react';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App(){
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />
        </main>
      </div>
    </>
  )
}




