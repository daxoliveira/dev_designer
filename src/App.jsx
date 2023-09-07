import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/daxoliveira.png',
      name: 'Dax Oliveira',
      role: 'Front-End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone!,' },
      { type: 'paragraph', content: "I've just uploaded a new project to my portfolio. It's a simple social network for devs who are into design as well!" },
      { type: 'link', content: 'https://github.com/daxoliveira/react_movie_search' },
    ],
    publishedAt: new Date('2023-09-02 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/heitorgodau.png',
      name: 'Heitor Godau',
      role: 'Front-End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone!,' },
      { type: 'paragraph', content: "I've just uploaded a new project to my portfolio. It's a simple social network for devs who are into design as well!" },
      { type: 'link', content: 'https://github.com/daxoliveira/react_movie_search' },
    ],
    publishedAt: new Date('2023-09-01 22:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/ArnoldThanos.png',
      name: 'Arnold Urquieta',
      role: 'Back-End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone!,' },
      { type: 'paragraph', content: "I've just uploaded a new project to my portfolio. It's a simple social network for devs who are into design as well!" },
      { type: 'link', content: 'https://github.com/daxoliveira/react_movie_search' },
    ],
    publishedAt: new Date('2023-08-30 22:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </ div>
  )
}