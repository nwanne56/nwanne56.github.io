import Link from "next/link";

const PostPreview = (props) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="h-max-32 border-neutral-300 border-2 p-2 rounded-md shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="flex width-max">
                    <div className="flex-1">
                        <p className="text-[#4E4950] font-bold hover:underline">{props.title}</p>
                    </div>
                    <p className="text-[#4E4950] opacity-50 text-sm italic pr-2">{props.date}</p>
                </div>
                <p className="text-sm">{props.subtitle}</p>
            </div>
        </Link>
    );
}

export default PostPreview;