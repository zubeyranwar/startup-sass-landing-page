import React from 'react'


const Model = ({onClose}) => {
  const handleClose=(e)=>{
        if(e.target.id=='wrapper') onClose()
  }
  return (
    <div id="wrapper" className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md flex justify-center items-center' onClick={handleClose}>
        <div className='w-[70%] flex flex-col'>
            <button onClick={()=>onClose()}  className='place-self-end mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white place-self-end">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="p-[56.5%_0_0_0] relative">
                <iframe src="https://player.vimeo.com/video/872061614?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  className="absolute top-0 left-0 w-full h-full" title="1. Welcome!"></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
         </div>
    </div>  
  )
}

export default Model