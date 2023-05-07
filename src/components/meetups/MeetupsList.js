import classes from './MeetupsList.module.css'
import MeetupItem from './MeetupItem'

function MeetupsList(props){
return <ul className={classes.list}>
    {props.meetups.map((item)=>{
        return <MeetupItem 
                key={item.id}
                id={item.id} 
                image={item.image}
                title={item.title}
                address={item.address}
                description={item.description}
                />
    })}
</ul>
}

export default MeetupsList