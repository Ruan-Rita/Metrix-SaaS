import { useState, useRef } from 'react'
import { CalendarDaysIcon, CalendarIcon, ChartPieIcon, FunnelIcon, PlusIcon, ShareIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/20/solid";
import InfoCard from "../../components/InfoCard/InfoCard";
import MainTemplate from "../../components/Templates/Main";
import { DirectionDropDown, ThemeColorDropDown } from "../../util/Enums";
import PopoverFilter from '../../components/Filters/PopoverFilter';
import Switch from '../../components/Core/Switch';
import Input from '../../components/Core/Input';
import SubmitButton from '../../components/Core/Submit';
import Dropdown from '../../components/Core/Dropdown';
import TableBase from '../../components/Core/TableBase';
import ModalBase, { SizeModal } from '../../components/Core/Modal/Modal';
import ModalCreateOrder from '../../components/Modais/ModalCreateOrder';

export default function Home() {
  const [openPopoverFilter, setOpenPopoverFilter] = useState(false)
  const [openPopoverFilterDate, setOpenPopoverFilterDate] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalOrder, setOpenModalOrder] = useState(false)
  const Orders = ['item 1', 'item 2']

  const popoverRef = useRef()
  const popoverDateRef = useRef()

  const titles = ['Product name', 'Color', 'Category', 'Price'];
  const rows = [{
    'Product name': 'Apple MacBook Pro 17"',
    'Color': 'Silver',
    'Category': 'Laptop',
    'Price': '$2999',
  }, {
    'Product name': 'Microsoft Surface Pro',
    'Color': 'White',
    'Category': 'Laptop PC',
    'Price': '$1999	',
  }, {
    'Product name': 'Magic Mouse 2',
    'Color': 'Black',
    'Category': 'Accessories',
    'Price': '$99',
  }];

  function renderMenuRecentOrders() {
    return (
      <div className="flex gap-1">
        <div className="flex">
          <Input type="search" placeholder="Search" className="border border-gray-300 bg-white" />
        </div>
        <div className="relative" ref={popoverRef}>
          <SubmitButton onClick={() => setOpenPopoverFilter(!openPopoverFilter)} className="mx-2 w-20 flex justify-between border-solid !border-gray-400 bg-white !text-gray-900  hover:!text-white hover:!fill-white hover:!border-white fill-gray-400">
            <FunnelIcon className="fill-inherit" width={20} /> Filter
          </SubmitButton>
          <PopoverFilter setIsActive={setOpenPopoverFilter} show={openPopoverFilter} popoverRef={popoverRef} />
        </div>
        <div className="relative" ref={popoverDateRef}>
          <SubmitButton onClick={() => setOpenPopoverFilterDate(!openPopoverFilterDate)} className="mr-2 w-20 flex justify-between border-solid !border-gray-400 bg-white !text-gray-900  hover:!text-white hover:!fill-white hover:!border-white fill-gray-400">
            <CalendarDaysIcon className="fill-inherit" width={20} /> Filter
          </SubmitButton>
          <PopoverFilter popoverRef={popoverDateRef} setIsActive={setOpenPopoverFilterDate} show={openPopoverFilterDate} />
        </div>
        <div className="relative">
          <SubmitButton onClick={() => setOpenModal(!openModal)} className="mr-2 w-20 flex justify-between border-solid !border-gray-400 bg-white !text-gray-900 hover:!text-white hover:!fill-white hover:!border-white fill-gray-400">
            <ShareIcon className="fill-inherit" width={20} /> Share
          </SubmitButton>
        </div>
        <Dropdown direction={DirectionDropDown.RIGHT} className="border rounded-md !border-gray-400 bg-white" theme={ThemeColorDropDown.bgWhite} items={['item 1', 'item 2', 'item 3']} label={'Bulk Action'} />
      </div>
    )
  }
  return (
    <MainTemplate title="Orders">
      <section className="flex flex-col h-full pb-4">
        <div className="mb-4 flex justify-between w-full">
          <h1 className="text-lg font-bold">Older Summary</h1>
          <button onClick={() => setOpenModalOrder(true)} className="flex justify-between w-fit h-fit bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 content-center text-sm text-white">
            <PlusIcon className="fill-white" width={20} />
            Create a New Order
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <InfoCard bgIconColor="bg-amber-200" icon={<ChartPieIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
          <InfoCard bgIconColor="bg-amber-200" icon={<UsersIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
          <InfoCard bgIconColor="bg-amber-200" icon={<UsersIcon className="fill-ray-700 w-4 h-4" />}>
            <div className="flex justify-between">
              <div className="flex-grow">
                <h4>Sales</h4>
                <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
              </div>
              <div className="flex-grow">
                <h4>Volume</h4>
                <h1 className="text-xl font-bold">0</h1>
              </div>
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Recent Orders" className="mt-4 flex-grow p-5" rightSide={renderMenuRecentOrders()}>
          {Orders.length <= 0 ?
            <div className="flex flex-col justify-center flex-wrap flex-1">
              <div className="w-40 h-40 rounded-full border-2 border-gray-300 bg-gray-200 flex justify-center content-center mx-auto">
                <ShoppingBagIcon width={40} className="fill-gray-400" />
              </div>
              <h1 className="text-center mt-8 font-bold text-black">No Orders yet?</h1>
              <p className="text-center my-4">Add products to your store and start selling to see olders here</p>
              <button className="mx-auto flex justify-between w-36 bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 content-center text-sm text-white"><PlusIcon className="fill-white" width={20} />New Product</button>
            </div> :
            <div>
              <TableBase titles={titles} rows={rows} />
            </div>}
        </InfoCard>
      </section>
      <ModalBase header="Test Mesmo" close={() => setOpenModal(false)} open={openModal}>
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          I always felt like I could do anything. That’s the main
          thing people are controlled by! Thoughts- their perception
          of themselves! They're slowed down by their perception of
          themselves. If you're taught you can’t do anything, you
          won’t do anything. I was taught I could do everything.
        </p>
      </ModalBase>
      <ModalCreateOrder hasFooter={false} width={SizeModal.BIG} header="Create New Order" close={() => setOpenModalOrder(false)} open={openModalOrder} />
    </MainTemplate >
  )
}
