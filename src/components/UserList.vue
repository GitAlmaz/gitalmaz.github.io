<template>
	<ul class="user-list">
		<li class="user-list__item is-active" :data-value="userName" @click.prevent="changeChat">
			<img src="https://image.flaticon.com/icons/svg/847/847969.svg" alt="" />
			<p>{{ userName }}</p>
		</li>
		<li class="user-list__item" v-for="user in users" :key="user.id" :data-value="user.name" @click.prevent="changeChat">
			<img src="https://image.flaticon.com/icons/svg/847/847969.svg" alt="" />
			<p>{{ user.name }}</p>
		</li>
	</ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
	components: {},
	props: {
		users: {
			type: Array,
			default: () => []
		},
		userName: {
			type: String,
			default: 'username'
		}
	},
	computed: {
		...mapGetters('chat', ['getHistory'])
	},
	methods: {
		...mapMutations('chat', ['setOpponentName', 'setMessages', 'addHistory']),
		changeChat(e) {
			const items = [...document.querySelectorAll('.user-list__item')]
			const name = e.target.dataset.value
			items.map(item => {
				item.dataset.value === name ? item.classList.add('is-active') : item.classList.remove('is-active')
			})
			if (name === this.userName) {
				this.addHistory({
					name,
					messages: []
				})
			}
			for (const item of this.getHistory) {
				if (item.name === name) {
					this.setMessages(item.messages)
				}
			}
			this.setOpponentName(name)
		}
	}
}
</script>

<style></style>
