<script lang="ts">
// imports
    import TasksList from "$lib/components/tasks-list.svelte";
    import type { Task, Filter } from "$lib/types/types";
    import TaskForm from "$lib/components/task-form.svelte";
// variables
    let currentFilter = $state<Filter>("all");
    let tasks = $state<Task[]>([]);
    let totalDone = $derived(tasks.reduce(
        (total, task) => total + Number(task.done), 0
    ));
    let filteredTasks = $derived.by(() =>{
        switch(currentFilter){
            case "all": {
                return tasks;
            }
            case "done": {
                return tasks.filter((task) => task.done);
            }
            case "todo": {
                return tasks.filter((task) => !task.done);
            }
        }
        return tasks;
    });
// functions
    function addTask(newTask: string) {
        tasks.push({
            id: crypto.randomUUID(),
            title: newTask,
            done: false,
        });
    }
    function toggleDone(task: Task) {
        task.done = !task.done;
    }
    function removeTask(id: string) {
        const index = tasks.findIndex(
            (task) => task.id === id
        );
        tasks.splice(index, 1);
    }
</script>

<!-- snippets -->
{#snippet filterButton(filter: Filter)}
    <button 
        onclick={()=> currentFilter = filter}
        class:contrast={currentFilter === filter} 
        class="secondary filterButton"> {filter}
    </button>
{/snippet}

<!-- main html -->
<main>
    <div>
        <TaskForm {addTask}/>
        {#if tasks.length}
            <p> {totalDone} / {tasks.length} tasks completed </p>
            <div class="button-container">
                {@render filterButton("all")}
                {@render filterButton("todo")}
                {@render filterButton("done")}
            </div>
        {:else}
            <div class="emptyTasks">
                <p> Write a task to get started</p>
            </div>
        {/if}

        <TasksList tasks={filteredTasks} {toggleDone} {removeTask}/>
    </div>
</main>

<!-- styling -->
<style>
    main {
        margin: 1rem;
        max-width: 1920px;
        max-height: 1080px;
    }

    .button-container {
        display: flex;
        justify-content: end;
        margin-bottom: 1rem;
        gap: 0.5rem;
    }

    .filterButton{
        text-transform: capitalize;
    }
    .emptyTasks{
        text-align: center;
        display: flex;
    }
</style>