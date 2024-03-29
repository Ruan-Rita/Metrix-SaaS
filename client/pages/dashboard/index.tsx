import { ChartPieIcon, FolderIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon, UsersIcon } from "@heroicons/react/20/solid";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoChart from "../../components/Charts";
import MainTemplate from "../../components/Templates/Main";
import { Charts, ThemeColorDropDown } from "../../util/Enums";
import Image from "next/image";
import Dropdown from "../../components/core/Dropdown";

export default function Home() {
  const Orders = [
    { name: 'Iphone 7', price: 'R$ 490,00', product_img: 'https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-preto-tela-61-12mp-ios/magazineluiza/231147800/d31759b75165e6142d3dea82aadb0340.jpg', status: "Pending", created_at: '12 Sep 2022' },
    { name: 'Iphone 7', price: 'R$ 490,00', product_img: 'https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-preto-tela-61-12mp-ios/magazineluiza/231147800/d31759b75165e6142d3dea82aadb0340.jpg', status: "Completed", created_at: '12 Sep 2022' },
    { name: 'Iphone 7', price: 'R$ 490,00', product_img: 'https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-preto-tela-61-12mp-ios/magazineluiza/231147800/d31759b75165e6142d3dea82aadb0340.jpg', status: "Refund", created_at: '12 Sep 2022' },
    { name: 'Iphone 7', price: 'R$ 490,00', product_img: 'https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-preto-tela-61-12mp-ios/magazineluiza/231147800/d31759b75165e6142d3dea82aadb0340.jpg', status: "Completed", created_at: '12 Sep 2022' },
    { name: 'Iphone 7', price: 'R$ 490,00', product_img: 'https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-preto-tela-61-12mp-ios/magazineluiza/231147800/d31759b75165e6142d3dea82aadb0340.jpg', status: "Canceled", created_at: '12 Sep 2022' },
  ]
  const StatusProductColorsText = {
    Completed: `bg-green-400`,
    Pending: 'bg-yellow-400',
    Refund: 'bg-red-400',
    Canceled: 'bg-red-400',
  }

  const StatusProductColorsBg = {
    Completed: `text-green-200`,
    Pending: 'text-yellow-200',
    Refund: 'text-red-200',
    Canceled: 'text-red-200',
  }
  return (
    <MainTemplate title="Dashboard">
      <section className="flex flex-col h-full max-w-[1600px]">
        <div className="grid grid-cols-4 gap-4">
          <InfoCard bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
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
          <InfoCard bgIconColor="bg-blue-200" icon={<UsersIcon className="fill-blue-700 w-4 h-4" />}>
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
          <div className="col-span-2">
            <InfoCard bgIconColor="bg-blue-200" icon={<ShoppingBagIcon className="fill-blue-700 w-4 h-4" />} dropItems={['This Week', 'This Day', 'This Year']} dropDownTheme={ThemeColorDropDown.bgWhite}>
              <div className="flex justify-between">
                <div className="flex-grow">
                  <h4>All Orders</h4>
                  <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+15.56%</span></h1>
                </div>
                <div className="flex-grow">
                  <h4>Pending</h4>
                  <h1 className="text-xl font-bold">0</h1>
                </div>
                <div className="flex-grow">
                  <h4>Completed</h4>
                  <h1 className="text-xl font-bold">0</h1>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 flex-grow pb-6">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 mb-4 h-2/5">
              <InfoCard title="Marketing" dropItems={['This Week', 'This Day', 'This Year']} dropDownTheme={ThemeColorDropDown.bgWhite}>
                <InfoChart type={Charts.Pie} />
              </InfoCard>
              <div className="flex flex-col">
                <InfoCard className="flex-grow" bgIconColor="bg-blue-200" icon={<FolderIcon className="fill-blue-700 w-4 h-4" />}>
                  <div className="flex justify-between flex-grow">
                    <div className="flex-grow flex flex-col justify-end">
                      <h4>All Products</h4>
                      <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+05.00%</span></h1>
                    </div>
                    <div className="flex-grow flex flex-col justify-end">
                      <h4>Active</h4>
                      <h1 className="text-xl font-bold">0</h1>
                    </div>
                  </div>
                </InfoCard>
                <InfoCard className="flex-grow mt-4" bgIconColor="bg-amber-200" icon={<ShoppingCartIcon className="fill-gray-700 w-4 h-4" />}>
                  <div className="flex justify-between flex-grow ">
                    <div className="flex-grow flex flex-col justify-end">
                      <h4 className="text-red-500">Abandoned Cart</h4>
                      <h1 className="text-xl font-bold">$10.40 <span className="ml-1 text-green-400 text-xs">+08.00%</span></h1>
                    </div>
                    <div className="flex-grow flex flex-col justify-end">
                      <h4>Customers</h4>
                      <h1 className="text-xl font-bold">0</h1>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </div>
            <InfoCard className="flex-grow flex" title={<div className="flex">
              <h4 className="mr-2">Summary</h4>
              <Dropdown items={['Sales', 'Paid', 'Lost']} theme={ThemeColorDropDown.bgBlueGray} />
            </div>}>
              <InfoChart type={Charts.Line} />
            </InfoCard>
          </div>
          <InfoCard title="Recent Orders">
            {Orders.length < 0 ?
              <div className="flex flex-col justify-center flex-wrap flex-1">
                <div className="w-40 h-40 rounded-full border-2 border-gray-300 bg-gray-200 flex justify-center content-center mx-auto">
                  <ShoppingBagIcon width={40} className="fill-gray-400" />
                </div>
                <h1 className="text-center mt-8 font-bold text-black">No Orders yet?</h1>
                <p className="text-center my-4">Add products to your store and start selling to see olders here</p>
                <button className="mx-auto flex justify-between w-36 bg-blue-500 hover:bg-blue-700 rounded-lg px-2 py-2 content-center text-sm text-white"><PlusIcon className="fill-white" width={20} />New Product</button>
              </div> :
              <div>
                {
                  Orders.map(item => (
                    <div className="px-4 mt-4">
                      <div className="flex justify-between border-b pb-4">
                        <div className="flex">
                          <div className=" border-gray-200 border-2 rounded-md">
                            <Image src={item.product_img} className="object-contain" width={50} height={50} />
                          </div>
                          <div className="ml-2">
                            <h5 className="mb-2">{item.name}</h5>
                            <h5>{item.price}</h5>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col">
                          <h5>{item.created_at}</h5>
                          <span className={`${StatusProductColorsBg[item.status]} rounded-2xl px-3 ${StatusProductColorsText[item.status]}`}>{item.status}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>}
          </InfoCard>
        </div>
      </section >
    </MainTemplate >
  )
}
