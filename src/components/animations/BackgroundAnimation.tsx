import React from 'react';

export function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-blob1 -top-48 -left-48"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl animate-blob2 top-1/2 left-1/4"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-blob3 -bottom-48 right-0"></div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}