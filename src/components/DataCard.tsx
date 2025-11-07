
const DataCard = ({ field, value }: { field: string; value: string }) => {


    return <div className={'dataCard'}>
    <h3>{field}</h3>
    <h3>: {value}</h3>
    </div>
}

export default DataCard; 