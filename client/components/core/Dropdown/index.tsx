import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import SimpleHash from '../../../util/SimpleHash'
interface IDropdown {
    items: any[],
    label?: string
}
export default function Dropdown({ items = [], label }: IDropdown) {
    const [selected, setSelected] = useState(-1)
    const [idDropdown, setIdDropdown] = useState('')

    useEffect(() => {
        setIdDropdown(SimpleHash(10))
    }, [])

    return (
        <div className='relative'>
            <button data-dropdown-toggle={idDropdown} className="w-auto lg:w-28 md:w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                {label ?? selected != -1 ? items[selected] : items.length > 0 ? items[0] : ''}
                <ChevronDownIcon className="ml-auto w-5 h-5 fill-white" />
            </button>
            <div id={idDropdown} className="dropdown-container hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 right-0 translate-x-0">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {items.map((item, key) => (
                        <li key={key} onClick={() => setSelected(key)}>
                            <span className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 