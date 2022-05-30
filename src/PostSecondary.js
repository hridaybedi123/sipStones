import './App.css';
import Navi from './Navi';
import './PostSecondary.css';
function PostSecondary() {
    return (
        <div>
            <Navi/>
            <div className='Post'>
                <h1 class="Header bg-gray-800 text-4xl text-white pb-2">Institutes that offer Mechanical Engineering</h1>
                <div class="container mx-auto p-8">
                <div class="flex flex-row flex-wrap -mx-2">       
                    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                    <div class="relative bg-white rounded border">
                        <picture class="block bg-gray-200 border-b">
                        <img class="block" src="UofM-logo.svg.png" alt="Card 1"></img>
                        </picture>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <a class="stretched-link" href="https://umanitoba.ca/explore/programs-of-study/mechanical-engineering-bsc" title="Card 1">
                            University of Manitoba
                            </a>
                        </h3>
                        <p>The mechanical engineering program is an accredited professional program providing education in basic sciences, mathematics and engineering sciences. Students acquire design skills for machines and processes based on the learned principles of mechanics, materials and energy. </p>   
                         
    
                        </div>
                    </div>
                    </div>
                                    
                    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
                    <div class="relative bg-white rounded border">
                        <picture class="block bg-gray-200 border-b">
                        <img class="block" src="RedRiverColllage.png" alt="Card 2"></img>
                        </picture>
                        <div class="p-4">
                        <h3 class="text-lg font-bold">
                            <a class="stretched-link" href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/MECEF-DP" title="Card 2">
                            Red River Collage
                            </a>
                        </h3>
                        <p>
                        This program prepares you to work in the design and production of high-quality manufactured goods.  You will select some specialty electives in your last term. This specialization completes your training by providing deeper insight into areas of technology that are of interest to you. These areas of specialization have been developed to help meet the needs of industry.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
      
    );
}
    
export default PostSecondary;