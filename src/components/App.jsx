import React from 'react'
import { Light } from './Light'
import { Todos } from './Todos'

const reactLogo = new URL('../images/react-logo.svg')

export const App = () => {
    return (
        <div className="mx-5 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center">
            <img className="mt-4 mb-3 w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out text-indigo-500" src={reactLogo} />
            <h1>Hello ReactSA!</h1>
            <div className="my-5">
                <Light />
            </div>
            <div className="my-5">
                <Todos />
            </div>
        </div>
    )
}