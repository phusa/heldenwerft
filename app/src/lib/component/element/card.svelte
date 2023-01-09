<script>
    import { env } from '$env/dynamic/public';
    export let content;
</script>


<div class="card card-side bg-base-100 shadow-xl">

    <figure><img src="{env.PUBLIC_CMS_URL}{content.Image.data.attributes.url}" alt=""/></figure>

    
    <div class="card-body">
      <h2 class="card-title">{content.Title}</h2>
      <p>{content.Text}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Mehr</button>
      </div>
    </div>
  </div>
