import { motion } from "motion/react";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col h-full items-center w-full xl:w-[320px] lg:h-[532px] rounded-[28px] overflow-hidden shadow group cursor-pointer transition duration-500 bg-white"
    >
      <div className="relative w-full h-[270px]">
        <img
          src={post.image}
          alt=""
          className="w-full h-full object-cover rounded-t-[28px] transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-green/30 opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-t-[28px]" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between h-full px-[25px] py-[20px]">
        <div className="text-darkGray text-[14px] flex gap-2 mb-[6px]">
          <span>{post.author}</span>
          <span>▪</span>
          <span>{post.publishedDate}</span>
        </div>

        <div className="space-y-[16px]">
          <h4 className="text-[17px] max-w-[400px] font-bold text-darkGreen">
            {post.title}
          </h4>
          <p className="text-sm md:text-[14px] text-darkGray">
            {post.description}
          </p>
        </div>

        <hr className="my-[24px] border-gray" />

        <a
          href=""
          className="text-[16px] font-medium text-darkGray text-center underline transition-all duration-300 group-hover:text-white group-hover:bg-green px-[20px] py-[10px] rounded-[15px]"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
