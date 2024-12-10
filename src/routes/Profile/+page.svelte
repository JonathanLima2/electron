<script lang="ts">
    let user = {
        name:"name",
        id:"123456",
        birthday:"12/12/1999",
        country:"Brasil"
    };

</script>

<main>
    <form class="list-container">
        <div class="list-item">
            <h2>Name</h2>
            <input class="input-user" placeholder={user.name}>
        </div>
        <div class="list-item">
            <h2>UserId</h2>
            <input class="input-user" placeholder={user.id}>
        </div>
        <div class="list-item">
            <h2>birthday</h2>
            <input class="input-user" type="date" placeholder={user.birthday}>
        </div>
        <div class="list-item">
            <h2>country</h2>
            <input class="input-user dropdown" placeholder={user.country}>
        </div>
        <button class="btn-submit" type="submit">Save</button>
    </form>
</main>

<style>
    .list-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .list-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }
    .btn-submit{
        max-width: 200px;

    }
    .input-user{
        display: flex;
    }
</style>