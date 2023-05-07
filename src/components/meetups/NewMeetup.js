import classes from './NewMeetup.module.css'
import Card from '../ui/Card'

function NewMeetup(){
    return (
        <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" id='title'  required />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" id='image' />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Meetup Address</label>
                <input type="text" id='address' />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description'  rows='5' />
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