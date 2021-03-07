import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import CatsGrid from './CatsGrid';

const Cats = () => {
    const [pageFrom, setPageFrom] = useState(0);
    const url='https://cat-finder-backend.herokuapp.com/';
    const {data, loading} = useFetch(`${url}api/cats/?from=${pageFrom}&limit=${10}`);

    return (
        <div className='ui__cats-main'>
                <h1>🌈 Find your favorite cat images😻</h1>

            <div className='ui__cats-main'>
                <div className='ui__cats-container'>
                    {
                        loading?
                        <div className="loader">Loading...</div>
                        :
                        <CatsGrid data={data} limit={pageFrom}/>
                    }
                </div>
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
            </div>
        </div>
    );
};

export default Cats;