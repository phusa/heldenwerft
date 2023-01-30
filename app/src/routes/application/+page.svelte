<script>
	import Card from "$lib/component/element/card.svelte";
  let step = 1
</script>


<h1>TODO: Application form</h1>


<ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>

<form method="POST">

  <div class="{(step!=1)?'hidden':''}">
    step1
    <label>
      Name der Organisation
      <input name="name" type="text">
    </label>
    <div on:click={()=>step=2}>weiter</div>
  </div>

  <div class="{(step!=2)?'hidden':''}">
  step2
  <label>
    Password
    <input name="password" type="password">
  </label>
  </div>
  
  
  <button>Log in</button>
</form>