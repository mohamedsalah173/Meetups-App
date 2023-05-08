import { useRef } from 'react'

import classes from './NewMeetup.module.css'
import Card from '../ui/Card'

function NewMeetup(props){
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();


    function submitHandler(event){
        event.preventDefault();
        const meetupData = {
            title:titleInput.current.value,
            image:imageInput.current.value,
            address:addressInput.current.value,
            description:descriptionInput.current.value,
        };
        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" id='title'  required  ref={titleInput}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" id='image'  ref={imageInput}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup Address</label>
                <input type="text" id='address' ref={addressInput}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description'  rows='5' ref={descriptionInput}/>
            </div>
            <div className={classes.actions}>
                <button>Add To Meetup</button>
                {/* <button>Cancel</button> */}
            </div>
        </form>
        </Card>
    )
}

export default NewMeetup