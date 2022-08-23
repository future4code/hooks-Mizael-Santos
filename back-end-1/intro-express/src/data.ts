type Users = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: string,
}


export const arrayUsers: Users[] = [
    {
        id: "1",
        name: "Mizael",
        phone: "32659874",
        email: "mizael@gmail.com",
        website: "www.mizael.com.br"
    },

    {
        id: "2",
        name: "Mu",
        phone: "32639874",
        email: "mu@gmail.com",
        website: "www.mu.com.br"
    },

    {
        id: "3",
        name: "vini",
        phone: "32650874",
        email: "vini@gmail.com",
        website: "www.vini.com.br"
    },

    {
        id: "4",
        name: "Ruan",
        phone: "32659872",
        email: "ruan@gmail.com",
        website: "www.ruan.com.br"
    }


]






export const arrayPosts: Posts[] = [
    {
        id: 1,
        title: "ola mundo , asdsdfdafdd",
        body: "oi , me chamo tatata , asdsadsad",
        userId: "1",
    },

    {
        id: 2,
        title: "ola mundo , asdsadasdas",
        body: "oi , me chamo tatata , sadsada",
        userId: "2",
    },

    {
        id: 3,
        title: "ola mundo , me chamo mi",
        body: "oi , me chamo tatata ,  e fui tatata",
        userId: "3",
    },

    {
        id: 4,
        title: "ola mundo ,asdasdsada",
        body: "oi , me chamo tatata , sadasduhiuhiuasdas",
        userId: "4",
    }


]

// EU PREFIRO SEPARADO FICA MAIS ORGANIZADO , PARA TRABALHAR.
