import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<iframe
  src="https://chat.dante-ai.com/embed?kb_id=5a5268d1-8e86-4c12-b078-3e557e332f7e&token=5332028d-639c-442d-b33c-09f09811af4f&modeltype=gpt-4&logo=ZmFsc2U=&mode=false"
  allow="clipboard-write; microphone"
  width="920"
  height="900"
  frameborder="0"
  ></iframe>
      </main>

      <Footer />
    </div>
  )
}
