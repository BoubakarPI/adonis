import { Button } from '~/components/ui/button'

export default function Show({post}) {
  return (
    <div className="container mx-auto">
      <form className="container p-3">
        <div>
          <label className='block text-xl my-2' htmlFor="title">Modifier l 'article : {post.title}</label>
          <input className='border border-gray-500 rounded-sm p-2' id="title" type="text" name="title" />
        </div>
      </form>
        <Button className="text-white mx-2 my-2">Sauvegarder</Button>
    </div>
  )
}
