function getLocalStorage(key, initialValue) {
	try {
		return JSON.parse(window.localStorage.getItem(key));
	} catch (error) {
		return initialValue;
	}
}

export default getLocalStorage;
