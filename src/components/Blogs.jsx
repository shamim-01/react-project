import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2026',
      description:
        'Explore the latest trends and technologies shaping the future of web development. From AI integration to edge computing.',
      image: './src/images/programmer_v_02.jpg',
      date: 'Mar 15, 2026',
      readTime: '5 min read',
      author: 'David Kim',
    },
    {
      title: 'Mastering React Hooks: Advanced Patterns',
      description:
        'Deep dive into advanced React Hooks patterns and learn how to build scalable, maintainable applications with custom hooks.',
      image: './src/images/19362653.jpg',
      date: 'Mar 10, 2026',
      readTime: '8 min read',
      author: 'Lisa Wang',
    },
    {
      title: 'Building Scalable SaaS Applications',
      description:
        'Learn the architecture patterns and best practices for building SaaS applications that can scale to millions of users.',
      image: './src/images/40752.jpg',
      date: 'Mar 5, 2026',
      readTime: '6 min read',
      author: 'James Wilson',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest from <span className="gradient-text">Our Blog</span>
          </h2>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and industry updates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Posts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
