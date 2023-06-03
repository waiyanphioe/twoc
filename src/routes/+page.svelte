<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	let isLoaded = false;
	let con;
	let hi;
	async function handleSubmit() {
		const response = await fetch(
			'https://accident-db9a4-default-rtdb.firebaseio.com/lists/1h-1835/.json'
		);

		con = await response.json();

		isLoaded = true;
	}
</script>

<div class="max-w-lg my-0 mx-auto">
	<Navbar />
	<div>
		{#if isLoaded}
			<button> {con.license} </button>
			<img src={con.image} alt="" srcset="" />
		{/if}
	</div>
</div>
