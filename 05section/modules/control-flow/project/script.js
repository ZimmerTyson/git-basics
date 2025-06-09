const tasks = [];

while(true) {
    let task = prompt("Enter a task or type 'done' when finished");

    if(task.toLowerCase() === 'done') {
        break;
    }

    tasks.push(task);
}

console.log("your Todo List:");

// tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`);
// });

for(let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
}