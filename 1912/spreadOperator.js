// const first = [1,2,3];
// const second = [4,5,6];

// // const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];

const first = { name: 'Wayne' };
const second = { job: 'Dev' };

const combined = {...first, ...second, location: 'Melbourne' };
console.log(combined);

const clone = {...first};

