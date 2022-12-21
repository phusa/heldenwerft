<script>
    export let content;
    console.log(content)
</script>


<div class="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
    <div class="card-body">
      <h2 class="card-title">{content.Header}</h2>
      <p>{content.Body}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Mehr</button>
      </div>
    </div>
  </div>
