import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>创建 Next App</title>
        <meta name='description' content='由创建 next app 生成' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎来到 <a href='https://nextjs.org'>Next.js！</a>
        </h1>

        <p className={styles.description}>
          从编辑 <code className={styles.code}>pages/index.js</code> 开始
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>文档 &rarr;</h2>
            <p>查找有关 Next.js 功能和 API 的深入信息。</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>学习 &rarr;</h2>
            <p>在带有测验的交互式课程中了解 Next.js！</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>例子 &rarr;</h2>
            <p>发现并部署模板式的 Next.js 项目实例。</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>部署 &rarr;</h2>
            <p>使用 Vercel 立即将 Next.js 站点部署到公共 URL。</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
