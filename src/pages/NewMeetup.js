/* eslint-disable no-unused-vars */
import AddNewMeetup from "../components/meetups/NewMeetup"
import { useNavigate } from 'react-router-dom'

function NewMeetup(props) {

    const navigate = useNavigate();

    function onAddHandler (data){
        fetch('https://meetups-project-9b0bd-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(()=>{
                navigate('/');
            })
            .catch(()=>{
                console.log('Errror');
            })
    }
    return (
        <AddNewMeetup onAddMeetup={onAddHandler} />
    )
}

export default NewMeetup