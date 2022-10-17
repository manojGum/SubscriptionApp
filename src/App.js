
import './App.css';
import Container from './components/Template/Container';
// import BooksList from './components/BooksList';
// import StudentList from './components/StudentList';
// import Subscription from './components/Subscription'
import NewSubscription from './components/NewSubscription/NewSubscription';
import Filter from './components/Filter';
import { useEffect, useState } from 'react';
import SubscriptionList from './components/subscription/SubscriptionList';
// some time
// import SubscriptionChart from './components/subscription/SubscriptionChart';

const INITIAL_SUBSCRIPTION=[
  {
    id:"1",
    date: (new Date('2023','03','23')),
    title:"Monthly Subscription",
    amount:"125.06"
  },
  {
    id:"2",
    date:(new Date('2022','04','24')),
    title:"Monthly Subscription",
    amount:"425.06"
  },
  {
    id:"3",
    date: (new Date('2021','05','25')),
    title:"Monthly Subscription",
    amount:"125.06"
  },
  {
    id:"3",
    date: (new Date('2020','05','25')),
    title:"Monthly Subscription",
    amount:"125.06"
  } ,
  {
    id:"3",
    date: (new Date('2022','05','25')),
    title:"Monthly Subscription",
    amount:"450.06"
  }
]

function App() {
  const [subscriptions , setSubscription]=useState(INITIAL_SUBSCRIPTION)
  
  const [filteredYear, setFilteredYear]=useState("2022");
  const [isLoading , SetIsLoading]=useState(false);
  const [error, SetError]=useState('')


useEffect(()=>{
  if(localStorage.getItem('filteredYear')){

    setFilteredYear(localStorage.getItem('filteredYear'))
    console.log(localStorage.getItem('filteredYear'))
  }
},[])



  const addsubscriptionHandler= async (data)=>{
    // // subscription.push(data)
    // setSubscription([data,...subscription])
    setSubscription(prevState=>{return [data,...subscriptions]});
    console.log("on add subscription ", data)
 
const postResponse = await fetch('https://react-workspace-aff8f-default-rtdb.firebaseio.com/subscriptions.json',
 {
  method:"POST",
  body:JSON.stringify(data),
  headers:{'content-type':'application/json'}
 }) 
    const dataStored= await postResponse.json()
    console.log(dataStored)
  }

  // let date = (new Date('2022','03','23'));
  // let title="Monthly Subscription";
  // let amount='125.60';

  const filterChangeHandler=(data)=>{
    setFilteredYear(data)
    localStorage.setItem('filteredYear',data)
    // console.log("filter change handler",data)
    
  }
const filterSubscriptions=subscriptions.filter((item)=>{
  return item.date.getFullYear().toString()===filteredYear
})
// let content=<h1>No data found</h1>
// if(filterSubscriptions.length !==0)
// {
//  content= filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
// }


const fetchListHandler= useState(()=>{
  SetIsLoading(true);
  // try{
  //   const response = await fetch('https://react-workspace-aff8f-default-rtdb.firebaseio.com/')
  //   // const data = await response.json
  //   // const transformedData= data.toString()
  //   if(!response.ok){
  //     throw new Error("something went wrong")
  //   }

  // }catch(error){
  //   SetError(error.message)

  // }


 fetch('https://react-workspace-aff8f-default-rtdb.firebaseio.com/subscriptions.json').then((response)=>{
  console.log(response)
  return response.json()
  }).then((data)=>{
    SetIsLoading(false)
console.log(data)
  }).catch(err=>{
   SetError((err)=>{
    SetError(err.message)
   })
  });
},[])

// useEffect(()=>{
//   fetchListHandler();
// },[ fetchListHandler ])

  return (
   
      <Container>
        <button type='button' onClick={fetchListHandler}>Fetch List</button>
         <NewSubscription  onAddsubscription={addsubscriptionHandler} />
         <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}  />
         {/* some times */}
 {/* <SubscriptionChart filterSubscriptions={filterSubscriptions}/> */}

         {/* <SubscriptionChart filteredSubscription={filterSubscription} /> */}
          {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
          <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
          <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/> */}
          {/* you also write 2 */}
           {/* {filterSubscriptions.map((subscription)=>{
        return <Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>})} */}
{/* you also used it 3  */}
      {/* {
        filterSubscriptions.length===0 ? <h1>No Data Found</h1> :filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
      } */}

{/* second approch 4 */}
      {/* {
         filterSubscriptions.length===0 && <h1>No Data Found</h1> 
      }
      {
        filterSubscriptions.length !==0 && filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>) 
      } */}
       

      {/* fort approch 5 */}
      {/* {
        content

       } */}



       {/* third approch  6 */}
       
{/* some time */}
      {!isLoading && filterSubscriptions.length>0 && <SubscriptionList subscriptions={filterSubscriptions}/>}
      
      {!isLoading && filterSubscriptions.length===0 && <p>No data found </p>}
      
      {isLoading && <p>please wait while we load your data ...</p> }
      {!isLoading && error &&  <p>some thing wrong</p> }

        {/* {subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
        {/* {filterSubscription.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
       
      </Container>
  );
}

export default App;
