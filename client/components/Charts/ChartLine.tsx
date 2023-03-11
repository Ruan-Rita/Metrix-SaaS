import dynamic from 'next/dynamic';

export default function ChartLine() {
    const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
    const settingChart = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    return (
        <div className="flex justify-center mt-3 h-full">
            <ApexCharts
                options={settingChart.options}
                series={settingChart.series}
                type="bar"
                className="w-full h-full"
            />
        </div>
    )
}