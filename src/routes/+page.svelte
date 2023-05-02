<script lang="ts">
    export let data : import("./$types").PageData
    const {articles} = data
</script>
<div class="">
    <h2>articles</h2>
   {#each articles as item (item.id)}
     <!-- content here -->
     <article>
        <header>{item.title}</header>
        <p>{item.content}</p>
        <form action="?/deleteArt&id={item.id}" method="post">
            <button class="outline secondary">delete article</button>
        </form>
   
        <a href="/{item.id}" class="outline constrast" role="button">edit</a>
    </article>
     {/each}
 


<form action="?/creation" method="POST">
    <h3>new article</h3>
    <label for="title">title</label>
    <input type="text" name="title" id="title">
    <label for="content">content</label>
    <textarea  name="content" id="content" rows={5} />
        <button type="submit">add</button>
</form>
</div>