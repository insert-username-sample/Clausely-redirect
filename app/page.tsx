'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          router.push('https://lustrous-rugelach-1d5555.netlify.app/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-8">
          It seems Vercel wasn't quite compatible with our Clerk authentication needs, despite our best efforts.
        </p>
        <p className="text-lg mb-4">
          So, we're redirecting you to our Netlify deployment in...
        </p>
        <p className="text-6xl font-bold text-blue-400">
          {countdown}
        </p>
        <p className="mt-8 text-sm text-gray-400">
          Thank you for your understanding.
        </p>
      </div>
    </main>
  );
}
