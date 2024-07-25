import { FaHome } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';
import img6 from '../images/img-6.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';
import img10 from '../images/img-10.jpg';
import song1 from '../allmusic/1.mp3';
import song2 from '../allmusic/2.mp3';
import song3 from '../allmusic/3.mp3';
import song4 from '../allmusic/4.mp3';  
import song5 from '../allmusic/5.mp3';
import song6 from '../allmusic/6.mp3';
import song7 from '../allmusic/7.mp3';
import song8 from '../allmusic/8.mp3';
import song9 from '../allmusic/9.mp3';
import song10 from '../allmusic/10.mp3';


const menuList = [
    {
        id: 1,
        title: "Home",
        icon: FaHome
    },
    {
        id: 2,
        title: "Music",
        icon: RiCustomerServiceFill
    },
    {
        id: 3,
        title: "Video",
        icon: FaPhotoVideo

    },
    {
        id: 4,
        title: "Profile",
        icon: IoIosContact
    },
];


const musicList = [
    {
        id: 1,
        title: "Chot Dil Pe Lagi Ishq Vishk Rebound",
        img: img1,
        song: song1
    },
    {
        id: 2,
        title: "Gore Gore Mukhde Pe Ishq Vishk Rebound",
        img: img2,
        song: song2
    },
    {
        id: 3,
        title: "Ishq Vishk Pyaar Vyaar Ishq Vishk Rebound",
        img: img3,
        song: song3
    },
    {
        id: 4,
        title: "Jaanam Bad Newz",
        img: img4,
        song: song4
    },
    {
        id: 5,
        title: "Maar Udi Sarfira",
        img: img5,
        song: song5
    },
    {
        id: 6,
        title: "Rabb Warga Bad Newz",
        img: img6,
        song: song6
    },
    {
        id: 7,
        title: "Sarphira Chandu Champion",
        img: img7,
        song: song7
    },
    {
        id: 8,
        title: "Satyanaas Chandu Champion",
        img: img8,
        song: song8
    },
    {
        id: 9,
        title: "Tu Hai Champion Chandu Champion",
        img: img9,
        song: song9
    },
    {
        id: 10,
        title: "Zor Ki Barsaat Hui Jubin Nautiyal",
        img: img10,
        song: song10
    },
];

export { 
    menuList, 
    musicList, 
};