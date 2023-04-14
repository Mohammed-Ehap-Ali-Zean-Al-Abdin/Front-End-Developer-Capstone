import { useState , useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./styles/Table.css";
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return ((s = s * a % m) / m);
    };
  }

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(Number(date.replaceAll("-","").split("").reverse().join("")));
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };
  const submitAPI = function(formData) {
    return true;
  };
  
  function Table() {
    const [date,setDate] = useState([]);
    const [userName, setUserName] = useState(""); 
    const [guests, setGuests] = useState(1); 
    const [email, setEmail] = useState(""); 
    const [role, setRole] = useState("role");
    const [time, setTime] = useState("empty");
    const [dateInput, setDateInput] = useState("");
    useE

    function validateEmail(e){
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return e.match(validRegex);
    }
    const getIsFormValid = () => { 
      return ( 
        userName && 
        validateEmail(email) && 
        time !== "empty" && 
        role !== "role" 
      ); 
    }; 
    
    const clearForm = () => { 
      setUserName(""); 
      setGuests(1); 
      setEmail("");
      setDate([]);
      setDateInput(""); 
      setRole("role");
      setTime("empty"); 
    }; 
    
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      submitAPI({userName:userName,guests:guests,email:email,role:role,time:time})
      alert("Done sir!"); 
      clearForm(); 
    };
    return (
      <>
        <Header/>
        <main>
          <section id='table'>
            <form  onSubmit={handleSubmit}>
                <div className="Field"> 
                          <label htmlFor='userName'> 
                              User name <sup>*</sup> 
                          </label> 
                          <input 
                              value={userName} 
                              onChange={(e) => { 
                              setUserName(e.target.value); 
                              }} 
                              placeholder="User name"
                              id='userName' 
                          /> 
                      </div>
                <div className="Field"> 
                          <label htmlFor='email'> 
                              Email address <sup>*</sup> 
                          </label> 
                          <input 
                              value={email} 
                              onChange={(e) => { 
                              setEmail(e.target.value); 
                              }} 
                              placeholder="Email address"
                              id='email' 
                          /> 
                  </div>
                  <div className="Field">
                    <label htmlFor="res-date">Choose date <sup>*</sup></label>
                    <input id='res-date' value={dateInput}  type={'date'} onChange={(e) => setDateInput(e.target.value)} onBlur={(e)=>{setDate(fetchAPI(e.target.value))}}/>
                  </div>
                  <div className="Field">
                    <label htmlFor="res-time">Choose time <sup>*</sup></label>
                    <select id='res-time' value={time}  onChange={(e) => setTime(e.target.value)}>
                          <option value={"empty"}>-- : --</option>
                          {
                          date.length!==0 ? date.map(text => <option value={text} key={text}>{text}</option>) : <option value={"empty"}>{"Choose date first"}</option>
                          }
                    </select>
                  </div>
                  <div className="Field">
                    <label htmlFor="guests">Number of guests <sup>*</sup></label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => { setGuests(e.target.value); }}/>
                  </div>
                  <div className="Field">
                    <label htmlFor="occasion">Occasion <sup>*</sup></label>
                    <select id="occasion" value={role}  onChange={(e) => setRole(e.target.value)}>
                      <option value="role">Role</option> 
                      <option value="individual">Individual</option> 
                      <option value="business">Business</option>
                    </select>
                  </div>
                  <button type="submit" value="Make Your reservation" disabled={!getIsFormValid()}>Book</button>
              </form>
          </section>
        </main>
        <Footer/>
      </>
    );
  };
  
  export default Table;