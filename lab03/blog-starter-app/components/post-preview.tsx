import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  _id: string;
  title: string;
  coverImage: string;
  createdAt: string;
  excerpt: string;
  author: string;
  slug: string;
};

const PostPreview = ({
  _id,
  title,
  coverImage,
  createdAt,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          // as={`/posts/${_id}`}
          href={`/posts/${_id}`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={createdAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author} /*picture={author.picture}*/ />
    </div>
  );
};

export default PostPreview;
