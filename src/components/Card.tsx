import React from 'react'
import { Link } from 'react-router-dom';

interface CardProps {
  type: string;
  count: number | string;
  link: number | string;
}

const Card: React.FC<CardProps> = ({ type, count, link }) => {
  return (
    <div className="p-5 border flex items-center flex-col gap-4">
      <h2 className='font-bold text-2xl'>{count}</h2>
      <p className='text-l'>{type}</p>
      <Link to={`/navigator?tab=${link}`}> <span className='p-2 bg-blue-600 rounded-md text-white text-l hover:bg-blue-800'>See {typeof (count) != 'number' ? 'transactions' : 'all'}</span></Link>
    </div>
  )
}

export default Card