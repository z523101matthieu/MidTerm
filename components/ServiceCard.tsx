import {FunctionComponent} from 'react'
import {Service} from '../types'

const ServiceCard: FunctionComponent<{ service: Service }> = (
    {
        service: {Icon, title, about},
    }) => {
    function createMarkup() {
        return {
            __html: about,
        }
    }

    return (
        <div className='flex items-center p-2 space-x-4 '>
            <Icon className='w-12 h-12 text-blue-300'/>
            <div className=''>
                <h6 className='font-bold'>{title}</h6>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard
