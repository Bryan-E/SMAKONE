import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Icon for Email, Instagram, Line, and Youtube
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { FaLine } from "react-icons/fa";


import LogoPenabur from "../../Image/Penabur_logo.png"
import LogoOsis from "../../Image/OSIS_Logo.png"
import Logo_SMAK1 from "../../Image/Logo_SMAK1.png"
import Logo_CodeOne from "../../Image/logo_codeone.jpeg"


const Footer = () => {

  // const scrollToTargetAdjusted = (value) =>{
  //   let element = document.getElementById(`${value}`);
  //   element.scrollIntoView()
  // }

  return (
  <div>
    <footer>
    <div className='mx-auto'>


      <div className="py-20 px-10">
          <div className="bg-cover bg-footer-image rounded-xl py-24">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold leading-normal text-white text-center mb-10 break-all">
                  Cari Tahu Informasi Terkini Mengenai SMAK 1 <br/>di Instagram Kami 
                </p>
                <div>
                    <a href="https://www.instagram.com/smukiee/" target="blank" className="text-2xl text-white font-bold  rounded-full bg-light-blue py-6 px-16 flex justify-center hover:bg-blue-700">
                      @smukiee
                    </a>
                </div>
              </div>
          </div>
        </div>
      
        <div >
          <div className='pb-12 flex justify-around mx-10'>
            <div>
              <img className='object-scale-down h-8 sm:w-9/12' alt='smakone' src={Logo_SMAK1}/>
            </div>
            <div className='flex flex-col xl:text-xl gap-y-4 font-bold text-gray-500 sm:text-base sm:mr-5'>
              <Link to="/OSIS"className='text-black link-underline link-underline-black'>Osis</Link>
              <HashLink to="/OSIS#visi&misi" className='hover:text-black link-underline link-underline-black' >Visi & Misi Kami</HashLink>
              <Link to="/OSIS" className='hover:text-black link-underline link-underline-black' >Bertemu dengan Kami</Link>
              <HashLink to="/OSIS#bidang" className='hover:text-black link-underline link-underline-black' >Services</HashLink>
              <Link to="/OSIS/ASS1ST" className='hover:text-black link-underline link-underline-black' >Ass1st</Link>
            </div>
            <div className='flex flex-col xl:text-xl gap-y-4 font-bold text-gray-500 sm:text-base'>
              <Link to="/Kehidupan_smukiers" className='text-black link-underline link-underline-black'>Kehidupan SMUKIERS</Link >
              <Link to="/Kehidupan_smukiers/Tips" className='hover:text-black link-underline link-underline-black'>Tips Belajar</Link>
              <Link to="/Kehidupan_smukiers/Kegiatan" className='hover:text-black link-underline link-underline-black' >Kegiatan</Link>
              <Link to="/Kehidupan_smukiers/Alumni" className='hover:text-black link-underline link-underline-black' >Alumni</Link>
            </div>
            <div className='flex gap-x-2'>
              <a href='mailto:smak1.osis@bpkpenaburjakarta.or.id'><RiMailLine size={25}/></a>
              <a href="https://www.instagram.com/smukiee/" target="blank"><BsInstagram size={25}/></a>
              <a href="http://line.me/ti/p/~@xwk9576e" target="blank"><FaLine size={25}/></a>
              <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank"><FaYoutubeSquare size={25}/></a>
            </div>
          </div>

          <div className='bg-gray-200 '>
          <div className="grid grid-cols-1 lg:grid-cols-3 px-10">
            <div className="flex justify-self-start">
                    <img src={LogoPenabur} className="object-scale-down xl:h-28 mr-2 sm:h-16" alt="BPK PENABUR Logo"/>
                    <img src={LogoOsis} className="object-scale-down xl:h-28 sm:h-16" alt="OSIS SMAK 1 Logo"/>
                    {/* <img src={Logo_CodeOne} className="object-scale-down xl:h-28 sm:h-16 rounded-full" alt="Logo CodeOne"/> */}
            </div>
            {/* <div className="flex justify-self-center object-center py-3 lg:py-6"> */}
            <div className="flex justify-self-center place-self-end">
                <p className="text-center font-bold text-gray-500 sm:text-xs xl:text-lg">
                    Jalan Tanjung Duren Raya Nomor 4<br/>
                    Jakarta Barat, DKI Jakarta 11470<br/>
                    Tel: (+62)21 5666962
                </p>
            </div>
            <div className="place-self-end justify-self-end">
                <p className='font-bold text-gray-500 sm:text-xs sm:ml-8 xl:text-lg xl:ml-0'>
                  Copyright © 2021 SMAK ONE Student Council All Rights Reserved
                </p>
            </div>
          </div>
          </div>
        </div>
    </div>
    </footer>
  </div>
    
  )
}

export default Footer