
interface InputProps {
  label: string,
  className?: string
  placeholder?: string
}

const Input = ({ label, className, placeholder }: InputProps) => {
  return (
    <div className='flex flex-col flex-1'>
      <label>{label}: </label>
      <input 
        type='text'
        placeholder={placeholder}
        className={`input input-bordered bg-white ${className}`} />
    </div>

  )
}

export default Input 
