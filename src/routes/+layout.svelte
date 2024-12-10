<script lang="ts">
	import '../app.css';
  	import '@picocss/pico';
	let { children } = $props();
	const message = ['Tasking','your tasks, but smoother'];

</script>
<!-- global html for header -->
<nav>
	<ul>
		<hgroup>
			<li>
				<h1>{message[0]}</h1>
				<p>{message[1]}</p>
			</li>	  
		</hgroup>
	</ul>
	<ul>
	  <li>
		<details class="dropdown">
		  <summary>
			Account
		  </summary>
		  <ul dir="rtl">
			<li><a href="Profile">Profile</a></li>
			<li><a href="History">History Log</a></li>
		  </ul>
		</details>
	  </li>
	</ul>
</nav>

{@render children()}

<style scoped>
	nav {
		margin: 1rem;
        max-width: 1920px;
        max-height: 800px;
	}
</style>