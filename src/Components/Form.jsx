import { useReducer, useRef } from "react";
import { ACTION_TYPE, formReducer, initialSets } from "./formReducer";
export const Form = () => {
    const tagRef = useRef();
    const [state,dispatch]= useReducer(formReducer,initialSets);
    const inputChk = (e)=>{
        dispatch({type:ACTION_TYPE.changeInput,data:{name:e.target.name , value:e.target.value}})
    }
    const plusTags = ()=>{
        const tags = tagRef.current.value.split(",");
        tags.map((tag)=>{ 
           if(tag === "") return false
           else return  dispatch({type:ACTION_TYPE.addTag, data : tag})
        })
        tagRef.current.value = "";
    }
    const resetForm = ()=>{
       return document.querySelector("form").value = ""
    }
    console.log(state);
    return (
    <div>
      <form className="form-control">
        Aihe: <input type="text" name="subject" placeholder="Subject" onChange={inputChk} />
        Tuote: <input type="text" name="product" placeholder="Product" onChange={inputChk}/>
        Hinta:<input type="number" name="price" placeholder="Price" onChange={inputChk}/>
        Ryhmä:{" "}
        <select name="category" onChange={inputChk}>
          <option></option>
          <option>Laukut</option>
          <option>Kengät</option>
          <option>Takit</option>
          <option>Housut</option>
          <option>tossut</option>
        </select>
        <br />
        <br />
        <textarea ref={tagRef}
          cols={25}
          rows={5}
          placeholder="Lisää tägiä ja errota ne ,"
        ></textarea>
        <br />
        <button type="button" onClick={plusTags}>Valitse Tägiä</button>
        {state.tags.map((tag,index)=>{
            return <button key={index} type="button" onClick={()=>dispatch({type:ACTION_TYPE.removeTag ,data:tag})}>{tag}</button>
        })}
        <br/>
        <button type="button" onClick={()=>dispatch({type:ACTION_TYPE.inc})}>Lisää +</button>
        <button type="button" onClick={()=>dispatch({type:ACTION_TYPE.dec})}>Vähennä -</button>
        <h5>{state.count}</h5>
        <button onClick={resetForm}>Reset</button>
      </form>
      <h6>Aihe:{state.subject},Tuote:{state.product},Hinta:{state.price},Ryhmä:{state.category},Määrä: {state.count},Tags:{state.tags}</h6>
    </div>
  );
};


