<script>
import "../app.css";
</script>
<div class="flex flex-col h-screen justify-between">
<div class="container ml-auto mr-auto">
    <header>
        <div class="navbar bg-base-100">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/">Organisationen</a></li>
                    <li><a href="/">Studenten</a></li>
                    <li><a href="/">Kontakt</a></li>
                </ul>
              </div>
              <a href="/" class="">
                <img src="logo-euf.svg" alt="" width="150">
              </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                  <li><a href="/">Organisationen</a></li>
                  <li><a href="/">Studenten</a></li>
                  <li><a href="/">Kontakt</a></li>
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                  <li><a href="/"></a></li>
                  <li><a href="/"></a></li>
                  <li><a href="/"></a></li>
                </ul>
            </div>
          </div>
    </header>
    <main>
        <slot />
    </main>
</div>
<div class="p-10 mt-20 bg-primary">
<footer class="footer text-neutral-content container ml-auto mr-auto">
  <div>
    <p>@2023 Europa-Universität Flensburg (EUF)</p>
  </div> 
  <div>
    <a class="link link-hover" href="/">Youtube</a>
    <a class="link link-hover" href="/">Facebook</a>
    <a class="link link-hover" href="/">LinkedIn</a>
    <a class="link link-hover" href="/">Instagram</a>
  </div> 
  <div>
    <a class="link link-hover" href="/">Presse</a>
    <a class="link link-hover" href="/">Impressum</a>
    <a class="link link-hover" href="/">Datenschutz</a>
    <a class="link link-hover" href="/">Barrierefreiheit</a>
    <a class="link link-hover" href="/">Kontakt</a>
  </div>
</footer>
</div>
</div>