import React, { useEffect, useState } from 'react'
import bgImage from "../Assets/hero.png"
import { apiCall } from "../redux/coinsSlice"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import Animate from '../Assets/SimpleAnimate'
import WordAnimate from '../Assets/WordAnimate'
import GetStarted from '../Components/GetStarted'
import p1 from "../Assets/Partners/p1.svg"
import p2 from "../Assets/Partners/p2.svg"
import p3 from "../Assets/Partners/p3.svg"
import p4 from "../Assets/Partners/p4.svg"
import p5 from "../Assets/Partners/p5.svg"
import p6 from "../Assets/Partners/p6.svg"
import p7 from "../Assets/Partners/p7.svg"
import p8 from "../Assets/Partners/p8.svg"
import p9 from "../Assets/Partners/p9.svg"
import CoinInfo from '../Components/CoinInfo'
import "./scroll.css"
import Footer from '../Components/Footer'
const Home = () => {

    const lineBreak = 310;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.coins.pending);
    const data = useSelector((state) => state.coins.data);
    useEffect(() => {
        dispatch(apiCall());

    }, [dispatch])



    const handleResize = () => {

        setwindowWidth(window.innerWidth);
    }

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resisze", handleResize);
        };
    }, []);
    const statements = [{ first: "Download crypto Wallet", second: "Get on PC or Mobile to create,send,receive bitcoins", image: "https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-1.svg" },
    {
        first: "Add Coins to your Wallet",
        second: "Add bitcoins you've created or exchanged via credit card",
        image: "https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-2.svg"
    },
    {
        first: "Buy/Sell with Wallet",
        second: "Enter receiver's address,specify the ammount and send",
        image: "https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-how-it-work-3.svg"
    }

    ]
    const Partners = [
        { image: p1 }, { image: p2 }, { image: p3 }, { image: p4 }, { image: p5 }, { image: p6 }, { image: p7 }, { image: p8 }, { image: p9 }
    ]

    return (

        <div className='bg-customBg'>

            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className='bg-center bg-no-repeat h-[90vh] bg-cover flex items-center justify-center flex-col bg-slate-800'
            >
                <div>
                    <h5 className='text-customYellow text-sm'>Welcome to Cryptonex</h5>
                </div>
                <div className='flex items-center justify-center flex-col  text-white text-center'>
                    <h1 className='text-4xl text-bold w-[100%] mt-4 sm:text-6xl lg:text-7xl'>
                        <WordAnimate text="Easy Way to" />{' '}
                        <span className='text-customYellow'>
                            <WordAnimate text="Bitcoin" />
                            <br />
                        </span>{' '}
                        <WordAnimate text="Key to Success" />
                    </h1>
                    <p className='mt-8 w-[90%] text-md sm:text-lg sm:w-[70%] md:w-[60%] lg:w-[40%]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quis? Cumque, numquam. Nulla, quo
                        amet! Pariatur doloremque expedita laboriosam, iste consequatur magni nulla.
                    </p>
                    <button className='bg-customYellow rounded-md px-6 py-3 mt-8 font-semibold'>
                        Join for free
                    </button>
                </div>
            </div>
            {/* marquee */}
            <marquee className='flex flex-row justify-center items-center h-16 bg-customSlate'>
                {data && data.map((item, index) => (
                    <>
                        <img src={item.image} alt={`Image ${index}`} className='inline mr-4 ' width={40} />
                        <p className='inline text-white mr-14'>
                            {item.name}
                        </p>
                    </>

                ))}
            </marquee>
            <div className='text-white text-center mt-14  ' >
                <h6 className='text-customYellow'>
                    About CryptoNex
                </h6>
                <p className='text-3xl md:text-5xl text-white text-center text-bold mt-4 '>

                    Simple.Faster.{windowWidth < lineBreak && (<br />)}Reliable
                </p>
            </div>
            {/* main Section */}
            <div className='flex flex-col justify-between items-center mt-20 lg:flex-row lg:w-[98%] xl:w-[70%] lg:mx-auto'>



                <div className='flex flex-col justify-center items-center w-[95%] lg:w-[60%] xl:w-[50%] bg-red gap-4 md:flex-row'   >
                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-1.jpg" alt="" className='rounded-lg w-full lg:w-[50%] xl:w-[48%] ' />




                    <div className='w-full lg:w-1/2 lg:flex lg:flex-col lg:gap-2 xl:gap-2 justify-center ' >
                        <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-2.jpg" alt="" className='rounded-lg w-full xl:w-[98%]' />
                        <div className='mt-4 lg:mt-1 border bg-customSlate border-slate-500 rounded-lg py-4 lg:py-2 xl:py-4 flex items-center'>
                            <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-bitcoin-exchange.svg" className='mr-4 ml-5' />
                            <h1 className='text-white  text-lg lg:text-xl text-bold '>
                                Bitcoin Information
                            </h1>
                        </div>
                    </div>

                </div>




                <div className='text-customWhite text-left ml-6 mt-4 lg:w-[70%] xl:w-[40%] '>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        <br /><br />
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
                    </p>
                    <div >
                        <ol className="list-decimal pl-0  mt-10 flex flex-col md:flex-row md:gap-[0] md:justify-between  md:w-[75%] gap-8">
                            <div className='flex flex-col gap-8 '>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Designed for everyone
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Trade as you go
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    All tools you want
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Automatic conversion
                                </li>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Multiple asset classes
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Simple to manage
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Scan.Convert.Pay
                                </li>
                                <li className="flex items-center">
                                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-checkbox.svg" className="h-6 w-5 mr-2" alt="tick" />
                                    Quick to set up
                                </li>
                            </div>
                        </ol>
                        <button className="inline-flex text-white items-center animation motion-reduce:hover:ease-in-out bg-customYellow border-0 py-5 px-5 mt-10 xl:mt-8 rounded  " style={{ transitionDuration: "0.4s" }}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            {/* Get Started */}
            <div>
                <div className='text-white text-center mt-14  ' >
                    <h6 className='text-customYellow'>
                        How it works
                    </h6>
                    <p className='text-3xl md:text-5xl text-white text-center text-bold mt-4 '>
                        Get started  {windowWidth < lineBreak && (<br />)}with CryptoNex
                    </p>
                </div>
                <div className='flex flex-col gap-10 mt-16 md:flex-row md:w-[98%] 2xl:w-[70%] 2xl:gap-16 md:mx-auto'>
                    {
                        statements.map((data, index) => {
                            return (<GetStarted statements={data} key={index} />)
                        })
                    }
                </div>
            </div>

            {/* Partners */}
            <div className='mt-16 '>
                <div className='text-white text-center' >
                    <h6 className='text-customYellow'>
                        Executive Partners
                    </h6>
                    <p className='text-3xl md:text-5xl text-white text-center text-bold mt-4 '>
                        100+ Partners {windowWidth < lineBreak && (<br />)}and Supporters
                    </p>
                </div>
                <div className=' flex flex-wrap items-center justify-center gap-8 w-[93%] 2xl:w-[90rem] mx-auto mt-16'>
                    {
                        Partners.map((partner, index) => {
                            return (
                                <img src={partner.image} className='w-36 lg:w-52' />
                            )
                        })
                    }
                </div>
            </div>
            {/* marquees */}

            <div className='text-white text-center mt-16' >
                <h6 className='text-customYellow'>
                    Price
                </h6>
                <p className='text-3xl md:text-5xl text-white text-center text-bold mt-4 '>
                    Explore Cryptocurrency {windowWidth < lineBreak && (<br />)}Price
                </p>
            </div>
            <marquee className="mt-24" scrollamount="20" >
                <div className='flex gap-6'>
                    {data.map((instance, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div key={index} className="w-72">
                                    <CoinInfo data={instance} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </marquee>
            <marquee className="mt-24" scrollamount="25" direction="right"   >
                <div className='flex gap-4' style={{ minWidth: "500px" }}>
                    {data.map((instance, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-72">
                                    <CoinInfo data={instance} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </marquee>
            <div className='mt-32'>
                <Footer />
            </div>
        </div>

    )
}

export default Home
