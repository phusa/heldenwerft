<script>
import "../app.css";
</script>

<div class="container mx-auto">
    <div class="navbar h-24">
        <div class="navbar-start">
            <a href="/">
                <img src="/logo-euf.svg" alt="" width="200">
            </a>
        </div>
        <div class="navbar-center">
            <ul class="menu menu-horizontal">
                <li><a href="/">Organisationen</a></li>
                <li><a href="/">Studenten</a></li>
                <li><a href="/project">Projekte</a></li>
                <li><a href="/">Kontakt</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <!-- <div class="form-control">
                <input type="text" placeholder="Suche" class="input input-bordered" />
            </div> -->
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div class="dropdown dropdown-end">
                <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/" class="justify-between">
                            Profil
                            <span class="badge">Neu</span>
                        </a>
                    </li>
                    <li><a href="/">Einstellungen</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>

    <slot />

<footer class="footer p-10 mt-20 bg-primary text-neutral-content">
  <div>
    <p>@2023 Europa-Universität Flensburg (EUF)</p>
  </div> 
  <div>
    <a class="link link-hover">Youtube</a>
    <a class="link link-hover">Facebook</a>
    <a class="link link-hover">LinkedIn</a>
    <a class="link link-hover">Instagram</a>
  </div> 
  <div>
    <a class="link link-hover">Presse</a>
    <a class="link link-hover">Impressum</a>
    <a class="link link-hover">Datenschutz</a>
    <a class="link link-hover">Barrierefreiheit</a>
    <a class="link link-hover">Kontakt</a>
  </div>
</footer>
</div>
