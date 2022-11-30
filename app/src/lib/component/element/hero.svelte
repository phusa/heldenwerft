<script>
    export let content;
</script>

<div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://placeimg.com/600/400/people" class="" alt=""/>
        <div class="">
            <h1 class="text-4xl font-bold">{content.Title}</h1>
            <h2 class="text-2xl">Lernen durch Engagement</h2>
            <p class="py-6">{content.Description}</p>
            <button class="btn btn-primary">Mehr erfahren</button>
        </div>
    </div>
</div>