
// argv
console.log(process.argv);
console.log(process.argv[2]);


// process.env
console.log(process.env);

// COMPUTERNAME
console.log(process.env.COMPUTERNAME);

// Login name
console.log(process.env.LOGNAME);

// cwd(): current working directory
console.log(process.cwd());


// title: name of current process
console.log(process.title);

// memoryUsage(): return object contains info about memory object
console.log(process.memoryUsage());


// update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

// exit(): exit from current process

process.exit(0);
console.log("Hello from after exit");

