<script lang="ts">
	import type { Tasklog } from "$lib/types/types";

    let task:Tasklog = 
        {
            id:'1',
            description:'teste de log',
            done:false,
            date:'02/12/2024'
        };
    function exportLog(task:Tasklog){
        
    }
</script>

<main>
    <div class="history-header">
        <h1>Log of Tasking</h1>
        <button onclick={()=>{exportLog(task)}} class="primary"> Export Log</button>
    </div>
    <div class="testclass">
        <article>
            <div>
                <h1>{task.description}</h1>
                <div class="task-info">
                    <small>{task.date}</small>
                    {#if task.done}
                        <p style="font-weight:bold; color: green;">done</p>
                    {:else}
                        <p style="font-weight:bold; color: red;">not done</p>
                    {/if}    
                </div>
            </div>
        </article>
    </div>
</main>

<style>
 .testclass{
    display: flex;
    flex-direction: column;
    align-items: column;
    justify-content: space-between;
    max-width: 1920px;
    margin: 1rem;
}
 .history-header{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
 }
 .task-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 }
</style>