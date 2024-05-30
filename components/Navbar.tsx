import {useState, useEffect, FunctionComponent} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
    active: string
    setActive: Function
    name: string
    route: string
}> = ({active, setActive, name, route}) => {
    let className = 'mx-2 cursor-pointer hover:border-b-4 ' + (active === name ? 'text-yellow-500' : 'hover:text-yellow-300');
    return (
        <Link href={route}>
            <span
                className={className}
                onClick={() => setActive(name)}>
               {name}
            </span>
        </Link>
    )
}

const Navbar = () => {
    const {pathname} = useRouter()

    const [active, setActive] = useState('')

    //later
    useEffect(() => {
        if (pathname === '/') setActive('About')
        else if (pathname === '/projects') setActive('Projects')
        else if (pathname === '/resume') setActive('Resume')
    }, [])

    return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-yellow-300'>
            {active}
         </span>

            <div className='text-base font-normal md:text-xl'>
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='About'
                    route='/'
                />
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='Resume'
                    route='/resume'
                />
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='Projects'
                    route='/projects'
                />
            </div>
        </div>
    )
}

export default Navbar
