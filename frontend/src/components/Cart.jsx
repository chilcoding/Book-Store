import React from 'react'

function Cart({ items }) {
    return (
        <div className='flex justify-center items-center mb-10 mt-5 '>
            <div className="card bg-base-100 w-80  shadow-xl hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out cursor-pointer">
                <figure>
                    <img
                        src={items.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {items.name}
                        <div className="badge badge-secondary">{items.category}</div>
                    </h2>
                    <p>{items.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-3 ">{`\u20B9 ${items.price}`}</div>
                        <div className="badge badge-outline p-3 hover:bg-pink-500 hover:text-white">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart