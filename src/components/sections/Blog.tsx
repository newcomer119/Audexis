import React, { useState } from 'react';

interface BlogPost {
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const posts: BlogPost[] = [
    {
      title: "The Future of Transcription Services",
      summary: "Explore how AI and human expertise combine for optimal results",
      content: `The transcription industry is evolving rapidly with the integration of AI technologies. 
                However, human expertise remains crucial for ensuring accuracy and context understanding. 
                This article explores how the perfect balance between technology and human skill leads to 
                superior transcription results.`,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "March 1, 2024"
    },
    {
      title: "Medical Transcription Best Practices",
      summary: "Essential guidelines for accurate medical documentation",
      content: `Medical transcription requires exceptional attention to detail and specialized knowledge. 
                This comprehensive guide covers the essential best practices, from terminology handling to 
                confidentiality requirements, ensuring accurate and compliant medical documentation.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      author: "Dr. Michael Chen",
      date: "February 28, 2024"
    },
    {
      title: "Legal Transcription Challenges",
      summary: "Overcoming common challenges in legal transcription",
      content: `Legal transcription presents unique challenges that require specific expertise and attention. 
                This article discusses common obstacles in legal transcription and provides practical solutions 
                for maintaining accuracy and compliance in legal documentation.`,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      author: "James Wilson",
      date: "February 25, 2024"
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
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
                )}
                <button
                  onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                  className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {expandedPost === index ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}