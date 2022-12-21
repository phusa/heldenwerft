<script>
    import { env } from '$env/dynamic/public';
    export let content;
</script>

  <div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="{env.PUBLIC_CMS_URL}{content.Image.data.attributes.url}" />
      <div>
        <h3 class="text-3xl">{content.Strap}</h3>
        <h1 class="text-5xl font-bold">{content.Title}</h1>
        <h2 class="text-2xl">{content.Subtitle}</h2>
        <p class="py-6">{content.Text}</p>
        <button class="btn btn-primary">Los geht's</button>
      </div>
    </div>
  </div>