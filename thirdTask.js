const array = [{
    name: "Katushka",
    age: 10
}, {
    name: "Masheka",
    age: 20
}, {
    name: "Kakashkin",
    age: 27
}, {
    name: "Annushka",
    age: 42
}, {
    name: "Akakiy",
    age: 60
}, {
    name: "Katushka",
    age: 50
}, {
    name: "Katushka",
    age: 40
}]

const unsortIntervals = [30, 20, 40, 50]
const intervals = unsortIntervals.sort()

const solution = {}
solution.lessThenMin = 0
intervals.forEach((interval, i, arr) => {
    if (i < arr.length - 1) {
        solution[interval] = 0
    } 
})
solution.moreThenMax = 0

array.forEach((currUser) => {
    if (currUser.age < intervals[0]) {
        solution.lessThenMin++
        return
    }
    if (currUser.age >= intervals[intervals.length - 1]) {
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

console.log('до', intervals[0], '--', solution.lessThenMin, "\n")

intervals.forEach((interval, i, arr) => {
    if (i < arr.length - 1) {
        console.log(`${interval}-${arr[Math.min(i + 1, arr.length)]} -- ${solution[interval]}\n`)
    }
})
console.log("больше", intervals[intervals.length-1], "--", solution.moreThenMax)
