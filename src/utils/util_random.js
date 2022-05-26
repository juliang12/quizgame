export default function handleSuffle(options){
    return options?.sort(()=>Math.random() - 0.5)
}