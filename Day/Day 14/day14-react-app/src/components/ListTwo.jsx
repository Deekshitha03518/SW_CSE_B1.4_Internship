function UserList(params) {
    const users = [
        {id: 1, name:"Usha", role:Farmer},
        {id: 2, name:"Asha", role:Bsc},
        {id: 3, name:"Isha", role:Developer},
    ]

    return(
               <div className="list-box">
            <h3>User List</h3>
            <ul>
                {/* map() */}
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}, is a {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;