import React from 'react'
import './UsersList.scss'
type Props = {
    items: string[]
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
    <div>UsersList</div>
  )
}

export default UsersList
