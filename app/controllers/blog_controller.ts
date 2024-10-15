import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
    async index({ inertia }: HttpContext) {
        return inertia.render('home')
    }
    async app({ inertia }: HttpContext) {
        return inertia.render('app')
    }
    async blogs({ inertia }: HttpContext) {
        const posts = await Post.all()
        return inertia.render('blogs', { posts })
    }
}
