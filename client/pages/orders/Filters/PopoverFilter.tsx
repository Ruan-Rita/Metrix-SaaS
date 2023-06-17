import { useEffect, useRef } from "react";
import Dropdown from "../../../components/core/Dropdown";
import Input from "../../../components/core/Input";
import SubmitButton from "../../../components/core/Submit";
import { ThemeColorDropDown } from "../../../util/Enums";

export default function PopoverFilter({ show, setIsActive, popoverRef }) {

    useEffect(() => {
        if (popoverRef) {
            window.addEventListener('click', function (e) {
                if (popoverRef.current && !popoverRef.current.contains(e.target) && popoverRef.current !== e.target) {
                    setIsActive(false)
                }
            })
        }
    }, [])

    return (
        <div>
            {show ? (
                <div className="text-left absolute top-0 p-5 right-0 w-[330px] h-min bg-white shadow-2xl z-10 rounded-lg">
                    <h1 className="font-bold text-lg">Filter</h1>
                    <div className="mt-2">
                        <h2 className="mb-2">Order Type:</h2>
                        <div className="flex justify-between">
                            <div className="flex">
                                <Input type="checkbox" className="!w-5 h-5 border border-gray-300 bg-white !p-0 mr-2" />
                                Home Delivery
                            </div>
                            <div className="flex">
                                <Input type="checkbox" className="!w-5 h-5 border border-gray-300 bg-white !p-0 mr-2" />
                                Pick Up
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 text-gray-200" />
                    <div className="mb-4">
                        <h2 className="mb-2">Status:</h2>
                        <div>
                            <Dropdown theme={ThemeColorDropDown.bgWhite} className="w-full border rounded-md" items={['all', 'one']} />
                        </div>
                        <h2 className="my-2">Customer:</h2>
                        <div>
                            <Dropdown theme={ThemeColorDropDown.bgWhite} className="w-full border rounded-md" items={['all', 'one']} />
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2">Amount:</h2>
                        <div className="flex justify-between gap-4">
                            <Input placeholder="0.0" type="text" className="border border-gray-300 bg-white" label="From" />
                            <Input placeholder="0.0" type="text" className="border border-gray-300 bg-white" label="To" />
                        </div>
                    </div>
                    <div>
                        <SubmitButton className="w-full mt-4" label="Filter" />
                    </div>
                </div>
            ) : null}
        </div>
    )
}