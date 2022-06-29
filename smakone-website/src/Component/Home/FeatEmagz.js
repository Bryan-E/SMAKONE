import React from 'react'
import { NavLink } from 'react-router-dom'
import {magazineList} from '../Data/magazineList'

const Emagz = () =>{
    
    return(
        <div className='container mx-auto'>
            <div className='justify-center text-white text-center font-bold px-2 md:px-10 lg:px-20'>
                <div className='text-white mb-5 content-center text-sm sm:text-base lg:text-lg'>
                    E-Magazine
                </div>
                <div className='text-white text-white text-3xl lg:text-4xl xl:text-5xl leading-normal'>
                    <div>Keluaran E-Magazine Terbaru</div>
                </div>
                <div className='px-4 py-12'>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 sm:gap-10 md:gap-16">
                        { magazineList.reverse().slice(0,4).map((magazine, i) => 
                            <div>
                                <a href={ magazine.link } target="blank"><img src={ magazine.img } alt={ magazine.title } className='h-auto w-full justify-center'/></a>
                                <h4 className="py-4 font-medium text-center">{ magazine.title }</h4>
                            </div>
                        )}

                    </div>      
                </div>
                <button className="py-5 px-16 bg-white rounded-full">
                    <NavLink to='/OSIS/Emagz' className="link-underline link-underline-black px-3 py-2 text-black text-base sm:text-lg md:text-xl font-black">
                    Edisi Sebelumnya
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Emagz