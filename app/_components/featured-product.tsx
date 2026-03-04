import React from 'react'
import Card from './Card'
import img1 from '../../public/_images/IMG_9027.jpg'
import img2 from '../../public/_images/IMG_8992.jpg'
import img3 from '../../public/_images/IMG_8994.jpg'
import img4 from '../../public/_images/IMG_9024.jpg'
import img5 from '../../public/_images/IMG_9025.jpg'
import img6 from '../../public/_images/IMG_9026.jpg'
import img7 from '../../public/_images/IMG_9028.jpg'
import img8 from '../../public/_images/IMG_9029.jpg'
import img9 from '../../public/_images/IMG_9030.jpg'
import img10 from '../../public/_images/IMG_9031.jpg'

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap');
</style>

const FeaturedProduct = () => {

    const products = [
        {
            image : img1,
            title : "PHEX - BLACK",
            caption : "FLORAL PRINT REGULAR FIT",
            price : "2599/-"
        },
        {
            image : img2,
            title : "ROW-S26 - DUSKY BLUE",
            caption : "REGULAR FIT MERCERISED POLO",
            price : "1999/-"
        },
        {
            image : img3,
            title : "COCO - WHITE",
            caption : "TROPICAL PRINT CUBAN SHIRT",
            price : "2799/-"
        },
        {
            image : img4,
            title : "MELFI - TEAL",
            caption : "REGULAR FIT CHECKED PRINT",
            price : "2999/-"
        },
        {
            image : img5,
            title : "ZEDTER-2 - OLIVE",
            caption : "RELAXED FIT EMBROIDERED",
            price : "1699/-"
        },
        {
            image : img6,
            title : "VOLAS - MAROON",
            caption : "REGULAR FIT VISCOSE BLEND",
            price : "2599/-"
        },
        {
            image : img7,
            title : "CARTER - BLACK",
            caption : "REGULAR FIT PLAIN POLO",
            price : "1899/-"
        },
        {
            image : img8,
            title : "TRISH - OLIVE",
            caption : "BOXY FIT PAISLEY PRINT SHIRT",
            price : "2199/-"
        },
        {
            image : img9,
            title : "HAXLR 26 - DUSKY PINK",
            caption : "REGULAR FIT CHAMBRAY SOLID",
            price : "3799/-"
        },
        {
            image : img10,
            title : "SALIS-A25 - BEIGE",
            caption : "REGULAR FIT PLAIN POLO",
            price : "1799/-"
        },
    ]

  return (
    <div className='h-auto bg-[#e5dccd] md:p-10 p-2 max-md:py-6'>
        <div className='flex flex-col justify-center items-center md:gap-4'>
            <h1 className='md:text-5xl text-4xl text-[#24180c]'>FEATURED PRODUCTS</h1>
            <p className='text-[#24180c] text-2xl'>Check These out!</p>
        </div>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:grid-rows-2 md:gap-4 gap-2 md:pt-7 pt-2'>
            {
                products.map((items)=>(
                    <Card image={items.image} title={items.title} caption={items.caption} price={items.price}/>
                ))   
            }
        </div>
    </div>
    
  )
}

export default FeaturedProduct