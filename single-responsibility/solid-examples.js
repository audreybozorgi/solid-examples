
class Book {
    constructor(name, authorName, year) {
        this.name = name
        this.authorName = authorName
        this.year = year
    }
}

class Invoice extends Book{
    
    constructor(name, authorName, year, price, quantity) {
        super(name, authorName, year)
        this.price = price
        this.quantity = quantity
        this.total = this.totalCalculator()
    }

    totalCalculator() {
        let tempTotal = 0
        tempTotal = this.price * this.quantity
        
        return `you are buying ${this.name} with quantity of ${this.quantity} which const you ${tempTotal}`
    }

    loggerMethod() {
        console.log(`total price is ${this.total}$`)
    }
}

const myInvoice = new Invoice('Harry', 'someone', 1999, 20, 10)
console.log(myInvoice);
myInvoice.loggerMethod()