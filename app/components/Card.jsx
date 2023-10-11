const Card = ({title, subtitle, color}) => {
  return (

    <div className='bg-white px-[59px] text-center flex flex-col items-center justify-center w-[300px] h-[320px] shadow-[0_25px_100px_0px_rgba(69,88,157,0.08)] rounded-[10px]'>
        <h3 className='text-[72px] font-[700] text-center' style={{color:color}}>{title}</h3>
        <p className="text-[#0f2137] opacity-70">{subtitle}</p>
    </div>
  )
}

export default Card