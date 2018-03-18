import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { TitleComponent } from 'Components/title.component';
import { todo } from 'Data/items.data'

export class HomePage extends Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdate.bind(this);
    }
    componentDidMount(){
        todo.on('update',this.forceUpdateHandler);
    }
    componentWillUnmount(){
        todo.removeListener('update',this.forceUpdateHandler);
    }
  render() {
    return (
      <div>
        <TitleComponent>Home</TitleComponent>
        <div>
          <ul class="itemList">
              {todo.todoList.map((item,index)=>(
                  <li key={item.startAt}>{item.name}<Link to={`detail/${index}`}>detail</Link><button onClick={()=>todo.deleteTodo(index)}>delete</button></li>
              ))}
          </ul>
            <Link class="bottomLink" to='/add'>add</Link>
        </div>
      </div>

    )
  }
}