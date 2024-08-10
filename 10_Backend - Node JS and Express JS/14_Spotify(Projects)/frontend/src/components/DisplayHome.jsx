import React, { useContext } from 'react'
import Navbar from './Navbar';
import AlbumItem from './AlbumItem';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SongItems from './SongItems';
import { PlayerContext } from '../contexts/PlayerContext';


register();


const DisplayHome = () => {

  const {songsData, albumsData} = useContext(PlayerContext);

  return (
    <>
      <Navbar/>
      <div className="mb-5">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <swiper-container
           space-between="8"
           watch-slides-visibility="true"
           auto-height="true"
           breakpoints='{
            "640": {
                 "slidesPerView": 3,
                 "spaceBetween": 8
            },
            "768": {
                 "slidesPerView": 3,
                 "spaceBetween": 8
            },
            "1024": {
                 "slidesPerView": 4,
                 "spaceBetween": 8
            },
            "1200": {
                 "slidesPerView": 5,
                 "spaceBetween": 8
            }
          }'
        >

        {albumsData.map((album, index) => (
            <swiper-slide key={index}>
                <AlbumItem key={index} id={album._id} name={album.name} desc={album.desc} image={album.image}/>
            </swiper-slide>
        ))}

        </swiper-container>
      </div>
      <div className="mb-5">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <swiper-container
           space-between="8"
           watch-slides-visibility="true"
           auto-height="true"
           breakpoints='{
            "640": {
                 "slidesPerView": 3,
                 "spaceBetween": 8
            },
            "768": {
                 "slidesPerView": 3,
                 "spaceBetween": 8
            },
            "1024": {
                 "slidesPerView": 4,
                 "spaceBetween": 8
            },
            "1200": {
                 "slidesPerView": 5,
                 "spaceBetween": 8
            }
          }'
        >

        {songsData.map((song, index) => (
            <swiper-slide key={index}>
                <SongItems key={index} id={song._id} name={song.name} desc={song.desc} image={song.image}/>
            </swiper-slide>
        ))}

        </swiper-container>
      </div>
    </>
  )
}

export default DisplayHome