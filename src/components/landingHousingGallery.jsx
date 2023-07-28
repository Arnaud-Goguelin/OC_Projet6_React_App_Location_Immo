import Thumb from './thumb'
import useFetch from '../utils/useFetch'
import HousingData from '../data/housing.json' 

function HousingGallery() {

    // const { data, isLoading, error } = useFetch('http://localhost:3000/src/data/housing.json');
    // const { housing } = data;
    // console.log(housing)
    // console.log(data)

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    //   }
// async function test() {
//     const data = await fetch('../data.housing.json')
//     const gooddata = await data.json()
//     console.log(data)
// }
// test()
    const housing = HousingData
    console.log(housing)

    return(
        <main>
            {housing.map(rental => (
                <Thumb
                key={rental.id} 
                />
            )
            )}
            
        </main>
    )
}

export default HousingGallery