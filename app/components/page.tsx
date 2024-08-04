import Badges from '@/components/Badges'

import Goals from '@/components/Badges/Goals'
import Resources from '@/components/Badges/Resources'
import Star from '@/components/Badges/Star'
import Support from '@/components/Badges/Support'
import Track from '@/components/Badges/Track'
import Bulb from '@/components/Bulb'
import AndMore from '@/components/Buttons/AndMore'
import Arrow from '@/components/Buttons/Arrow'
import GetStarted from '@/components/Buttons/Get-Started'
import LearnMore from '@/components/Buttons/LearnMore'
import Login from '@/components/Buttons/Login'
import ViewAll from '@/components/Buttons/ViewAll'
import Scholar from '@/components/Scholar'
import { Button } from '@/components/ui/button'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
       <Login />
       <GetStarted />
       <LearnMore />
       <AndMore />
       <ViewAll />

       <Track />
       <Support />
       <Goals />
       <Resources />
       <Arrow />

       <Star />

       <Bulb />

       <Scholar />



    </div>
  )
}

export default About