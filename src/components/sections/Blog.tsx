import React, { useState } from 'react';

interface BlogPost {
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: string;
  link: string;
}

export function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const posts: BlogPost[] = [
    {
      title: "Why Transcription Outsourcing is Transforming Industries",
      summary: "An exploration of how transcription outsourcing is reshaping industries by improving efficiency and reducing operational costs.",
      content: "Outsourcing transcription services has become a game-changer for many industries, including healthcare, legal, and media. This blog highlights the impact of transcription outsourcing on streamlining workflows, enhancing productivity, and allowing businesses to focus on their core activities.",
      image: "https://plus.unsplash.com/premium_photo-1661317275709-77220fb9b500?auto=format&fit=crop&w=800&q=80",
      author: "TranscribeMe Team",
      date: "May 1, 2023",
      link: "https://www.transcribeme.com/blog/transcription-outsourcing-impact/"
    },
    {
      title: "How Interview Transcription Services Can Save You Time and Money",
      summary: "An exploration of the benefits of interview transcription services in enhancing efficiency and reducing costs.",
      content: "This article discusses how transcribing interviews can streamline workflows, improve accuracy, and save both time and money for businesses and individuals. It highlights the advantages of utilizing professional transcription services for interviews.",
      image: "https://plus.unsplash.com/premium_photo-1676666379090-e0fc81f41e7e?auto=format&fit=crop&w=800&q=80",
      author: "TranscribeMe Admin",
      date: "August 29, 2024",
      link: "https://www.transcribeme.com/blog/how-interview-transcription-services-can-save-you-time-and-money/"
    },
    {
      title: "Why Accurate Legal Transcription Is Essential for Attorneys",
      summary: "An analysis of the importance of precise legal transcription in the legal profession.",
      content: "This blog post examines the critical role that accurate legal transcription plays for attorneys, emphasizing how errors can lead to misunderstandings and legal complications. It underscores the necessity of professional transcription services in the legal field.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      author: "Kevin",
      date: "August 29, 2024",
      link: "https://www.transcriptionhub.com/blog/why-accurate-legal-transcription-essential-attorneys"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                expandedPost === index ? 'md:col-span-3' : ''
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={`w-full object-cover ${expandedPost === index ? 'h-[400px]' : 'h-48'}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                {expandedPost === index ? (
                  <>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => setExpandedPost(null)}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Show Less
                      </button>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Visit Blog
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
                    <button
                      onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read More
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}