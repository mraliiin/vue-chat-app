import Service from "../services";

export const chats = {
	state() {
		return {
			chats: [],
		};
	},
	mutations: {
		setCurrentUser(state, payload) {
			state.currentUser = payload;
		},

		setChats(state, payload) {
			state.chats = payload;
		},

		addMessage(state, payload) {
			state.chats.push(payload);
		},
	},
	actions: {
		async setCurrentUser({ commit }) {
			const user = await Service.loginUser();
			commit("setCurrentUser", user || {});
		},

		async initChats({ commit }) {
			try {
				const chats = await Service.getAllMessages();
				commit("setChats", chats || []);
			} catch (err) {
				commit("setChats", []);
			}
		},

		async sendMessage({ commit }, data) {
			try {
				await Service.sendMessage(data);
				commit("addMessage", data);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
