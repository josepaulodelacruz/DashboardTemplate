

const Card = () => {
  return (
    <div className="rounded-sm border p-4 bg-white shadow-lg">

      <div className='flex flex-col w-full'>
        <h2 className="text-black font-semibold">Top 5 Users</h2>
        <hr />
        <div className="pt-4">
          <ul className="flex flex-col">

            <li className='flex flex-row justify-between'>
              <span>1. Jose Paulo</span>
              <button>View</button>
            </li>
            <li className='flex flex-row justify-between'>
              <span>1. Jose Paulo</span>
              <button>View</button>
            </li>
            <li className='flex flex-row justify-between'>
              <span>1. Jose Paulo</span>
              <button>View</button>
            </li>
            <li className='flex flex-row justify-between'>
              <span>1. Jose Paulo</span>
              <button>View</button>
            </li>


          </ul>

        </div>

      </div>

    </div>
  )
}

export default Card
