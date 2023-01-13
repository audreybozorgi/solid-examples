
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
        
        return `you are buying ${this.name} with quantity of ${this.quantity} which cost you ${tempTotal}`
    }
}

class InvoiceLogger extends Invoice {
    constructor(name, authorName, year, price, quantity) {
        super(name, authorName, year, price, quantity)
    }
    loggerMethod() {
        console.log(this.total);
    }
}

const loggerClass = new InvoiceLogger('some book', 'audrey', 2020, 20,10)

loggerClass.loggerMethod(); //you are buying some book with quantity of 10 which cost you 200