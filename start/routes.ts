/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
const BlogController = () => import('#controllers/blog_controller')


//router.on('/').renderInertia('home')
//router.on('/app').renderInertia('app')


router.get('a', [BlogController, 'index'])
router.get('app', [BlogController, 'app'])
router.get('/', [BlogController, 'blogs'])
router.get('article/:id', [BlogController, 'show']).as('posts.show')
router.post('article/:id', [BlogController, 'upload'])
