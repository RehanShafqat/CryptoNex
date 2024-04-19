import React, { useEffect, useState } from 'react'
import bgImage from "./Assets/hero.png"
import { apiCall } from "./redux/coinsSlice"
import { useDispatch, useSelector } from "react-redux"

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




    return (

        <div className='bg-customBg'>
            <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-center bg-no-repeat h-[90vh] bg-cover flex items-center , justify-center flex-col bg-slate-800'     >
                <div >
                    <h5 className='text-customYellow text-sm' >
                        Welcome to Cryptonex
                    </h5>
                </div>
                <div className='flex items-center justify-center flex-col text-white text-center'>
                    <h1 className='text-4xl  text-bold w-[70%] mt-4 sm:text-6xl lg:text-7xl '>
                        Easy Way to <span className='text-customYellow' >Bitcoin <br /></span> Key to Success.
                    </h1>
                    <p className='mt-8 w-[90%] text-md sm:text-lg sm:w-[70%] md:w-[60%] lg:w-[40%]' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quis? Cumque, numquam. Nulla, quo amet! Pariatur doloremque expedita laboriosam, iste consequatur magni nulla.
                    </p>
                    <button className='bg-customYellow rounded-md px-6 py-3 mt-8  font-semibold'>
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
                <p className='text-3xl text-white text-center text-bold mt-4 overflow-x-auto'>

                    Simple.Faster.{windowWidth < lineBreak && (<br />)}Reliable
                </p>
            </div>
            {/* main Section */}
            <div className='flex flex-col  justify-center items-center mt-6'>
                <div className='flex flex-col justify-center items-center w-[95%] gap-4 md:flex-row'   >

                    <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-1.jpg" alt="" className='rounded-lg w-full' />
                    <div className='w-full' >
                        <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/about-us-2.jpg" alt="" className='rounded-lg w-full' />
                        <div className='mt-4 border bg-customSlate border-slate-500 rounded-lg py-4 flex items-center '>
                            <img src="https://demo.awaikenthemes.com/html-preview/quivox/html/images/icon-bitcoin-exchange.svg" className='mr-4 ml-5' />
                            <h1 className='text-white text-lg text-bold'>
                                Bitcoin Information
                            </h1>
                        </div>
                    </div>

                </div>

                <div className='text-white text-left ml-6 mt-4'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        <br /><br />
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.
                    </p>
                </div>
            </div>








        </div>

    )
}

export default Home
