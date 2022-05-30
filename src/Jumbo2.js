import './Jumbo2.css';
import TableU from './TableU';
import TableS from './TableS';
function Jumbo2() {
    return ( 
        
        <div className="dumbo2">
            
            <h1 className="pt-11 ml-11 text-left text-6xl font-extrabold text-white" >University</h1>
                <div class=" classes mt-11 ml-11 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <a  class="block w-full px-4 py-2 text-4xl text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600">
                      Classes
                    </a>
                    <a href="/ClassChat" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Mechanics of Materials 
                    </a>
                    <a href="/ClassChat" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    Machine Design
                    </a>
                    <a href="/ClassChat" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    Engineering Design 
                    </a>
                    <a href="/ClassChat" class="block w-full px-4 py-2 text-xl rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    Engineering Mathematical Analysis 1
                    </a>
                    <a href="/ClassChat" class="block w-full px-4 py-2 text-xl rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    Mechanical Laboratories in Solid Mechanics
                    </a>
                    <div class='table float-right'>
                        <TableU/>
                    </div>
                    </div>
                <div class="Grades text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <a  class="block w-full px-4 py-2 text-4xl text-white bg-blue-700 border-b border-gray-200 rounded-t-lg dark:bg-gray-800 dark:border-gray-600">
                     Assignment
                    </a>
                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Assignment-1
                    </a>
                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Assignment-2
                    </a>
                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Assignment-3
                    </a>
                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" class="block w-full px-4 py-2 border-b text-xl border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Assignment-4
                    </a>
                    <a href="https://teams.microsoft.com/_#/apps/66aeee93-507d-479a-a3ef-8f494af43945/sections/classroom" class="block w-full px-4 py-2 text-xl rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                     Assignment-5
                    </a>
                    </div>
                <div class="Schedual text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <TableS />
                    </div>
        </div>
     );
}

export default Jumbo2;