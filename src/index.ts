import { getArgs } from "./arg";

const x = getArgs({
    '--help': Boolean,
});
console.log(x);
