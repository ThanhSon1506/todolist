export default function logger(reducer) {
    return (prevState, action, args) => {
        // Kiểm tra trạng thái của dữ liệu truyền vào
        console.group(action);
        console.log('Prev State: ', prevState);
        console.log('Action arguments', args);
        const nextState = reducer(prevState, action, args);
        console.log('Next State: ', nextState);
        console.groupEnd();
        return nextState;
    }
}