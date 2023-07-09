
import { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
const App=()=>{
    useEffect(()=>{
        fetchdata();
    })
    const fetchdata = () =>{
        axios.get('http://localhost:4000/api/app/')
    }
    const [input,setinput] = useState('');
    const [item,setitem] = useState([]);

    const changeHandler = (event) =>{
        setinput(event.target.value);
    }
    const clickHandler = () =>{
        setitem((value) =>{
            return [input, ...value];
        });
        setinput('');
    };
    const deleteItems = (id) =>{
        setitem((value) =>{
            return value.filter((arrelem,index)=>{
                return index!==id;
            })
        })
        console.log('deleted')
    }
    return(

        <div className="main-div">
           <div className='center-div'>
                <br/>
                <h1>ToDo list</h1>
                <br/>
                <input type='text' placeholder='add items' onChange={changeHandler} value={input} />
                <button onClick={clickHandler}>+</button>

                <ol>
                   {item.map((val,index) =>{
                    return(<div className='todo'>
                        <li>{val}</li>
                        <i className='cross' onClick={() =>{
                            deleteItems(index)
                        }}>-</i>
                    </div>)
                   })}
                </ol>
           </div>
        </div>
    )
}
export default App;