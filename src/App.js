
import './App.css';
import Container from './components/Template/Container';
// import BooksList from './components/BooksList';
// import StudentList from './components/StudentList';
import Subscription from './components/Subscription'
import NewSubscription from './components/NewSubscription/NewSubscription';
import Filter from './components/Filter';
import { useState } from 'react';
const INITIAL_SUBSCRIPTION=[
  {
    id:"1",
    date: (new Date('2022','03','23')),
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
    date: (new Date('2022','05','25')),
    title:"Monthly Subscription",
    amount:"125.06"
  }
]

function App() {
  const [subscriptions , setSubscription]=useState(INITIAL_SUBSCRIPTION)
  
  const [filteredYear, setFilteredYear]=useState("2022");

  const addsubscriptionHandler=(data)=>{
    // // subscription.push(data)
    // setSubscription([data,...subscription])
    setSubscription(prevState=>{return [data,...subscriptions]})
    console.log("on add subscription ", data)
    console.log(subscriptions)
  }

  // let date = (new Date('2022','03','23'));
  // let title="Monthly Subscription";
  // let amount='125.60';

  const filterChangeHandler=(data)=>{
    setFilteredYear(data)
    // console.log("filter change handler",data)
    
  }
const filterSubscription=subscriptions.filter((item)=>{
  return item.date.getFullYear().toString()===filteredYear
})

  return (
   
      <Container>
         <NewSubscription  onAddsubscription={addsubscriptionHandler} />
         <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
          {/* <Subscription date={subscription[0].date} title={subscription[0].title} amount={subscription[0].amount}/>
          <Subscription date={subscription[1].date} title={subscription[1].title} amount={subscription[1].amount}/>
          <Subscription date={subscription[2].date} title={subscription[2].title} amount={subscription[2].amount}/> */}
          {/* you also write */}
           {/* {subscription.map((subscription)=>{
        return <Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>})} */}
      {
        filterSubscription.length===0 ? <h1>No Data Found</h1> :filterSubscription.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
      }
       
        {/* {subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
        {/* {filterSubscription.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
       
      </Container>
  );
}

export default App;
