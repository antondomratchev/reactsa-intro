import React from 'react'

export const App = () => {
    return (
        <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center text-brand">
            <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
            <h1>Hello ReactSA!</h1>
        </div>
    )
}