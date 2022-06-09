/*
  Фильтрация

  взял массив значений и именовал их min, max, потом курсы прогнал через фильтр и сделал условие от prices и тоже разбил по значениям
  переданное первое число больше или равно первому числу в prices и так же со вторым
*/

let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

function findFunc(minMax) {
const [min, max] = minMax;
return courses.filter(({ prices }) => {
  const [minPrice, maxPrice] = prices;
  if((min >= minPrice) && (max >= maxPrice)) {
    return true;
  }
  return false;
})
}

console.log(findFunc([null, 200]))
console.log(findFunc([100, 350]))
console.log(findFunc([200, null]))

/*
  Сортировка
*/

let courses2 = [
  { name: "Courses in England", prices: 0 }, 
  { name: "Courses in Germany", prices: 500 }, 
  { name: "Courses in Italy", prices:  200 }, 
  { name: "Courses in Russia", prices: 400  },
  { name: "Courses in China", prices: 50 },
  { name: "Courses in USA", prices: 200 },
  { name: "Courses in Kazakhstan", prices: 324 },
  { name: "Courses in France", prices: Infinity },
];

courses2.sort(function(a, b) {
  return a.prices - b.prices
});

console.log(courses2)