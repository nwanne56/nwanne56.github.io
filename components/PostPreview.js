import Link from "next/link";

const PostPreview = (props) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="border p-2 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1">
                <div className="flex width-max">
                    <div className="flex-1">
                        <p className="text-[#4E4950] font-bold hover:underline">{props.title}</p>
                    </div>
                    <p className="text-[#4E4950] opacity-50 text-sm italic pr-2">{props.date}</p>
                </div>
                <p>{props.subtitle}</p>
            </div>
        </Link>
    );
}

export default PostPreview;