import {useState, useEffect} from 'react';
import MeetUpList from "../meetups/MeetUpList";


function AllMeetupsPage (){

  const [isLoading, setIsLoading]=useState(true);
  const [loadedMeetups, setLoadedMetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
      'https://react-summery-f26a5-default-rtdb.firebaseio.com/meetups.json',  
          )
          .then((response)=>{
             return response.json();
          })
          .then((data)=>{
            const meetups=[];

            for(const key in data){
              const meetup={
                id:key,
                ...data[key]
              };
              meetups.push(meetup);
            }
              setIsLoading(false);
              setLoadedMetups(meetups);
        });
          
  },[]);

        if (isLoading){
          return(
            <section>
              <p>Loading.......</p>
            </section>
          );
        }

    return (
        <section>

            <h1>All Meetups</h1>

            <MeetUpList meetup={loadedMeetups}/>
        </section>
        
    );
     
}
export default AllMeetupsPage;