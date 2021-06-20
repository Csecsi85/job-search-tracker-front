import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Search Tracker</title>
        <meta
          name="description"
          content="Tracker where you can track your job applications and add notes to each one"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Job search tracker</h1>
      </main>
    </div>
  );
}
