import { Link } from "react-router-dom";

const posts = [
  { title: "Meu primeiro post", slug: "primeiro-post" }
];

export default function Home() {
  return (
    <div className="page">
      <h1>Blog Pessoal</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
