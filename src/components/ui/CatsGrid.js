import PageNotFound from './PageNotFound';
import React from 'react'

export const CatsGrid = (data) => {
    if(typeof data === typeof {}){
        if(data.data.cats.length !== Number(0)){

            const cats = data.data.cats;
            return (
                <div className='ui__cats_grid-wrapper'>
                    {
                        cats.map((cat, i)=>{
                            return (
                                <div className='ui__cats-card animate__zoomIn' key={i}>
                                    <img src={String(cat.img_url)} alt='' className='ui__cats-card-image'></img>
                                    <div className='ui__cats-info'>
                                        <a href={String(cat.img_url)} className='card-btn' target='_blank' rel='noreferrer' >
                                            <h3>View More</h3>
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );

        }else{

            return (
                <PageNotFound />
            );
        };

    }else{
        return (
            <PageNotFound />
        );
    };
};

export default CatsGrid