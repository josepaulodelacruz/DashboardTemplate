import { FC } from "react";
import Card from '../../Components/Card'

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col p-5 w-full max-w-screen-2xl">

      <div className='grid grid-cols-3 gap-4 '>
        <Card />
        <Card />
        <Card />
      </div>

      <div className="grid grid-cols-2 gap-5 pt-5">

        <Card />
        <Card />

      </div>


      <div className='grid grid-cols-3 gap-4 '>
        <Card />
        <Card />
        <Card />
      </div>

      <div className="grid grid-cols-2 gap-5 pt-5">

        <Card />
        <Card />

      </div>


    </div>
  )

}

export default Dashboard
