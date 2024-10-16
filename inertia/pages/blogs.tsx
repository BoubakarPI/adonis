import router from '@adonisjs/core/services/router';
import { Button } from '~/components/ui/button'

export default function Blogs({
  posts,
}: {
  posts: { id: number; title: string; content: string; thumbnail: string }[]
}) {
  return (
    <div className="container mx-auto">
      <div className="container p-3">
        <h1 className="text-slate-700 font-medium text-2xl ">Articles</h1>
        <Button className='text-white mx-2 my-2'>Ajouter</Button>
        <ul>
          {posts.map((post) => (
            <li className="border p-3 shadow" key={post.id}>
              <a href={router.makeUrl('posts.show', {id: post.id})}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
