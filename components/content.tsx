import Card from "./card";


export default function Content(){
    return(
        <div className="flex flex-col mx-auto p-5 gap-5 mb-5 mt-20 ml-5 mr-5 rounded-2xl justify-center items-center">
              <div className="flex gap-0 mb-3">
                  <h1 className="text-9xl font-medium  text-blue-700 ">G</h1>
                  <h1 className="text-8xl mt-6 font-medium font-sans text-red-600">o</h1>
                  <h1 className="text-8xl mt-6 font-medium font-sans text-yellow-500">o</h1>
                  <h1 className="text-8xl mt-6 font-medium font-sans text-blue-700">g</h1>
                  <h1 className="text-8xl mt-6 font-medium font-sans text-green-600">l</h1>
                  <h1 className="text-8xl mt-6 font-medium font-sans text-red-600 rotate-348">e</h1>

                </div>
                <Card />
      </div>
    );
}