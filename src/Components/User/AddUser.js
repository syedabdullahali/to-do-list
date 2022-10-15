import React,{useState,useRef} from "react";
import classes from  './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserData from "../userdata/UserData";
import AlertModal from "../UI/AlertModal";
import Wrapper from "../wrapper/wrapper";
let arr = []
let id  = 0
let arr2= [`😀`,`😁`,`😆`,`😄`,`🤣`,`😂`,`😅`,`😉`,`🙃`,`🙃`,`😉`,`😊`,`😇`,`🥰`,`😍`
          ,`🤩`,`😘`,`😗`,`😚`,`😙`,`🥲`,`😋`,`😛`,`😜`,`🤪`,`😝`,`🤑`,`🤗`,`🤭`,`🤫`, 
           `🤔`,`🤐`,`🤨`,`😐`,`😑`,`😶`,`😏`,`😒`,`🙄`,`😬`,`😮‍💨`,`🤥`,`😌`,`😔`,`🥳`,
           `😪`,`🤤`,`😴`,`😷`,`🤒`,`🤕`,`🤢`,`🤧`,`🥵`,`🥶`,`🥴`,`😵`,`😵‍💫`,`🤯`,`🤠`,
           `🥸`,`😎`,`🤓`,`🧐`,`😕`,`😟`,`🙁`,`😮`,`😯`,`😲`,`😳`,`🥺`,`😭`,`😡`,`😩`]
  
      
let number = 1



const AddUser = (props)=>{
const [enterdUserName, setEnterdName]  = useState('')
const [enterdUserAge, setEnterdAge]  = useState('')
const [error,setError] = useState()

const InputNameRef = useRef()
const InputAgeRef = useRef()

const  addUserHandler = (event) => {
number = Math.trunc(Math.random()*arr2.length)
// const  enterdUserName = InputNameRef.current.value
// const  enterdUserAge =  InputAgeRef.current.value 

event.preventDefault()
if(!enterdUserName.trim().length || !+enterdUserAge){
   setError({
      title:'Invalid input',
      message:'Please enter a valid name and age (non-empty values).'
   })
   return
}

if(+enterdUserAge<1){
   setError({
      title:'Invalid age',
      message:'Please enter a valid age (>0).'
   })
return 
}

arr.push({id:"U"+ ++id,user:enterdUserName,age:enterdUserAge,num:number})
setEnterdAge('')
setEnterdName('')
}    




const usernameChangeHandler =  (event)=>{
   setEnterdName(event.target.value)
}

const ageChangeHandler =  (event)=>{
   setEnterdAge(event.target.value)
}

const errorHanler = ()=>{
   setError(null)
}

return (
   <Wrapper>
       {error && <AlertModal title={error.title} message={error.message} onConfirm={errorHanler}/>}



   <Card className={classes.input}>
   <form onSubmit={addUserHandler}>
    <label>Username</label>

    <input 
    id='username' type={'text'}  
    value={enterdUserName}
    onChange={usernameChangeHandler}
    ref={InputNameRef}
    />

    <label>Age (years)'</label>

    <input 
    id='username' type={'number'} 
    value={enterdUserAge}
    onChange={ageChangeHandler}
    ref={InputAgeRef}
    />
    <Button type="submit" >Add User</Button>
   </form>
   </Card>
   
       {arr.map((el)=><UserData key = {el.id}  user= {el.user} age={el.age} number={arr2[el.num]}/>)}
   </Wrapper>


)



}

export default AddUser