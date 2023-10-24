import { createStore } from "vuex";
import { chats } from "./chats";

const store = createStore({
	modules: {
		chatsModule: chats,
	},
});

export default store;
