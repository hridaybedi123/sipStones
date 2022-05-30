import './TableS.css';
function TableS() {
    return (
        <div>
        <body class="flex items-center justify-center">
            <div class="container " >
                <table class="w-full flex flex-row flex-no-wrap dark:bg-gray-700 overflow-hidden sm:shadow-lg my-5;">
                    <thead class="text-white">
                        <tr class="bg-gray-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">Class</th>
                            <th class="p-3 text-left">Time</th>
                        </tr>
                    </thead>
                    <tbody class="flex-1 sm:flex-none text-left">
                        
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Mechanics of Materials </td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">8:30 - 9:30</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Machine Design</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">9:35 - 10:35</td>
                           
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Engineering Design</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">10:40 - 11:40</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Engineering Mathematical Analysis 1</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">11:45 - 12:45</td>
                            
                        </tr>

                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Mechanical Laboratories in Solid Mechanics</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">1:30 - 2:30</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </body>
</div>

);
}

export default TableS;