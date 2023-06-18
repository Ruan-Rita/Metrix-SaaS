import { DOMElement, ReactNode } from "react"
import { ThemeColorDropDown } from "../../util/Enums"
import Dropdown from "../Core/Dropdown"

interface IInfoCard {
    icon?: ReactNode
    children: ReactNode
    bgIconColor?: string
    className?: string
    rightSide?: boolean | ReactNode
    title?: String | ReactNode
    dropItems?: Array<string>
    onChangeDrop?: Function
    dropDownTheme?: ThemeColorDropDown
}
export default function InfoCard({ icon, bgIconColor, children, className, rightSide = false, dropItems = [], title, onChangeDrop, dropDownTheme }: IInfoCard) {
    function renderRightSide() {
        if (rightSide) return rightSide
        return <>
            {dropItems.length > 0 ? <Dropdown theme={dropDownTheme} items={dropItems} onChange={onChangeDrop} /> : null}
        </>
    }
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
                        <h2 className="font-bold text-lg">{title ? title : null}</h2>
                    </div>
                    {renderRightSide()}
                </div>
                {children}
            </div>
        </div>
    )
}