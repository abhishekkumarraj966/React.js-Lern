import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}