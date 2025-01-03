import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not tick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no, display, text, setTodos}) => {
    const deleteIt = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((e)=>e.no!==no);
        setTodos(data);
    }
    const toggle = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'));
        for(let i=0; i<data.length; i++){
            if(data[i].no === no){
                if(data[i].display ===""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
    return (
      <div className="toolitems">
        <div className={`toolitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display ===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' src={cross} alt="" onClick={()=>{deleteIt(no)}}/>
      </div>
    )
  }
  
  export default TodoItems;