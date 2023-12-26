// Thos node lobrary used to get info about Operating System
// User to work with OS

const os=require('os')

// console.log(os.arch()); // find architecture of your OS

// console.log(os.freemem()/(1024*1024*1024)) // tells free ram in GB
// console.log(os.totalmem()/(1024*1024*1024)) // tells total ram in GB
// console.log(os.hostname()) // name of your pc
// console.log(os.platform()) // OS type
console.log(os.userInfo()) // basic info