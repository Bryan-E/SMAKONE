import React from "react"

// Import Component
import AlasanCard from "../../Component/Home/AlasanCard"
import Checklist from "../../Component/Home/Checklist"
import Kegiatan from "../../Component/Home/Kegiatan"
import SelukBeluk from "../../Component/Home/SelukBeluk"
import FeatEmagz from "../../Component/Home/FeatEmagz"


// Import Image
import Pianis from "../../Image/Home/Alasan/MichaelAbimanyu.jpeg"
import Matematikawan from "../../Image/Home/Alasan/GabrielaErin.jpeg"
import Pembulutangkis from "../../Image/Home/Alasan/DarrenJonathan.jpeg"
import Lobby_SMAK1 from "../../Image/Home/Lobby_SMAK1.jpeg"
import soc from "../../Image/Home/Kegiatan/soc.jpg"
import soundscape from "../../Image/Home/Kegiatan/soundscape.jpg"
import theater from "../../Image/Home/Kegiatan/theater.jpg"
import kriza from "../../Image/Home/Kegiatan/kriza.jpg"
import kehidupan from "../../Image/Home/Kehidupan/kehidupan.png"
import tips from "../../Image/Home/Kehidupan/tips.jpg"
import kegiatan from "../../Image/Home/Kehidupan/kegiatan.jpg"
import SummerMaylodies from "../../Image/Emagz/SummerMaylodies.png"

const Home = () => {
  return (
    <div className=''>

      {/* <div className='mt-32 col-span-6 flex flex-col justify-start text-left '> */}
      <div className='col-span-6 flex flex-col justify-start text-left '>
        <div className='px-20 py-28'>
          <h1 className='text-7xl font-black'>We Are SMAK 1</h1>
          <h4 className='text-xl font-bold'>Sekolah terbaik dengan siswa-siswi yang berpresestasi</h4>
        </div>
      </div>

      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24'>
        <div className='container mx-auto'>
          <div className='justify-center text-white text-center font-bold mb-12 px-40'>
            <div className='text-white mb-5 content-center text-lg'>
              Dengar dari SMUKIERS
            </div>
            <div className='text-white text-5xl leading-normal'>
              <div>Dengar alasan mereka mengapa</div>
              <div>mereka bersekolah di SMAK 1</div>
            </div>
          </div>
          <div className='grid grid-cols-3 justify-items-center gap-3 mt-12 '>
              <div>
                <AlasanCard
                  img = {Pianis}
                  alt = "MichaelAbimanyu"
                  desc='Pianis sekaligus musisi andalan SMUKIERS'
                  dir="Alasan/MichaelAbimanyu"
                />
              </div>
              <div>
                <AlasanCard
                  img = {Matematikawan}
                  alt = "GabrielaErin"
                  desc='Matematikawan dengan puluhan medali'
                  dir="/Alasan/GabrielaErin"
                />
              </div>
              <div>
                <AlasanCard
                  img = {Pembulutangkis}
                  alt = "DarrenJonathan"
                  desc='Pebulutangkis cerdas dengan smash yang mematikan'
                  dir="/Alasan/DarrenJonathan"
                />
              </div>
            </div>
        </div>
      </div>

      <div className='w-full h-auto mt-8 px-3 py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
            <div className='pl-20 pr-12 rounded-lg'>
                <img src={Lobby_SMAK1} alt="Lobby_SMAK1" className='h-auto w-full rounded-3xl justify-end'/>
            </div>
            <div className='container mx-auto'>
              <div className='text-6xl leading-normal font-bold pl-20 pt-8'>
                <div>Kenapa SMAK 1?</div>
              </div>
              <div className='pl-14 pr-14 mr-2 pt-10'>
                <Checklist txt='Sekolah swasta nomor 1 di Jakarta berdasarkan rerata TPS UTBK 2020' />
                <Checklist txt='Alumni SMAK 1 tersebar di seluruh dunia' />
                <Checklist txt='Sudah dikenal sampai ke mancanegara' />
              </div>
              <div className='pl-20 pr-20 pt-10'>
              <button className="py-5 px-16 bg-dark-blue rounded-full">
                <a href='https://psbjakarta.bpkpenabur.or.id' className="link-underline link-underline-white px-3 py-2 text-white text-xl font-black" target="blank">
                  Daftar Sekarang
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24'>
        <FeatEmagz month='May' img={SummerMaylodies} alt='SummerMaylodies'/>
      </div>


      <div className='w-full h-auto text-black px-16 py-32'>
        <div className='container mx-auto'>
          <div className='justify-center text-center font-bold'>
            <div className= 'mb-5 content-center text-xl'>
              Kegiatan
            </div>
            <div className='text-5xl leading-normal'>
              <div>Seputar Kegiatan di SMAK 1</div>
            </div>
          </div>
          <div className="px-8">
          <Kegiatan
            img = {soc}
            title = "Smakonecup"
            desc = "Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"
            dir = "/Kegiatan/SOC"
          />
          <Kegiatan
            img = {soundscape}
            title = "Soundscape"
            desc = "Pertunjukan spektakuler di akhir Smakonecup"
            dir = "/Kegiatan/Soundscape"
          />
          <Kegiatan
            img = {theater}
            title = "SMUKIEZ Theater Night"
            desc = "Saat berbagai seni dipadukan dan menghasilkan sebuah karya yang memukau"
            dir = "/Kegiatan/STN"
          />
          <Kegiatan
            img = {kriza}
            title = "KR1ZA"
            desc = "Terus berlatih dan raih prestasi"
            dir = "/Kegiatan/KR1ZA"
          />
          </div>
        </div>
      </div>


      <div className="w-full h-auto text-white bg-dark-blue px-16 py-32">
        <div className="container mx-auto">
          <div className='justify-center text-center font-bold mb-12 px-40'>
            <div className= 'mb-5 content-center text-xl'>
              Kehidupan SMUKIERS
            </div>
            <div className='text-5xl leading-normal'>
              <div>Cari Tahu Seluk Beluk Kehidupan</div>
              <div>Murid-Murid SMAK 1</div>
            </div>
          </div>
          <div>
          <SelukBeluk
            img = {kehidupan}
            title = "Kehidupan Selama Menjadi SMUKIERS"
            desc = "Hidup penuh keseimbangan"
            dir = "/Kehidupan_smukiers"
          />
          <SelukBeluk
            img = {tips}
            title = "Tips Belajar SMUKIERS"
            desc = "Selalu berusaha meraih yang terbaik"
            dir = "/Kehidupan_smukiers/Tips"
          />
          <SelukBeluk
            img = {kegiatan}
            title = "Kegiatan Setelah Kelas"
            desc = "Produktivitas dan istirahat yang seimbang"
            dir = "/Kehidupan_smukiers/Kegiatan"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home