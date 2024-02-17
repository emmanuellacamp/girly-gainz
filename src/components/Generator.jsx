import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/girly'
import Button from './Button'

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

export default function Generator(props) {
    const {muscles, setMuscles, potion, setPotion, goal, setGoal, updateWorkout} = props
    const [showModal, setShowModal] = useState(false)
   

    // let showModal  = false
    function toggleModal(){
        setShowModal (!showModal)
    }

    function updateMuscles(muscleGroup){
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2){
            return 
        }

        if (potion !== 'individual'){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2){
            setShowModal(false)
        }

    }
    
    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s','glam', 'o\'clock' ]}>
            <Header index={'01'} title={'Pick your potion'} description={'Select the workout you wish to conquer.'}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([])
                            setPotion(type)

                        }} className={'bg-pink-900 border px-4 duration-200 hover: py-3 rounded-lg ' + (type === potion ? 'border-pink-600 ' : 'border-pink-400 ')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Set your targerts'} description={'Select the muscles you want to sculpt to perfection.'}/>
            <div className='bg-pink-900 border border border-solid border-pink-400 rounded-lg flex flex-col '>
                <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                    <p className='capitalize'>{muscles.length ==  0 ? 'Choose muscle groups': muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                    {showModal && [
                        <div className='flex flex-col px-3 py-3'>
                            {(potion === 'individual' ? WORKOUTS[potion] : Object.keys(WORKOUTS[potion])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-pink-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-pink-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                        </div>
                    ]}
            </div>
            <Header index={'03'} title={'Become a Fitness Diva'} description={'Select your ultimate goal.'}/>
            <div className='grid  grid-cols-1 sm:grid-cols-3 gap-4 '>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)

                        }} className={'bg-pink-900 border  duration-200 px-4 hover: py-3 rounded-lg ' + (scheme === goal ? 'border-pink-600 ' : 'border-pink-400 ')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                        
                    )
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>

    )
}