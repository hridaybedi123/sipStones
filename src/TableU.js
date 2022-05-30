import './TableU.css';
function TableU() {
    return (
        <div>
        <body class="flex items-center justify-center">
            <div class="container " >
                <table class="w-full flex flex-row flex-no-wrap dark:bg-gray-700 rounded-lg overflow-hidden sm:shadow-lg my-5;">
                    <thead class="text-white">
                        <tr class="bg-gray-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">Class</th>
                            <th class="p-3 text-left">Grade</th>
                        </tr>
                        
                    </thead>
                    <tbody class="flex-1 sm:flex-none">
                        
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Mechanics of Materials </td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Machine Design</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                           
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Engineering Design</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Engineering Mathematical Analysis 1</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>

                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Mechanical Laboratories in Solid Mechanics</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>
                        
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td class="border-grey-light border hover:bg-gray-600 p-3">Toatal Average</td>
                        <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
</div>

);
}

export default TableU;