import React, { Component } from 'react';

import { TitleComponent } from 'Components/title.component';
import {todoList,addTodo } from 'Data/items.data';
import {Todo} from 'Pages/home.page';

export class AddPage extends Component {
    constructor(){
        super();
        let id = todoList.length;
        this.state = {
            id:id+1,
            text:'',
            desc:''
        };
        console.log(id);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTextChange(e){
        this.setState({text:e.target.value});
    }
    handleDescChange(e){
        this.setState({desc:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            id:this.state.id,
            name:this.state.text,
            description:this.state.desc,
            startAt:Date.now(),
            endAt:Date.now()
        };
        Todo.addTodo(newItem);
        console.log(newItem);
        this.setState({
            text:'',
            desc:''
        })
    }
    render() {
        return (
            <div className="InputBox">
                <TitleComponent>add</TitleComponent>
                <form onSubmit={this.handleSubmit}>
                    <p>name:</p>
                    <input
                        onChange = {this.handleTextChange}
                        value = {this.state.text}
                    />
                    <br/>
                    <p>description:</p>
                    <input
                        onChange = {this.handleDescChange}
                        value = {this.state.desc}
                    />
                    <br/>
                    <button>Add</button>
                </form>
            </div>

        )
    }
}