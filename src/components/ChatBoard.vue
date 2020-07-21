<template>
	<div class="chat-board">
		<div class="chat-board__part">
			<h3>{{ userName }}</h3>
			<ul class="chat-board__messages">
				<li v-for="message of messages" :class="{ 'right-message': message.own }" :key="message.time">{{ message.text }}</li>
			</ul>
			<form @submit.prevent="sendMessage" data-input="message1">
				<input class="chat-board__input" type="text" name="message1" v-model="message1" />
			</form>
		</div>
		<div class="chat-board__part">
			<h3>{{ opponentName }}</h3>
			<ul class="chat-board__messages">
				<li v-for="message of messages" :class="{ 'right-message': !message.own }" :key="message.time">{{ message.text }}</li>
			</ul>
			<form @submit.prevent="sendMessage" data-input="message2">
				<input class="chat-board__input" type="text" name="message2" v-model="message2" />
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	props: {
		userName: {
			type: String,
			default: 'Username'
		},
		opponentName: {
			type: String,
			default: 'opponentName'
		},
		messages: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			message1: '',
			message2: ''
		}
	},
	computed: {
		...mapGetters('chat', ['getMessages'])
	},
	methods: {
		...mapMutations('chat', ['addMessage']),
		sendMessage(e) {
			const input = e.currentTarget.dataset.input
			if (input === 'message1') {
				this.addMessage({
					time: Date.now(),
					text: this.message1,
					own: true
				})
				this.message1 = ''
			} else {
				this.addMessage({
					time: Date.now(),
					text: this.message2,
					own: false
				})
				this.message2 = ''
			}
		}
	}
}
</script>

<style></style>
