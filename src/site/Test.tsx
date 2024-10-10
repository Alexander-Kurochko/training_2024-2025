import {isMap} from 'node:util/types';

/*type NewComponentPropsType = {
    students: Array<StudentPropsType>
}

type StudentPropsType = {
    id: number
    name: string
    age: number
}*/

export const NewComponent = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    type topCarsPropsType = {
        manufacturer: string
        model: string
    }

    const newCar = topCars.map(myFunction)

    function myFunction(magazin: topCarsPropsType) {
        return (
            <table>
                <tr>
                    <th>Car</th>
                    <th>Model</th>
                </tr>
                <tr>
                    <td>{magazin.manufacturer}</td>
                    <td>{magazin.model}</td>
                </tr>
            </table>
        )
    }

    return <div>{newCar}</div>

    /*            return (
                    <ul>
                        {props.students.map((objectFromStudentArray, index) => {
                            return (
                                <ul>
                                    <li key={objectFromStudentArray.id}>
                                        <span>{objectFromStudentArray.name}</span>
                                        <span> age: {objectFromStudentArray.age}</span>
                                    </li>
                                </ul>
                            )
                        })}
                    </ul>
            )*/
}