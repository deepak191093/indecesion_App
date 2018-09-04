export const isAdult = (x) => x >= 18 ? 'The person is adult':'The Person is not adult'; 
const canDrink = (x) => x >= 21 ? 'The person can Drink':'The person Cannot Drink';
export let name = 'Deepak Sharma';
let isSenior = (x) => x>59 ? 'is senior' : 'not a senior'; 
export default (x) => x<18 ? 'is junior' : 'not a junior';
export { canDrink , isSenior};