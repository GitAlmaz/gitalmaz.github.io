<template>
	<main class="login-page">
		<div class="container">
			<h1>
				Please enter your name
			</h1>
			<form @submit.prevent="sendUserName">
				<InputGroup :data="{ type: 'text', name: 'name', id: 'name', placeholder: 'Your name' }" v-model="name" />
				<button class="btn btn--green">Enter</button>
			</form>
		</div>
	</main>
</template>

<script>
import InputGroup from '@/components/UI/InputGroup'
import { mapActions } from 'vuex'
export default {
	components: {
		InputGroup
	},
	data() {
		return {
			name: ''
		}
	},
	methods: {
		...mapActions('chat', ['login']),
		sendUserName() {
			if (this.name.length) {
				this.login(this.name)
				this.$router.push({ path: '/chat' })
			}
		}
	}
}
</script>

<style></style>
