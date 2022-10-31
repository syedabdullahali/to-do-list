import Card from "./Card"
import Button from './Button'
import classes from './AlertModal.module.css'
import  ReactDOM from "react-dom";
const Backdrop = (props)=>{
return  <div className={classes.backdrop} onClick={props.onConfirm}/>

}

const ModalOverlay = (props)=>{
  return <Card className ={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
       <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
}

function AlertModal(props){
return( 
  <>
     {ReactDOM.createPortal(
     <Backdrop  onClick={props.onConfirm}/>,
     document.getElementById('backdrop-root'))}

     {ReactDOM.createPortal(
      <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
      document.getElementById('overlay-root')
     )}
  </>
      )


}

export default AlertModal