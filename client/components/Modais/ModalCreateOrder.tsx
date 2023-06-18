import { useState } from 'react'
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { ThemeColorDropDown } from "../../util/Enums";
import Dropdown from "../Core/Dropdown";
import Input from "../Core/Input";
import ModalBase, { SizeModal } from "../Core/Modal/Modal";
import { ModalBaseProps, ModalProps } from "../Core/Modal/Typing";
import SubmitButton from "../Core/Submit";
import Switch from "../Core/Switch";

export default function ModalCreateOrder({ hasFooter = true, width = SizeModal.MEDIUM, header, close, open, children_header = false, close_button = true }: ModalProps) {
    const [newCustomer, setNewCustomer] = useState(false)
    return (
        <ModalBase hasFooter={hasFooter} width={width} header={header} close={close} open={open} children_header={children_header} close_button={close_button} >
            <div className="flex justify-between gap-6">
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                        <h1>Order Details</h1>
                        <div className="flex content-center">
                            New Customer
                            <Switch onChange={(value) => setNewCustomer(value)} />
                        </div>
                    </div>
                    <div className={`${newCustomer ? 'h-40' : 'h-0'} overflow-hidden  transition-all`}>
                        <Input className="my-3" placeholder="Customer Name" type="text" />
                        <Input className="mb-4 mt-1" placeholder="Customer E-mail" type="text" />
                        <div className="flex gap-4">
                            <Dropdown items={['+12', '+55']} />
                            <div className="flex-1">
                                <Input placeholder="12 988437057" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className={`${newCustomer ? 'h-0' : 'h-11'} transition-all`}>
                        <Dropdown className="w-full mt-1" theme={ThemeColorDropDown.bgGray} items={['Ruan Rita', 'Joao Maria']} label="Select Customer" />
                    </div>
                    <div className="flex justify-between gap-4 mt-4">
                        <Dropdown className="w-full" theme={ThemeColorDropDown.bgGray} items={['Ruan Rita', 'Joao Maria']} label="Payment Type" />
                        <Dropdown className="w-full" theme={ThemeColorDropDown.bgGray} items={['Ruan Rita', 'Joao Maria']} label="Order Type" />
                    </div>
                    <div className="mt-3">
                        <h2 className="text-sm">Order Time & Date</h2>
                        <div className="flex justify-between gap-2 mt-1">
                            <div className="flex-1">
                                <Input placeholder="12/12/2020" type="date" />
                            </div>
                            <div className="flex-1">
                                <Input placeholder="12:00 PM" type="time" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-sm">Order Status</h2>
                        <Dropdown className="w-full py-2" theme={ThemeColorDropDown.bgGray} items={['Pending', 'Complete', 'Processing']} label="Select Customer" />
                        <textarea className="h-24 max-h-24 min-h-min w-full text-gray-700 bg-gray-50 border border-gray-100 mt-2 rounded-md" placeholder="Order Note"></textarea>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <h1 className="mb-4">Items</h1>
                    <Input type="search" placeholder="Search product name" />
                    <div className="flex justify-center content-center flex-1">
                        <div className="flex flex-col justify-center flex-wrap flex-1">
                            <div className="w-28 h-28 rounded-full border-2 border-gray-200 bg-gray-100 flex justify-center content-center mx-auto">
                                <ShoppingBagIcon width={40} className="fill-gray-400" />
                            </div>
                            <h1 className="text-center mt-4 font-bold text-black">Add Products to your Order</h1>
                            <p className="text-center my-1">Search and add products to this order</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-center mt-5">
                <SubmitButton className="bg-white !text-indigo-600 border border-indigo-600 hover:!bg-gray-100 w-32" label="Cancel" />
                <SubmitButton className="w-32" label="Create Order" />
            </div>
        </ModalBase>
    )

}