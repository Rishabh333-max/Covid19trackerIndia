import react, { useEffect,useState } from "react"
import './covid.css';

const Covid=()=>{

    const [data,setData]=useState([]);

   const getCovidData = async ()=>{
       try{
        const res = await fetch("https://api.covid19india.org/data.json");
       const actualData= await res.json();
       console.log(actualData.statewise[0]);
       setData(actualData.statewise[0]);
       }catch(err){
console.log(err)
       }
      
   }
        
    
    useEffect(()=>{
       getCovidData();
    },[]);
    return(
        <>
        <section>
            <ul className="heading">
            <h1 className="heading_name">🔴 LIVE</h1>
<h2 className="heading_names">COVID-19 CORONAVIRUS TRACKER</h2>
       </ul>     

<ul >
    <li className="card">
       
                <p className="card__name"><span>OUR</span>COUNTRY</p>
            
                <p className="card__total card__small">INDIA</p>
         
    </li>
    <li className="card1">
      
                <p className="card__name"><span>TOTAL</span>RECOVERED</p>
            
                <p className="card__total card__small">{data.recovered}</p>
          
    </li>
    <li className="card2">
       
                <p className="card__name"><span>TOTAL</span>CONFIRMED</p>
                <p className="card__total card__small">{data.confirmed}</p>
          
    </li>
    <li className="card3">
       
                <p className="card__name"><span>TOTAL</span>DEATH</p>
                <p className="card__total card__small">{data.deaths}</p>
           
    </li>
    <li className="card4">
       
                <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                <p className="card__total card__small">{data.active}</p>
          
    </li>
    <li className="card5">
      
                <p className="card__name"><span>LAST</span>UPDATED</p>
                <p className="card__total card__small">{data.lastupdatedtime}</p>
          
    </li>
</ul>
</section>
        </>
    )
    }
export default Covid