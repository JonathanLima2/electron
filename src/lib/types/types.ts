export type Task = {
    id: string;
    title: string;
    done: boolean;
}

export type Tasklog = {
    id: string;
    description:string;
    done: boolean;
    date: string;
}

export type Filter = "all" | "todo" | "done";