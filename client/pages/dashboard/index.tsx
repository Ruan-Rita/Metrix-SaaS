import { ChartPieIcon } from "@heroicons/react/20/solid";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoChart from "../../components/Charts";
import MainTemplate from "../../components/Templates/Main";
import { Charts } from "../../util/Enums";

export default function Home() {
  return (
    <MainTemplate title="Dashboard">
      <section className="flex flex-col h-full">
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
          <div className="col-span-2">
            <InfoCard bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
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
              <InfoCard bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
                <InfoChart type={Charts.Pie} />
              </InfoCard>
              <div className="flex flex-col">
                <InfoCard className="flex-grow" bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
                  Segundo card
                </InfoCard>
                <InfoCard className="flex-grow mt-4" bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
                  Segundo card
                </InfoCard>
              </div>
            </div>
            <InfoCard className="flex-grow" bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
              <InfoChart type={Charts.Line} />
            </InfoCard>
          </div>
          <InfoCard className="h-full" bgIconColor="bg-blue-200" icon={<ChartPieIcon className="fill-blue-700 w-4 h-4" />}>
            Terceiro card
          </InfoCard>
        </div>
      </section>
    </MainTemplate>
  )
}
