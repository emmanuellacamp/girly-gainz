import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/girly'

function Header(props){
    const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-pink-200'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    const [showModal, setShowModal] = useState(false)
    const [potion, setPotion] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoals] = useState('strength_power')

    // let showModal  = false
    function toggleModal(){
        setShowModal (!showModal)
    }
    
    return (
        <SectionWrapper header={"generate your workout"} title={['It\'s','glam', 'o\'clock' ]}>
            <Header index={'01'} title={'Pick your potion'} description={'Select the workout you wish to conquer.'}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-6'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setPotion(type)

                        }} className={'bg-pink-900 border  duration-200 hover: py-3 rounded-lg ' + (type === potion ? 'border-pink-600 ' : 'border-pink-400 ')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Set your targerts'} description={'Select the muscles you want to sculpt to perfection.'}/>
            <div className='bg-pink-900 border border border-solid border-pink-400 rounded-lg flex flex-col '>
                <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                    <p>Choose muscle groups</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                    {showModal && [
                        <div>modal</div>
                    ]}
            </div>
            <Header index={'03'} title={'Become a Fitness Diva'} description={'Select your ultimate goal.'}/>
            <div className='grid grid-cols-3  gap-4 '>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoals(scheme)

                        }} className={'bg-pink-900 border  duration-200 hover: py-3 rounded-lg ' + (scheme === goals ? 'border-pink-600 ' : 'border-pink-400 ')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}