import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'
interface IDropdown {
    items: any[],
    label?: string
}
export default function Dropdown({items = [], label}: IDropdown) {
    const [selected, setSelected] = useState(-1)

    return (
        <div className='relative'>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                {label ?? selected != -1 ? items[selected] : items.length > 0 ? items[0] : ''}
                <ChevronDownIcon className="ml-2 w-4 h-4 fill-white" />
            </button>
            <div id="dropdown" className="dropdown-container hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 right-0 translate-x-0">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
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