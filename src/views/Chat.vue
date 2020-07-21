<template>
	<main class="chat-page">
		<div class="container">
			<h1>Chat</h1>
			<div class="chat-page__line">
				<div class="chat-page__list">
					<UserList :users="getUsers" :userName="getUserName" />
					<button class="btn btn--red" @click="exit">Exit</button>
				</div>
				<div class="chat-page__chat">
					<ChatBoard :userName="getUserName" :messages="getMessages" :opponentName="getOpponentName" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ChatBoard from '@/components/ChatBoard'
import UserList from '@/components/UserList'
import { mapGetters, mapMutations } from 'vuex'
export default {
	components: {
		ChatBoard,
		UserList
	},
	data() {
		return {}
	},
	computed: {
		...mapGetters('chat', ['getUserName', 'getHistory', 'getUsers', 'getOpponentName', 'getMessages'])
	},
	methods: {
		...mapMutations('chat', ['setUserName', 'setOpponentName', 'setMessages']),
		checkUserName() {
			const nameFromLS = localStorage.getItem('userName')
			this.setUserName(nameFromLS)
			this.setOpponentName(nameFromLS)
		},
		exit() {
			localStorage.removeItem('userName')
			this.setMessages([])
			this.$router.push({ path: '/login' })
		}
	},
	beforeMount() {
		const name = localStorage.getItem('userName')
		if (!name) {
			this.$router.push({ path: '/login' })
		}
	},
	mounted() {
		this.checkUserName()
	}
}
</script>

<style></style>
