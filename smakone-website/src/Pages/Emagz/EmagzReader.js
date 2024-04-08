import React, { useCallback } from 'react'
import { useRef } from 'react';
import { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

import Nav from '../../Component/Nav/Nav'

const images = require.context('./Cornucopia', true);
const imageList = images.keys().map(image => images(image));


const EmagzReader = () => {
    const book = useRef();
    console.log(imageList)
    return(
        <div>
            <Nav />           
            <div className="container mx-auto h-screen w-screen py-28 " >
               <HTMLFlipBook width={595} height={843} maxHeight={2160} maxWidth={3840} minHeight={100} minWidth={200} size="stretch" showCover={false}>
                    {imageList.map((image, index) => (
                        <div className='page'><img src={image} alt={index} /></div>))}
                </HTMLFlipBook>
            </div>
        </div>        
    )
}
export default EmagzReader