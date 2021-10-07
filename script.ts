{

    const showMyName = (name: string): void => {
        console.log(name)
    }

    showMyName('John')

    const square = (a: number): number => {
        return a * a
    }

    square(10)

    const sum = (title: string, ...numbers: number[]): string => {
        return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
    }

    sum('Numbers', 1, 6, 10)

    const executeFunc = (func: (title: string, age: number, hobbies: string[]) => void) => {
        const title: string = 'Lorem Ipsum'
        func(title, 24, ['Sport', 'Movies'])
    }

    executeFunc((title, age, hobbies) => { return true })

}