let person
person = 'Rory'
import array from './utilies/arrays'

const buildPerson = (person: string) => {
    return 'your person is ${person}';
}

console.log(buildPerson(person))

enum Compass {North, South, East, West}
const move = (dist: number, direction: Compass) => {
    return 'walk' + dist + 'paces' + direction
}