import React from 'react'
import Track from '../Badges/Track'
import Support from '../Badges/Support'
import Goals from '../Badges/Goals'
import Resources from '../Badges/Resources'
import AndMore from '../Buttons/AndMore'

const GetFree = () => {
  return (
    <section className="w-full py-12 md:py-24 text-[#44403C]">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter font-feathers sm:text-4xl
           md:text-5xl ">Get Eveything for FREE!</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-5">
          <div className="flex flex-col items-center gap-2">
            <div className=" rounded-full p-4 flex items-center justify-center">
            <Track />
            </div>
            <span className="text-sm text-[#44403C] font-medium text-muted-foreground">
                Track Progress</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className=" rounded-full p-4 flex items-center justify-center">
            <Support />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
                24/7 Support</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className=" rounded-full p-4 flex items-center justify-center">
            <Goals />
            </div>
            <span className="text-sm font-medium text-muted-foreground"
            >Goals</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full p-4 flex items-center 
            justify-center">
            <Resources />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
                Resources</span>
          </div>


        </div>
       
        
      </div>
    </section>
  )
}

export default GetFree