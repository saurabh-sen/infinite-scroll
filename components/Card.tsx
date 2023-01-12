import React from 'react'

const Card = ({id, user_id, title, description}:any) => {

    // let title = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reprehenderit ipsum eveniet quibusdam iusto. Quidem consectetur earum libero expedita dolor!";

    // let description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sapiente expedita vel tempore neque rem illo deserunt blanditiis nobis quo! Impedit perspiciatis ea libero optio beatae perferendis. Consectetur est assumenda, veritatis eaque nemo at minus quod rerum voluptates. Quae, nemo!";

    // let id = 1;
    // let user_id = 123;

  return (
    <div className='bg-slate-300 w-72 p-8 m-4 rounded-lg' >
        <p className="id text-xl font-semibold">Id :- {id}</p>
        <p className="user_id"> <span className="font-semibold ">User id :- </span> {user_id}</p>
        <p className="user_id"><span className="font-semibold ">title :-  </span> { title.length > 15 ? title.substring(0, 15)+" ..." : title} </p>
        <p className="user_id"><span className="font-semibold ">Description :- </span> { description.length > 100 ? description.substring(0, 100)+" ..." : description} </p>
    </div>
  )
}

export default Card