//각각의 기능에 따라 분류해서 최적화한다. 
import { reactive } from 'vue'

export const state = reactive({ //반응형 데이터로 만들어줌
    msg: 'Hello Vue?!',
    count: 1
})
export const getters = {
    reversedMsg() {
        return state.msg.split('').reverse().join('')
    }
}
export const mutations = { //mutations:데이터의갱신
    increaseCount() {
        state.count +=1
    },
    decreaseCount() {
        state.count -=1
    },
    updateMsg(newMsg) {
        state.msg = newMsg
    }
}

export const actions = { //actions:데이터 불러오기 & 활용
    async fetchTodo() {
        const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
        console.log(todo)
        mutations.updateMsg(todo.title)
    } //비동기 처리
}