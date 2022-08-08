
import './App.css';
import Container from './components/Template/Container';
// import BooksList from './components/BooksList';
// import StudentList from './components/StudentList';
import Subscription from './components/Subscription'
import NewSubscription from './components/NewSubscription/NewSubscription';

function App() {
  let subscription=[
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
  const addsubscriptionHandler=(data)=>{
    subscription.push(data)
    console.log("on add subscription ", data)
    console.log(subscription)
  }

  // let date = (new Date('2022','03','23'));
  // let title="Monthly Subscription";
  // let amount='125.60';
  return (
   
      <Container>
         <NewSubscription  onAddsubscription={addsubscriptionHandler}/>
          <Subscription date={subscription[0].date} title={subscription[0].title} amount={subscription[0].amount}/>
          <Subscription date={subscription[1].date} title={subscription[1].title} amount={subscription[1].amount}/>
          <Subscription date={subscription[2].date} title={subscription[2].title} amount={subscription[2].amount}/>
   

   
       
      </Container>
  );
}

export default App;
