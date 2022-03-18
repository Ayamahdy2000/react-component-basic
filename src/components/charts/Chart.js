import ChartBar from "./ChartBar"
import "./chart.scss"
const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxDataPoint = Math.max(...dataPointsValues)
    return (<div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxDataPoint}
            label={dataPoint.label} />)}
    </div>)
}
export default Chart;