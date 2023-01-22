import React from 'react'
import UserItem from './UserItem'
import './UsersList.scss'

type User ={
    id: string,
    image: string,
    name: string;
    places: number
}
type Props = {
    items: User[]
}


const UsersList = (props: Props) => {
    const {items} = props;
    if(items.length === 0){
        return(
            <div className='center'>
                <h2>No users found.</h2>
            </div>
        )
    }
  return (
    <ul>
        {items.map((user: User) =>
             <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placesCount={user.places} />
        )}
    </ul>
  )
}

export default UsersList
