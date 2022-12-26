import React from 'react';
import Parser from 'html-react-parser';


const Users = (props) => {
    const {users,loaded} = props

    var data;

    //chack if data is loaded or not
    if(loaded === false){
        data = `<h3>Users will be shown here</h3>`
    }
    else{
        
        if(users.length === 0)data = `<div class="loader"></div>`
        else{
            data = '';
            for(var i = 0;i < users.length;i++){
                data += `<div class="user" id="${users[i].id}">
                <img class="card-img-top" src="${users[i]['avatar']}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${users[i].first_name} ${users[i].last_name}</h5>
                  <a href="mailto:${users[i].email}">Send email</a>
                </div>
              </div>`
            }
            
        }
    }
    return (
        <div className='usersList'>
            {Parser(data)}
        </div>
    );
}

export default Users;
