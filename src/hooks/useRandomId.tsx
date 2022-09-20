export function useRandomId (){
    const id = Math.floor(Math.random() * 1000)
    return {
        id
    }
}