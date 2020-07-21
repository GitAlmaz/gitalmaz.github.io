export default {
	namespaced: true,
	state: {
		userName: '',
		opponentName: '',
		users: [
			{
				id: 1,
				name: 'Ivan'
			},
			{
				id: 2,
				name: 'Elena'
			}
		],
		history: [
			{
				name: 'Ivan',
				messages: [
					{
						time: 11,
						text: 'Hello',
						own: false
					},
					{
						time: 12,
						text: 'How are you?',
						own: false
					},
					{
						time: 13,
						text: 'Hi, i am fine',
						own: true
					}
				]
			},
			{
				name: 'Elena',
				messages: [
					{
						time: 11,
						text: 'Hi',
						own: false
					},
					{
						time: 12,
						text: 'I am your new friend',
						own: false
					}
				]
			}
		],
		openedMessages: []
	},
	actions: {
		async login({ commit }, payload) {
			localStorage.setItem('userName', payload)
			commit('setUserName', payload)
		}
	},
	mutations: {
		setUserName(state, payload) {
			state.userName = payload
		},
		setOpponentName(state, payload) {
			state.opponentName = payload
		},
		setMessages(state, payload) {
			state.openedMessages = payload
		},
		addMessage(state, payload) {
			state.openedMessages.push(payload)
		},
		addHistory(state, payload) {
			state.history.unshift(payload)
		}
	},
	getters: {
		getUserName(state) {
			return state.userName
		},
		getHistory(state) {
			return state.history
		},
		getMessages(state) {
			return state.openedMessages
		},
		getUsers(state) {
			return state.users
		},
		getOpponentName(state) {
			return state.opponentName
		}
	}
}
