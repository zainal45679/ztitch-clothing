"use client"
import React from 'react'
import img1 from '../../public/_images/IMG_9042.jpg'
import img2 from '../../public/_images/IMG_9047.jpg'
import img3 from '../../public/_images/IMG_9046.jpg'
import img4 from '../../public/_images/IMG_9052.jpg'
import img5 from '../../public/_images/IMG_9045.jpg'
import img6 from '../../public/_images/IMG_9048.jpg'
import img7 from '../../public/_images/IMG_9043.jpg'
import img8 from '../../public/_images/IMG_9051.jpg'
import img9 from '../../public/_images/IMG_9049.jpg'
import img10 from '../../public/_images/IMG_9050.jpg'
import Card from '../_components/Card'
import CatagoryCard from '../_components/CatagoryCard'
import { useQuery } from '@tanstack/react-query'
import { categoryApi } from '@/api/category-api'
import { storageUrl } from '@/utils/base-url'

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap');
</style>


const Shop = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["category"],
        queryFn: categoryApi.getAllCategory,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error...</div>;
    }

    const category = data.data.categories

  return (
    <div className='h-auto bg-[#e5dccd] md:p-10 p-2 max-md:py-6'>
        <div className='flex flex-col justify-center items-center md:gap-4'>
            <h1 className='md:text-5xl text-4xl text-[#24180c]'>CATEGORIES</h1>
        </div>
        <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:grid-rows-2 md:gap-4 gap-2 md:pt-7 pt-2'>
            {
                category.map((data:any,index:any)=>(
                    <CatagoryCard key={index} image={`${storageUrl}${category[index].image}`} title={data.name} id={data._id}/>
                ))   
            }
        </div>
    </div>
    
  )
}

export default Shop