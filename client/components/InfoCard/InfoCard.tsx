import { DOMElement, ReactNode } from "react"
import { ThemeColorDropDown } from "../../util/Enums"
import Dropdown from "../core/Dropdown"

interface IInfoCard {
    icon?: ReactNode
    children: ReactNode
    bgIconColor?: string
    className?: string
    title?: String | ReactNode
    dropItems?: Array<string>
    onChangeDrop?: Function
    dropDownTheme?: ThemeColorDropDown
}
export default function InfoCard({ icon, bgIconColor, children, className, dropItems = [], title, onChangeDrop, dropDownTheme }: IInfoCard) {
    return (
        <div className={`p-3 flex bg-white rounded-2xl ${className}`} >
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-7">
                    <div className="flex">
                        {icon ?
                            <div className={`w-8 h-8 rounded-md flex justify-center items-center ${bgIconColor}`}>
                                {icon}
                            </div>
                            : null
                        }
                        <h2 className="ml-2 font-bold text-lg">{title ? title : null}</h2>
                    </div>
                    {dropItems.length > 0 ? <Dropdown theme={dropDownTheme} items={dropItems} onChange={onChangeDrop} /> : null}
                </div>
                {children}
            </div>
        </div>
    )
}