import { Button } from '~/components/ui/button'

export default function Show({ post }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-medium p-2">Modifier l 'article : {post.title}</h1>

      <form method='post' action='' encType='multipart/FormData' className="container p-3">
        <div>
          <label className="block my-2" htmlFor="title">
            Titre
          </label>
          <input
            className="border border-gray-500 rounded-sm p-2"
            id="title"
            type="text"
            name="title"
            value={post.title}
          />
        </div>
        <div>
          <label className="block  my-2" htmlFor="title">
            Contenu
          </label>
          <textarea className="border border-gray-500 rounded-sm p-2" id="title" name="title" />
        </div>
        <button type='submit' className="mx-2 my-2">Sauvegarder</button>
      </form>
    </div>
  )
}
