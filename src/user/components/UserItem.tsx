import React from 'react'
import './UserItem.scss'

type Props = {
    id: string,
    image: string,
    name: string;
    placesCount: number
}

const UserItem = (props: Props) => {
    const {id, image, name, placesCount} = props;
  return (
    <div>UserItem</div>
  )
}

export default UserItem
