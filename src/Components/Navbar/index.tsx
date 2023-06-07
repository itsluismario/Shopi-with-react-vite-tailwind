import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { totalQtyByCart } from "../../Utils"

let menuLeft = [
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/shoes',
        text: 'shoes',
        className: ''
    },
    {
        to: '/furniture',
        text: 'furniture',
        className: ''
    },
    {
        to: '/prince',
        text: 'prince',
        className: ''
    },
    {
        to: '/others',
        text: 'others',
        className: ''
    },
]

let menuRight = [
    {
        to: '/email',
        text: 'itsluismario@gmail.com',
        className: 'text-black/60'
    },
    {
        to: '/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My occount',
        className: ''
    },
    {
        to: '/sign-in',
        text: 'Sign in',
        className: ''
    },

]


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const totalQuantity = totalQtyByCart()
    
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-5 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg" key="/">
                <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                {menuLeft.map(link => (
                <li className={link.className} key={link.text}>
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? activeStyle : undefined }
                        >
                        {link.text}
                    </NavLink>
                </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3">
                {menuRight.map(link => (
                <li className={link.className} key={link.text}>
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? activeStyle : undefined }
                        >
                        {link.text}
                    </NavLink>
                </li>
                ))}
                <li className='flex items-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>                
                <div>({totalQuantity})</div>
                </li>
            </ul>
        </nav>
    ) 
}

export default Navbar;