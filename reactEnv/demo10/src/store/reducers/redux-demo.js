import { createStore } from 'redux';
export default function() {

    /* 定义规则 */
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }
    /* 根据规则生成store */
    let store = createStore(counter);

    /* 订阅 */
    store.subscribe(() => {
        console.log('fn1 -> current state', store.getState())
    });

    /* 触发规则 */
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'DECREMENT' });
}