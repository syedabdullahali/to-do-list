import Card from '../UI/Card'
import'./UserData.css'

function UserData(props){

return<Card className='parent'>
<ul >   
<li>{props.number +props.user}</li>
<li>{props.age +` years old`}</li>
</ul> 
</Card>



}
export default UserData