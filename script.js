
const carTable = [
    {
        size: 'L',
        capacity: 15,
        cost: 12000
    },
    {
        size: 'M',
        capacity: 10,
        cost: 8000
    },
    {
        size: 'S',
        capacity: 5,
        cost: 5000
    }
]

const calculate = () => {
    let seats = prompt("Please input a number (seat): ") 
    let result = [];
    let minCost = Infinity
    for (let i = 0; i < carTable.length; i++) {
        const { size, capacity, cost } = carTable[i];
        let totalCost = 0;
        let totalCapacity = 0;
        let index = 0
        while (totalCapacity < seats) {
            totalCost = totalCost + cost
            totalCapacity = totalCapacity + capacity
            index++
        }
        minCost = Math.min(minCost, totalCost)
        result.push({ totalCost, size, index })
    }
    return result.find(item => item.totalCost === minCost)

}
const { size, totalCost, index } = calculate()
console.log(size + " x " + index + `\nTotal = PHP ${totalCost}`)
