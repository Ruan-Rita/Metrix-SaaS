import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'
import { findDOMNode } from 'react-dom'
import { ThemeColorDropDown } from '../../../util/Enums'
import SimpleHash from '../../../util/SimpleHash'
interface IDropdown {
    items: any[],
    label?: string,
    onChange?: Function | undefined,
    className?: string
    theme?: ThemeColorDropDown
}
export default function Dropdown({ items = [], label, onChange, theme, className }: IDropdown) {
    const [selected, setSelected] = useState(-1)
    const [isActive, setIsActive] = useState(false)
    const dropdownRef: any = useRef()

    useEffect(() => {
        if (dropdownRef) {
            window.addEventListener('click', function (e) {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target) && dropdownRef.current !== e.target) {
                    setIsActive(false)
                }
            })
        }
    }, [])

    useEffect(() => {
        if (selected !== -1 || onChange == undefined) return
        onChange(1)
    }, [selected])

    const themeColor: any = {
        default: {
            button: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
            icon: 'fill-white'
        },
        bgWhite: {
            button: 'text-black bg-white hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:bg-gray-500',
            icon: 'fill-gray-400'
        },
        bgBlueGray: {
            button: 'text-blue-600 bg-blue-100 hover:bg-blue-300 focus:ring-blue-400 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:bg-blue-400',
            icon: 'fill-blue-600'
        },
    }

    function renderValue() {
        if (selected != -1) return items[selected]
        if (label) return label
        if (items.length > 0) return items[0]
        return ''
    }

    return (
        <div onClick={() => setIsActive(!isActive)} ref={dropdownRef} className={`relative ${className}`}>
            <button className={`${className} w-fit h-full focus:ring-2 focus:outline-none font-medium rounded-md text-sm px-4 py-1.5 text-center inline-flex items-center ${themeColor[theme ? theme : ThemeColorDropDown.default].button}`} type="button">
                {renderValue()}
                <ChevronDownIcon className={`ml-auto w-5 h-5 ${themeColor[theme ? theme : ThemeColorDropDown.default].icon}`} />
            </button>
            <div className={`${isActive ? '' : 'hidden'} absolute top-1 dropdown-container z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 right-0 translate-x-0`}>
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