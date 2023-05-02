<script lang="ts">
    export let data: any
    const {article} = data
</script>
<form action="?/updateArt" method="POST">
    <h3>editing : {article.title}</h3>
    <label for="title">title</label>
    <input type="text" name="title" id="title" value={article.title}>
    <label for="content">content</label>
    <textarea  name="content" id="content" rows={5} value={article.content} />
        <button type="submit">update add</button>
</form>