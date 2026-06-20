"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-zinc-600 mb-6">
          An unexpected error occurred. You can try again, or head back home.
        </p>
        <button
          onClick={() => reset()}
          className="rounded bg-zinc-900 text-white px-6 py-2.5 font-medium hover:bg-black"
        >
          Try again
        </button>
      </div>
    </div>
  );
}