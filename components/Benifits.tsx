import React from 'react'
import ViewAll from './Buttons/ViewAll'
import Arrow from './Buttons/Arrow'
import { Card, CardContent } from './ui/card'

const Benifits = () => {
  return (
    <section className="bg-white py-12 md:py-16">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Benefits</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-base md:text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
                <ViewAll />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8">
            <Card className="h-[300px] flex-1">
              <CardContent className="flex flex-col gap-4 relative justify-around items-start">
                <div className="absolute top-2 right-2 text-black text-6xl font-extrabold">01</div>
                <h3 className="text-xl font-semibold">Flexible Learning Schedule</h3>
                <p className="text-muted-foreground">Fit your coursework around your existing commitments and obligations.</p>
                <Arrow />
              </CardContent>
            </Card>
            <Card className="h-[300px] flex-1">
              <CardContent className="flex flex-col gap-4 relative justify-between items-start">
                <div className="absolute top-2 right-2 text-black text-6xl font-extrabold">02</div>
                <h3 className="text-xl font-semibold">Expert Instruction</h3>
                <p className="text-muted-foreground">Learn from industry experts who have hands-on experience in design and development.</p>
                <Arrow />
              </CardContent>
            </Card>
            <Card className="h-[300px] flex-1">
              <CardContent className="flex flex-col gap-4 relative justify-between items-start">
                <div className="absolute top-2 right-2 text-black text-6xl font-extrabold">03</div>
                <h3 className="text-xl font-semibold">Updated Curriculum</h3>
                <p className="text-muted-foreground">Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                  <Arrow />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Benifits