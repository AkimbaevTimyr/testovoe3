export const usePagination = (page: number) =>{
    const contentPerPage  = 5;
    const lastIndex = page * contentPerPage
    const firstIndex = lastIndex - contentPerPage
    return {
        lastIndex,
        firstIndex
    }
}