interface ITable {
    rows: object[],
    titles: string[]
}
export default function TableBase({ rows, titles }: ITable) {

    function renderTitles() {
        return <>
            {titles.map(item => (
                <th scope="col" className="px-6 py-3">
                    {item}
                </th>
            ))}
            <th scope="col" className="px-6 py-3 text-center">
                Action
            </th>

        </>
    }

    function renderRows() {
        return rows.map(item => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {Object.values(item).map((item) => (
                    <th scope="row" className="px-6 py-4">
                        {item}
                    </th>
                ))}
                <td className="px-6 py-4 text-center">
                    <a href="#" className="mr-1 font-medium bg-yellow-600 px-2 py-1 rounded text-yellow-300 dark:text-yellow-500 hover:underline">Edit</a>
                    <a href="#" className="mr-1 font-medium bg-green-600 px-2 py-1 rounded text-green-300 dark:text-green-500 hover:underline">update</a>
                </td>
            </tr>
        ))
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {renderTitles()}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}