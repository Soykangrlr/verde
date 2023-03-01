
import Header from "./components/header";
import  { Toaster } from 'react-hot-toast';

import Page from "./pages"
function App() {

  return (
    <div className=" bg-gray-200 py-4">
    <div className="mx-auto container flex flex-col gap-y-5"> 
       <Header/>
       <Page/>
       <Toaster/>
    </div>
 
    </div>

  );
}

export default App;
