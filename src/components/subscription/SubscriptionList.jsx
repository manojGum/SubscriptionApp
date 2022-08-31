import React from 'react'
import Subscription from '../Subscription';
import "./SubscriptionList.css";

const SubscriptionList = (props) => {

  




if(props.subscriptions.length ===0) { return <h1 className='list_no_data'>No data found</h1> }
 return (
    <ul className='list' >
        {
        props.subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
        }
    </ul>

)

}

export default SubscriptionList;