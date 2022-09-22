import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Josue',
		lastName: 'Alvarado'
	}
});

export default app;