import Button from '@/Components/Button'

const Users = () => {
  return (
    <div className='flex flex-col p-5 w-full max-w-screen-2xl'>

      <div className='flex flex-row justify-between items-center'>
        <h2 className='font-bold font-sans'>Users</h2>
        <div className='flex flex-row'>

          <input
            type='text'
            placeholder='Search User'
            className='w-[700px] shadow-sm p-2 mr-10' />

          <Button
            onClick={() => console.log('user click')}
            label="Add User" />
        </div>
      </div>
    </div>
  )
}

export default Users 
