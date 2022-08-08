
import { useState } from "react";
import "./FormSubscription.css"
const FormSubscription = (props) => {

    // const [userTitle,setUserTitle]=useState("");
    // const [userDate, setUserDate]=useState("");
    // const [userAmout,setUserAmout]=useState("");
    const [form,setForm]=useState({userTitle:"",userDate:"",userAmout:""})


    const titleChangeHandler=(events)=>{
        // console.log(events.target.value);
        // setUserTitle(events.target.value)
        // setForm({...form,userTitle:events.target.value})
        setForm((prevState)=>{
            return ({...prevState,userTitle:events.target.value})
        })
        // console.log(form)
        // console.log(userTitle)
    }

    const dateChangeHandler=(events)=>{
        // setUserDate(events.target.value)
        setForm({...form,userDate:events.target.value})
      
        // console.log(userDate)
    }
 const amoutnChangeHandler=(events)=>{
    // setUserAmout(events.target.value)
    setForm({...form,userAmout:events.target.value})
    // console.log(userAmout)
    // console.log(form)
 }
//  console.log(userAmout)
//  console.log(userTitle)
//  console.log(userDate)
const submitHandler=(events)=>{
events.preventDefault()
const subscription={title:form.userTitle, amount:form.userAmout, date: new Date(form.userDate)}
console.log("form submit",subscription)
// to send data form child to parents
props.onSave(subscription)
}

  return (
<form onSubmit={submitHandler}>
    <div className="New_subscription_controls">
        <div className="new_subscription_control">
            <label>title</label>
            <input type="text" placeholder="Enter Subscription" value={form.userTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new_subscription_control">
            <label>Date</label>
            <input type="date" placeholder="Select date" value={form.userDate}  onChange={dateChangeHandler}></input>
        </div>
        <div className="new_subscription_control">
            <label>Amount</label>
            <input type="text" placeholder="Enter Amount" value={form.userAmout}  onChange={amoutnChangeHandler}></input>
        </div>
    </div>
    <div className="new_subscripton_action">
        <button type="submit">Add subscription</button>
    </div>
   </form>
  )
}

export default FormSubscription