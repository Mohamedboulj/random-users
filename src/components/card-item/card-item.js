import "./card-item.css"

export const Carditem =({user})=>{
    return (
              <li className="list" >
               
                <h1>{user.name}</h1>

                {/* <img src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`} /> */}
                <img src={`https://i.pravatar.cc/180?img=${user.id}`} />

                <span>{user.email}</span>
              </li>
            );
          
}