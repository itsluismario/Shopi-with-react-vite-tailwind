import React from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = (props:any) => {

  const { id, title, imagesUrl, price, quantity, handleDelete } = props

  let renderXMarkIcon 

  if(handleDelete){
    renderXMarkIcon = (
    <XMarkIcon 
      onClick={() => handleDelete(id)} className="h-6 w-6 text-black cursor-pointer">    
    </XMarkIcon>
    )
  } 

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-4">
        <figure className='w-20 h-20'>
            <img className="w-full h-full rounded-lg object-cover" src={imagesUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title} ({quantity})</p>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <p className="text-sm font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard