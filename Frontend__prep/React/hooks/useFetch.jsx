//custom hook to handle fetching data through network 

import { useEffect, useState } from "react";


// const useFetch = (url) => {

//    const [data, setData] = useState(null);
//    const [error, setError] = useState(null);
//    const [loading, setLoading] = useState(true);

//    useEffect(() =>{
//       //fetch data, handle error cases 
//       const fetchDataThroughNetwork = async (url) => {
//          try {
//             const response = await fetch(url); //returns a readable stream
//             if(!response.ok){
//                throw new Error ('Network response was not ok');
//             }
//             const data = await response.json();
//             setData(data);
//          }
//          catch(error){
//             setError(error);
//          }
//          finally {
//             setLoading(false);
//          }
   
//          //cleanup function 
//          return (()=> {
//             const abortController = new AbortController();
//             abortController.abort();
//          })

//       };

//       fetchDataThroughNetwork(); 

//    },[url])


//    return {data, error, loading};
// }

export {useFetch};

/**
 * My component
 */

const MyComponent = () =>{
   const {data, error, loading} = useFetch(url);

   //fallback UI, or add a shimmer component
   if(loading){
      <div>{"Loading ....."}</div>
   }

   //Error scenario
   if(error){
      <div>Error : {error.message}</div>
   }

   return (
      <div>
         {data && data.map((item)=>{<div>{item} </div>})}
      </div>
   )
}


const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
      //fetch data 
      const fetchDataThroughNetwork = async(url) =>{
         try{
            const response = await fetch(url); //returns readable stream
            
            if(!response.ok){
               throw new Error('Network response issue');
            }

            const data = await response.json();
            setData(data);


         }catch(error){
            setError(error);
         }
         finally {
            setLoading(false);
         }
      };

      fetchDataThroughNetwork(url);

      //clean up function 
      return(()=>{
         const abortController = new AbortController();
         abortController.abort();
      })

   },[url])


   return {data, error, loading};
}


const MyComponentV1 = () =>{
   const {data, error, loading} = useFetch();

   if(loading){
      <div>Loading...</div>
   }

   if(error){
      <div>Error : {error.message}</div>
   }

   return (
      <div>
         {data && data.map((item, index) => (<div key={index}>{item} </div>))}
      </div>
   )
}