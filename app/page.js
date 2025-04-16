'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>

      <div className="flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">
          Build forms, profiles, and magic with zero code.
        </h1>
        <p className="text-lg mt-6 max-w-xl text-muted-foreground">
          The ultimate tool to create custom forms and micro-sites that look incredible.
        </p>
        <div className="mt-8 flex gap-4">
          <button type="button" onClick={() => router.push('/builder')} className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded">
            🚀 Get Started
          </button>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 text-lg px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
