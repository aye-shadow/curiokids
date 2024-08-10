import React from 'react'
import TopUsers from './LeaderBoard/TopUsers'
import Discussions from './LeaderBoard/Discussions'
import Challenges from './LeaderBoard/Challenges'

const LeaderBoard = () => {
  return (
<div className="min-h-screen bg-background p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TopUsers />
        <Challenges />
      </div>
      <Discussions />
    </div>
  )
}

export default LeaderBoard