const array = [{
    name: "Katushka",
    age: 10
}, {
    name: "Masheka",
    age: 25
}, {
    name: "Kakashkin",
    age: 27
}, {
    name: "Annushka",
    age: 32
}, {
    name: "Akakiy",
    age: 60
}, {
    name: "Katushka",
    age: 40
}, {
    name: "Katushka",
    age: 44
}]

const unsortIntervals = [30, 20, 40, 50]
const intervals = unsortIntervals.sort()

const solution = {}

intervals.forEach(interval => solution[interval] = 0)
solution.lessThenMin = 0
solution.moreThenMax = 0

array.forEach((currUser) => {
    if (currUser.age < intervals[0]) {
        solution.lessThenMin++
        return
    }
    if (currUser.age > intervals[intervals.length - 1]) {
        solution.moreThenMax++
        return
    }
    const interval = intervals.find((currInterval, index) => {
        if (currUser.age >= currInterval && currUser.age < intervals[Math.min(index + 1, intervals.length)]) {
            return currInterval
        }
    })
    solution[interval]++
})

console.log(solution)
