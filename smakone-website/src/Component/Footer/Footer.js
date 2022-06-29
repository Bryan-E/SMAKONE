import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Icon for Email, Instagram, Line, and Youtube
import { RiMailLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";


import LogoPenabur from "../../Image/Penabur_logo.png"
import LogoOsis from "../../Image/OSIS_Logo.png"
import Logo_SMAK1 from "../../Image/Logo_SMAK1.png"
import Logo_CodeOne from "../../Image/logo_codeone.png"


const Footer = () => {

  // const scrollToTargetAdjusted = (value) =>{
  //   let element = document.getElementById(`${value}`);
  //   element.scrollIntoView()
  // }

  return (
  <div>
    <footer>
    <div className='mx-auto'>


      <div className="py-20 px-12">
          <div className="bg-cover bg-footer-image rounded-xl py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
              <div className="flex flex-col items-center">
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-normal text-white text-center mb-10 mx-6">
                  Cari Tahu Informasi Terkini Mengenai SMAK 1 <br/>di Instagram Kami 
                </p>
                <div>
                    <a href="https://www.instagram.com/smukiee/" target="blank" className="text-2xl text-white font-bold  rounded-full bg-light-blue py-6 px-12 flex justify-center hover:bg-blue-700">
                    <div className='flex gap-2'>
                      <div className='mt-0.5'>
                      <BsInstagram size={30}/>
                      </div>
                    <span>smukiee</span>
                    </div>
                    </a>
                </div>
              </div>
          </div>
        </div>
      
        <div >
          <div className='pb-12 flex justify-around mx-10'>
            <div>
              <img className='object-scale-down h-8 w-7/12 sm:w-9/12' alt='smakone' src={Logo_SMAK1}/>
            </div>
            <div className='flex flex-col xl:text-xl gap-y-4 font-bold text-gray-500 text-sm sm:text-base sm:mr-5 -ml-20 sm:-ml-10'>
              <Link to="/OSIS"className='text-black link-underline link-underline-black'>Osis</Link>
              <HashLink to="/OSIS#visi&misi" className='hover:text-black link-underline link-underline-black' >Visi & Misi Kami</HashLink>
              <Link to="/OSIS" className='hover:text-black link-underline link-underline-black' >Bertemu dengan Kami</Link>
              <HashLink to="/OSIS#bidang" className='hover:text-black link-underline link-underline-black' >Services</HashLink>
              <Link to="/OSIS/ASS1ST" className='hover:text-black link-underline link-underline-black' >Ass1st</Link>
            </div>
            <div className='flex flex-col text-sm sm:text-base xl:text-xl gap-y-4 font-bold text-gray-500 '>
              <Link to="/Kehidupan_smukiers" className='text-black link-underline link-underline-black'>Kehidupan SMUKIERS</Link >
              <Link to="/Kehidupan_smukiers/Tips" className='hover:text-black link-underline link-underline-black'>Tips Belajar</Link>
              <Link to="/Kehidupan_smukiers/Kegiatan" className='hover:text-black link-underline link-underline-black' >Kegiatan</Link>
              <Link to="/Kehidupan_smukiers/Alumni" className='hover:text-black link-underline link-underline-black' >Alumni</Link>
            </div>
            <div className='flex flex-col lg:flex-row gap-y-2 lg:gap-x-2'>
              <div className=''>
              <a href='mailto:smak1.osis@bpkpenaburjakarta.or.id'><RiMailLine size={26}/></a>
              </div>
              <a href="https://www.instagram.com/smukiee/" target="blank"><FaInstagram size={25}/></a>
              <a href="http://line.me/ti/p/~@xwk9576e" target="blank"><FaLine size={25}/></a>
              <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank"><FaYoutubeSquare size={25}/></a>
            </div>
          </div>
          <div className='bg-gray-200 px-10'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 ">
                        <div className="flex justify-self-center lg:justify-self-start pt-6 pb-3">
                                <img src={LogoPenabur} className="object-scale-down h-20 mr-2" alt="BPK PENABUR Logo"/>
                                <img src={LogoOsis} className="object-scale-down h-20" alt="OSIS SMAK 1 Logo"/>
                        </div>
                        <div className="flex justify-self-center object-center my-auto">
                            <p className="text-center align-center font-bold text-gray-500 xl:text-lg">
                                Jalan Tanjung Duren Raya Nomor 4<br/>
                                Jakarta Barat, DKI Jakarta 11470<br/>
                                Tel: (+62)21 5666962
                            </p>
                        </div>
                        <div className="flex justify-self-center lg:justify-self-end py-5 my-auto">
                                <img src={Logo_CodeOne} className="object-scale-down h-12 mr-2" alt="Logo CodeOne"/>
                        </div>
                    </div>
                </div>
                </div>
            <div className="bg-gray-100 text-center py-1 text-xs">
                <p>
                    Copyright © 2021 SMAK ONE Student Council All Rights Reserved
                </p>
            </div>

        </div>
    </div>
    </footer>
  </div>
    
  )
}

export default Footer