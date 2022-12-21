<script>
    import { env } from '$env/dynamic/public';
    export let content;
    console.log(content)
</script>


<div class="card card-side bg-base-100 shadow-xl">

    <figure><img src="{env.PUBLIC_CMS_URL}{content.Image.data.attributes.url}" alt=""/></figure>

    
    <div class="card-body">
      <h2 class="card-title">{content.Header}</h2>
      <p>{content.Body}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Mehr</button>
      </div>
    </div>
  </div>
