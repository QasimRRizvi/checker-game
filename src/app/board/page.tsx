'use client';

import Head from 'next/head';
import BoardDesign from '@/components/BoardDesign';

export default function Board() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <Head>
          <title>Checkers Game | Board</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <BoardDesign />
        </main>
      </div>
    </main>
  );
}
