var data = [
  {type:"Foo", year:1995},
  {type:"Bar", year:1993},
  {type:"Foobar", year:2020}
];

function sortByYear(data) {
  return data.sort(function(a, b) {
    return a.year - b.year
  })
}

var result = sortByYear(data)
console.log(result)
