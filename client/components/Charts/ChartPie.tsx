import { Charts } from "../../util/Enums"
import dynamic from "next/dynamic";
import SimpleHash from "../../util/SimpleHash";

export default function ChartPie() {

    const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
    const labels = ['A', 'B', 'C', 'D', 'E']
    const settingChart = {
        options: {},
        series: [44, 55, 41, 17, 15],
    };

    return (
        <div>
            <div className="flex justify-between px-10">
                {labels.map(name => (<p key={SimpleHash()} className="px-2 py-1 rounded-md bg-slate-200">{name}</p>))}
            </div>
            <div className="flex justify-center mt-3">
                <ApexCharts className="w-full" options={settingChart.options} series={settingChart.series} type="donut" />
            </div>
        </div>
    )
}