<script>
	import '../app.css';
	import Head from '$lib/components/Head.svelte';

	let isLoaded = false;
	let isEditing = false;
	let data;
	let inputValue = '';

	async function handleSubmit() {
		const response = await fetch(
			`
			https://accident-db9a4-default-rtdb.firebaseio.com/lists/${inputValue}/.json

			`
		);

		data = await response.json();

		isLoaded = true;
	}

	function handleInput(event) {
		const { value } = event.target;

		// Check if the current value length is 2
		if (value.length === 2) {
			if (isEditing) {
				isEditing = false;
			} else {
				inputValue = value + '-';
				if (inputValue.substring(2, 3) === '-') {
					isEditing = true;
				}
			}
		}

		if (value.length > 6) {
			handleSubmit();
		}
	}
</script>

<Head name={'2C - Myanmar Car Crash List'} />

<div class="max-w-lg my-0 mx-auto">
	<div class="bg-[#fae]">
		<input
			type="text"
			bind:value={inputValue}
			on:input={handleInput}
			class="text-base m-1 px-2 py-1 outline-none"
		/>
	</div>
	<div>
		{#if isLoaded}
			<div class=" mt-3">
				<div>
					<div>
						<div class="flex flex-row h-60 overflow-x-auto">
							{#each data.images as image}
								<img src={image.image} alt={`${data.license}'s photo'}`} class=" object-cover" />
							{/each}
						</div>
					</div>
					<table class="w-full b">
						<tr class=" bg-[#eee]">
							<th>LICENSE NO</th>
							<td>{data.license.toUpperCase()}</td>
						</tr>
						<tr>
							<th>REGION</th>
							<td>{data.region.toUpperCase()}</td>
						</tr>
						<tr class=" bg-[#eee]">
							<th>NUMBER</th>
							<td>{data.number}</td>
						</tr>
						<tr>
							<th>MODEL/TYPE</th>
							<td>{data.model.toUpperCase()}</td>
						</tr>
						<tr class=" bg-[#eee]">
							<th>TIME</th>
							<td>{'-'}</td>
						</tr>
						<tr>
							<th>REPORTED BY</th>
							<td>{'ANONYMOUS'}</td>
						</tr>
					</table>
				</div>
			</div>
		{/if}
	</div>
</div>
