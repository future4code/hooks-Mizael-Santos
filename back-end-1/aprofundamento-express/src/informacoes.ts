type Afazeres = {
    userId: string | number, 
    id: string | number,
    title:  string,
    completed: boolean
}


export const arrayAfazeres: Afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "correr",
        completed: true
    },

    {
        userId: 2,
        id: 2,
        title: "jogar futebol",
        completed: false
    },

    {
        userId: 3,
        id: 3,
        title: "tarefas",
        completed: true
    },


    {
        userId: 4,
        id: 4,
        title: "treinar",
        completed: false
    }
]