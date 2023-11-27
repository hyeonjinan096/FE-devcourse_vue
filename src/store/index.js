import {createStore} from 'vuex'

export default createStore({
    state() {  // 데이터 추가(함수로 반환)
        return {
            msg: 'Hellovue',
            count: 1
        }
    },
    getters: { //계산된 데이터
        reversedMsg(state) {
            return state.msg.split('').reverse().join('')
        }
    },
    mutations: { //데이터 갱신 (동기)
        increaseCount(state) {
            state.count +=1
        },
        updateMsg(state, newMsg) {
            state.msg = newMsg
        }
    },
    actions: { //데이터 활용 로직 (mutations외에 동작들) (비동기)
        //context => store. getters. commit(mutations실행). dispatch(actions실행)
        //context 안에 commit만 사용 
        async fetchTodo({commit}) {
            const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => res.json())
            console.log(todo)
            //mutations.updateMsg(todo.title)
            commit('updateMsg', todo.title)
        }
    }
})