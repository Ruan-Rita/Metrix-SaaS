import SimpleHash from "../../../util/SimpleHash"
import Input from "../Input"

interface ITable {
    rows: object[],
    titles: string[],
    theme?: string
}

type TableThemeType = {
    outline: ResponseTableThemeType
}

type ResponseTableThemeType = {
    head: string,
    body: string
    table: string
}
export default function TableBase({ rows, titles, theme }: ITable) {

    function renderTitles() {
        return <>
            <th scope="col" className={`px-6 h-10 text-center flex content-center ${renderTableTheme().head}`}>
                <div className="flex items-center justify-center h-full">
                    <Input type="checkbox" className="!w-5 h-5 border border-gray-300 bg-white !p-0" />
                </div>
            </th>
            {titles.map(item => (
                <th key={SimpleHash()} scope="col" className={`px-6 h-10 align-middle ${renderTableTheme().head}`}>
                    {item}
                </th>
            ))}
            <th scope="col" className={`px-6 h-10 text-center align-middle ${renderTableTheme().head}`}>
                Action
            </th>
        </>
    }

    function renderRows() {
        return rows.map(item => (
            <tr key={SimpleHash()} className={renderTableTheme().body}>
                <td scope="col" className="px-6 h-10 text-center flex align-middle" >
                    <div className="flex items-center justify-center h-full">
                        <Input type="checkbox" className="!w-5 h-5 border border-gray-300 bg-white !p-0" />
                    </div>
                </td>
                {Object.values(item).map((item) => (
                    <td key={SimpleHash()} scope="row" className="px-6 h-10 align-middle">
                        {item}
                    </td>
                ))}
                <td className="px-6 h-10 text-center align-middle">
                    <a href="#" className="mr-1 font-medium bg-yellow-600 px-2 py-1 rounded text-yellow-300 dark:text-yellow-500 hover:underline">Edit</a>
                    <a href="#" className="mr-1 font-medium bg-green-600 px-2 py-1 rounded text-green-300 dark:text-green-500 hover:underline">update</a>
                </td>
            </tr>
        ))
    }

    function renderTableTheme(): ResponseTableThemeType {
        const themeBase: TableThemeType = {
            outline: {
                head: 'text-gray-700 dark:text-gray-400',
                body: '',
                table: 'rounded-none'
            }
        }

        return themeBase[theme ?? 'outline']
    }

    return (
        <div className={`relative overflow-x-auto ${renderTableTheme().table}`}>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase ">
                    <tr className="border-y border-gray-200">
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