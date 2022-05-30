import './Table.css';
function Table() {
    return (
        <div>
        <body class="flex items-center justify-center">
            <div class="container pt-6 " >
                <table class="w-full flex flex-row flex-no-wrap dark:bg-gray-700 rounded-lg overflow-hidden sm:shadow-lg my-5;">
                    <thead class="text-white">
                        <tr class="bg-gray-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th class="p-3 text-left">Class</th>
                            <th class="p-3 text-left">Grade</th>
                        </tr>
                        
                    </thead>
                    <tbody class="flex-1 sm:flex-none">
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Pre-Calculus Mathamatics 40S</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Physics 40S</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                           
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Chemisty 40S</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">English 40S</td>
                            <td class="border-grey-light border hover:bg-gray-600 p-3 truncate">80%</td>
                            
                        </tr>

                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td class="border-grey-light border hover:bg-gray-600 p-3">Metal Work Technology</td>
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

export default Table;