<script>
	import '../app.css';
</script>

<div class="">
	<header>
		<div class="navbar bg-base-100 px-4 lg:px-32">
			<div class="navbar-start">
				<div class="dropdown">
					<button tabindex="-1" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</button>
					<ul
						tabindex="-1"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
					>
						<li><a href="/organisation">Für Organisationen</a></li>
						<li><a href="/student">Für Studierende</a></li>
						<li><a href="/project">Unsere Projekte</a></li>
						<li><a href="/application">Kontakt & Mitmachen</a></li>
					</ul>
				</div>
				<a href="/">
					<img src="/slp-logo.png" alt="" width="150" />
				</a>
			</div>
			<div class="navbar-center hidden lg:flex text-white">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/organisation">Für Organisationen</a></li>
					<li><a href="/student">Für Studierende</a></li>
					<li><a href="/project">Unsere Projekte</a></li>
					<li><a href="/application">Kontakt & Mitmachen</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<a href="https://www.uni-flensburg.de/" target="_blank" class="" rel="noreferrer">
					<img src="logo-euf.png" alt="" width="150" />
				</a>
			</div>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>
<div class="p-10">
	<footer class="footer text-white container ml-auto mr-auto">
    <div
		class="text-white w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
	>
		<ul class="flex flex-wrap items-center text-sm font-medium pb-4">
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6 ">Presse</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Impressum</a>
			</li>
			<li>
				<a href="#" class="mr-4 hover:underline md:mr-6">Datenschutz</a>
			</li>
			<li>
				<a href="#" class="hover:underline">Kontakt</a>
			</li>
		</ul>
		<span class="text-sm sm:text-center pb-4">
			@2023 Europa-Universität Flensburg (EUF)
		</span>
		<span class="text-sm flex items-center justify-between pb-4">
			Mit freundlicher Unterstützung von
			<img class="object-contain h-5 pl-2" src="cgi.png" alt="" />
		</span>
	</div>
	</footer>


</div>
