import React, {useState} from 'react'

const Input = (props) => {
  const [styles, setstyles] = useState(false)

  const handleDelete = () => {
    props.onDelete(props.index);
  };

  return (
    <div className='listItems'>
      <li
        onClick={() => {
          setstyles((previousValue) => {
            return !previousValue
          })
        }}
        style={{textDecorationLine: styles ? 'line-through' : 'none'}}
      >
        {props.text}
      </li>
      <span><button className='delBtn'  onClick={handleDelete} >X</button> </span>
    </div>
  )
}

export default Input
