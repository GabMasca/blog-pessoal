import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        setContent(text);
        console.log("Post carregado:", text);
      });
  }, [slug]);

  return (
    <div className="post">
      <Helmet>
        <title>{slug.replaceAll("-", " ")}</title>
        <meta name="description" content={`Post do blog: ${slug}`} />
      </Helmet>

      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
