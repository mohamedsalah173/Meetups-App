/* eslint-disable no-unused-vars */
import MeetupsList from "../components/meetups/MeetupsList";
import { useEffect, useState } from "react";

function AllMeetups(props) {
    const [isLoading, setIsLoading] = useState(true);

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(()=>{

        fetch('https://meetups-project-9b0bd-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(data => {

                const meetups=[];

                for (const key in data) {
                    let meetup={
                        id:key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }

                setIsLoading(false)

                setFetchedData(meetups)
            });
    },[]);
    
    if (isLoading) {
        return (
            <div>
                <p>is loading...</p>
            </div>
        )
    }
    return (
        <ul>
            {<MeetupsList meetups={fetchedData} />}
        </ul>
    )

}

export default AllMeetups