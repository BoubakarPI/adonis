export default function Blogs({posts} : {posts : {id : number, title: string, content: string, thumbnail: string} []}) {
    return (
        <>
            <p className="bg-red-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus totam reiciendis nisi. Praesentium non obcaecati dolorem odio laudantium omnis explicabo, voluptatum aperiam porro laborum ipsum blanditiis, libero fuga perspiciatis consequatur.
            </p>


    <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <a className="bg-yellow-400" href={post.thumbnail}>{post.thumbnail}</a>
          </li>
        ))}
      </ul>

    </>)
}
