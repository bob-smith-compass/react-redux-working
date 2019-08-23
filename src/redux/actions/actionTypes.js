export const CREATE_COURSE = "CREATE_COURSE"; 

// `yield`
let process = function*(){ while (true) console.log("next"); yield delay(500) }
// if you call p = process()
// p.next() this will kill your browser
