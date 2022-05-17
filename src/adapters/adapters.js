
export const createUserAdapter = (call) =>({
    data: call.data.results.map(items => items)
})