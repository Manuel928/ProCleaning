import { blogPosts } from "../assets/assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div
      id="blog"
      className="pt-[60px] md:pt-[110px] flex flex-col gap-2.5 md:gap-5 mx-auto px-6 md:px-12 xl:px-[135px]"
    >
      <div className="flex flex-col md:flex-row max-w-[1170px] justify-between gap-3 md:gap-[201px] items-start md:items-center">
        <h1 className="font-semibold text-[18px] leading-[124%] text-left max-w-[360px] md:text-[24px] lg:text-[24px] text-[#111D15]">
          Stay Updated with Our Tips & Service News!
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="hidden md:flex font-semibold text-[14px] max-w-[536px] md:text-[16px] text-[#111D15]">
            Our Blog
          </h4>
          <p className="text-[#666666] text-[14px] max-w-[400px]">
            Stay informed with our latest cleaning tips, service updates, expert
            advice on maintaining an immaculate home
          </p>
        </div>
      </div>
      <hr className="text-[#83A790]" />
      <div className="flex flex-col items-center md:flex-row mx-auto max-w-[1170px] gap-x-[30px] gap-y-8">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
