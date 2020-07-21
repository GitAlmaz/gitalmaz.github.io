import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../layouts/Default'
import Empty from '../layouts/Empty'
import Login from '../views/Login'
import Chat from '../views/Chat'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: Empty,
    name: 'empty',
    redirect: '/login',
		children: [
			{
				path: '/login',
				name: 'login',
				component: Login
			}
		]
	},
	{
		path: '/default',
		component: Default,
		name: 'default',
		redirect: '/chat',
		children: [
			{
				path: '/chat',
				name: 'chat',
				component: Chat
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
	routes
})

export default router
