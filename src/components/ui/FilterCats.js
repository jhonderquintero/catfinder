import React, {useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import CatsGrid from './CatsGrid';

export const FilterCats = () => {
    const [pageFrom, setPageFrom] = useState(0);
    const [category, setCategory] = useState(1);
    const url='https://cat-finder-backend.herokuapp.com';

    const handleChange = (e) =>{
        setCategory(e.target.value);
        setPageFrom(0);
    };

    const {data, loading} = useFetch(`${url}/api/cats/category?from=${pageFrom}&limit=${10}&category_id=${category}`);

    return (
        <div className='ui__cats-main'>
            <h1>🔥 Select any category and fun 🙀 </h1>

            <div className='mg-20'></div>

            <div className="ui__cats-select select">
                <select id="slct" onChange={handleChange}>
                    <option disabled>Choose an option</option>
                    <option value="1">Hats</option>
                    <option value="2">Space</option>
                    <option value="4">Sunglasses</option>
                    <option value="5">Boxes</option>
                    <option value="7">Ties</option>
                    <option value="14">Sinks</option>
                    <option value="15">Clothes</option>
                </select>
            </div>
            <main className='ui__cats-main'>

            {
                loading?
                <div className="loader">Loading...</div>
                :
                <CatsGrid data={data} limit={pageFrom}/>
            }

                {loading?
                null
                :
                <div className='ui__cats-page-btns'>
                    {
                        (pageFrom > 0)?
                        <button className='ui__cats-button button' onClick={()=> setPageFrom(pageFrom-10)}>
                            Back
                        </button>
                        : 
                        null
                    }
                    <button className='ui__cats-button button' onClick={()=> setPageFrom(pageFrom+10)}>
                        Next
                    </button>
                </div>
                }

            </main>
        </div>
    );
};

export default FilterCats;