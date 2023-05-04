import React from 'react';

export default function Main() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-bold mb-2">My First Post</h3>
        <p className="text-gray-600">This is the latest post  from JB PORTALS!. </p>
        <a href="#" className="text-blue-600 font-semibold mt-2">Read more &rarr;</a>
      </div>
    </div>
  );
}
