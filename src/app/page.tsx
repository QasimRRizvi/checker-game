'use client';

import Head from 'next/head';
import GameModes from '@/components/GameModes';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div>
        <Head>
          <title>Checkers Game</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <GameModes />
        </main>
      </div>
    </main>
  );
}
