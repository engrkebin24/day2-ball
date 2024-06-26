import styles from "./App.module.css";

   

function UserInput() {
    return (

<form onSubmit={handleSubmit}>
        <input max={999} type="number" onChange={(e) => setUserInput(e.target.value)}></input>
        <button type="submit">go</button>
      </form>

     );
  
  }
  
  export default UserInput;