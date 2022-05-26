import handleSuffle from "../utils/util_random"

export const createUserAdapter = (call) =>({
    data: call.results.map((question)=>({
        ...question,
        answers: handleSuffle([question.correct_answer, ...question.incorrect_answers])
    }))
})