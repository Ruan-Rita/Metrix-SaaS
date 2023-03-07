import { Charts } from "../../util/Enums"
import ChartPie from "./ChartPie";
import ChartLine from "./ChartLine";
import ChartArea from "./ChartArea";
import ChartBar from "./ChartBar";

interface IMainChart {
    type: Charts
}

export default function MainChart(mainChart: IMainChart) {

    function renderChart() {
        if (mainChart.type === Charts.Pie) return <ChartPie />
        if (mainChart.type === Charts.Line) return <ChartLine />
        if (mainChart.type === Charts.Area) return <ChartArea />
        if (mainChart.type === Charts.Bar) return <ChartBar />
    }

    return (
        <div>
            {renderChart()}
        </div>
    )
}