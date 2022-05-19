import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="container">
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-5">
          <DateFormatter dateString={date} />
        </div>
        
        <div className="mb-5">
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        </div> 
      </div>
    </>
  );
}
