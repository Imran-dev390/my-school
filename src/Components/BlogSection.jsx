import React from "react";

// const blogs = [
//   {
//     title: "25+ Best Schools in Karachi with updated Fee Structures (2023-2024)",
//     excerpt:
//       "Education is the key to success, and the primary key is to select the right school for your child.",
//     link: "https://simsin.com.pk/blogs/best-schools-in-karachi-with-updated-fee-structures/",
//     imageWebp: "assets/img/blog-5.webp",
//     imageJpg: "assets/img/blog-5.jpg",
//     alt: "25+ Best Schools In Karachi With Updated Fee Structures (2023-2024)",
//     delay: "0",
//   },
//   {
//     title: "Importance of Professional Website for Schools in Pakistan",
//     excerpt:
//       "Discover the Importance of Professional School Website Design in 2023 in Pakistan. Explore the digital journey of digital education.",
//     link: "https://simsin.com.pk/blogs/professional-website-for-schools-in-pakistan/",
//     imageWebp: "assets/img/blog-10.webp",
//     imageJpg: "assets/img/blog-10.jpg",
//     alt: "professional-website-for-schools-in-pakistan",
//     delay: "400",
//   },
//   {
//     title: "Importance of Basic Computer Skills for Students in Pakistan",
//     excerpt:
//       "Discover the importance of basic computer skills for students in Pakistan and its benefits.!",
//     link: "https://simsin.com.pk/blogs/importance-of-computer-skills-for-students/",
//     imageWebp: "assets/img/blog-8.webp",
//     imageJpg: "assets/img/blog-8.jpg",
//     alt: "importance of computer skills for students",
//     delay: "200",
//   },
//   {
//     title: "Coding For Kids: Why Introduce Your Kid To Programming?",
//     excerpt:
//       "In today’s digital age, where technology plays a significant role in our lives, Programming & Coding for kids has become increasingly important.",
//     link: "https://simsin.com.pk/blogs/coding-for-kids/",
//     imageWebp: "assets/img/blog-7.webp",
//     imageJpg: "assets/img/blog-7.jpg",
//     alt: "coding for kids",
//     delay: "600",
//   },
// ];




const blogs = [
  {
    title: "25+ Best Schools in Karachi with updated Fee Structures (2023-2024)",
    excerpt:
      "Education is the key to success, and the primary key is to select the right school for your child.",
    link: "https://simsin.com.pk/blogs/best-schools-in-karachi-with-updated-fee-structures/",
    imageWebp:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    imageJpg:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    alt: "Best Schools in Karachi",
    delay: "0",
  },
  {
    title: "Importance of Professional Website for Schools in Pakistan",
    excerpt:
      "Discover the Importance of Professional School Website Design in 2023 in Pakistan. Explore the digital journey of digital education.",
    link: "https://simsin.com.pk/blogs/professional-website-for-schools-in-pakistan/",
   imageWebp:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    imageJpg:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    alt: "Professional Website for Schools",
    delay: "400",
  },
  {
    title: "Importance of Basic Computer Skills for Students in Pakistan",
    excerpt:
      "Discover the importance of basic computer skills for students in Pakistan and its benefits.!",
    link: "https://simsin.com.pk/blogs/importance-of-computer-skills-for-students/",
    imageWebp:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    imageJpg:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    alt: "Computer Skills for Students",
    delay: "200",
  },
  {
    title: "Coding For Kids: Why Introduce Your Kid To Programming?",
    excerpt:
      "In today’s digital age, where technology plays a significant role in our lives, Programming & Coding for kids has become increasingly important.",
    link: "https://simsin.com.pk/blogs/coding-for-kids/",
    imageWebp:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    imageJpg:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    alt: "Coding for Kids",
    delay: "600",
  },
];

const BlogSection = () => {
  return (
    <section className="py-10">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-3/4 mb-6 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-4xl font-bold mb-2">Blogs</h2>
            <p className="text-gray-600">
              Stay ahead of the curve with our engaging blog content, offering expert perspectives,
              innovative strategies, and the latest advancements in education technology,
              empowering you to make informed decisions for your school's digital transformation.
            </p>
          </div>
          <div className="hidden md:block">
            <a
              href="blogs"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              aria-label="SIMSIN Blogs"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={blog.delay}
            >
              <a href={blog.link} aria-label={`Read more for ${blog.title}`} className="block">
                {/* <div className="aspect-w-16 aspect-h-9">
                  {/* <picture>
                    <source srcSet={blog.imageWebp} type="image/webp" />
                    <source srcSet={blog.imageJpg} type="image/jpg" />
                    <img
                      src={blog.imageJpg}
                      alt={blog.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </picture> */}
                {/* </div> */}

                  <img
                src={blog.imageWebp}
                alt={blog.alt}
                className="w-full h-48 object-cover"
              />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {blog.title.split(" ").map((word, i) =>
                      word.toLowerCase() === "schools" ? (
                        <span key={i} className="text-blue-600">
                          {word + " "}
                        </span>
                      ) : (
                        word + " "
                      )
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                  <span className="text-blue-600 font-medium text-sm">Read More</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden max-w-7xl mx-auto px-4">
        <div className="flex justify-center mt-6">
          <a
            href="blogs"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full max-w-[200px]"
            aria-label="SIMSIN Blogs"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
