const tasks = ['Задача 1', 'Задача 2'];
function add(task) {
    tasks.push(task);
    return tasks;
}
console.log(add('Задача 3'));

function remove(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    return tasks;
}
console.log(remove('Задача 1'));

function prioritize(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        const temp = tasks.splice(index, 1)[0];
        //tasks.splice(index, 1) ['Задача 3'] — массив
        //tasks.splice(index, 1)[0] 'Задача 3'  — сам элемент
        tasks.unshift(temp);
    }
    return tasks;
}
console.log(prioritize('Задача 3'));

проще

// const tasks = ['Задача 1',];
// function add(task) {
//     tasks.push(task);
// }

// function remove(task) {
//     const index = tasks.indexOf(task);
//     tasks.splice(index, 1)
// }

// function prioritize(task) {
//     const index = tasks.indexOf(task);
//     const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }
// add('Задача 2')
// add('Задача 3')
// console.log(tasks);
// remove('Задача 1')
// console.log(tasks);
// prioritize('Задача 3')
// console.log(tasks);

