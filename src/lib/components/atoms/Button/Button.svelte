<button on:click><slot /></button>

<style lang="scss">
	@use '$styles/a11y.scss' as a11y;

	button {
		cursor: pointer;

		min-height: 42px;
		padding: 0 15px;

		outline: 0;
		border: 0;

		@include a11y.outline();

		border-radius: 7px;

		background: rgb(0, 0, 0);
		background: linear-gradient(342deg, rgba(0, 0, 0, 1) 0%, rgba(41, 41, 41, 1) 100%);

		&:active {
			background: linear-gradient(342deg, rgba(0, 0, 0, 1) 0%, rgb(63, 63, 63) 100%);
		}

		color: white;
	}
</style>
