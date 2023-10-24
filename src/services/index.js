// ========== Services
import { conversation, currentUser } from "./mockapi";

class Service {
	static loginUser() {
		return new Promise((resolve) => {
			resolve(JSON.parse(currentUser));
		});
	}
	static getAllMessages() {
		return new Promise((resolve) => {
			resolve(JSON.parse(conversation));
		});
	}

	static sendMessage(data) {
		return new Promise((resolve, reject) => {
			// TODO: Simulate API error
			if (data?.message === "error") {
				setTimeout(() => {
					reject("message failed");
				}, 500);
			} else {
				setTimeout(() => {
					resolve(data);
				}, 500);
			}
		});
	}
}

export default Service;
