'use client';

import { stringify } from 'querystring';
import { useEffect } from 'react';
import { json } from 'stream/consumers';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h2 className='text-center'>Something went wrong!</h2>
      {error && (
        <p className='my-2 p-3 text-red-600 font-normal leading-none border-red-700 rounded-md bg-red-300'>
          {error.message}
        </p>
      )}
      <button
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
