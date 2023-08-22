import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Dax Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
          />
          <Post
            author="Diogenes Oliveira"
            content="Another post"
          />
        </main>
      </div>
    </ div>
  )
}