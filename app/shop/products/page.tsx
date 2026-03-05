import React from 'react'


import img1 from '../../../public/_images/IMG_9027.jpg'
import img2 from '../../../public/_images/IMG_8992.jpg'
import img3 from '../../../public/_images/IMG_8994.jpg'
import img4 from '../../../public/_images/IMG_9024.jpg'
import img5 from '../../../public/_images/IMG_9025.jpg'
import Card from '@/app/_components/Card'


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
            title : "MELFI - TEAL",
            caption : "REGULAR FIT CHECKED PRINT",
            price : "2999/-"
        }
    ]
    
const page = () => {
  return (
    <div className='bg-[#e5dccd] px-4 '>
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

export default page