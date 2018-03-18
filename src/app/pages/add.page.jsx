import React, { Component } from 'react';

import { TitleComponent } from 'Components/title.component';
import {todoList,addTodo } from 'Data/items.data';
import { todo } from 'Data/items.data'

export class AddPage extends Component {
    constructor(){
        super();
        let id = todoList.length;
        this.state = {
            id:id+1,
            text:'',
            desc:''
        };
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
        todo.addTodo(newItem);
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
                        onChange = {e => this.setState({text:e.target.value})}
                        value = {this.state.text}
                    />
                    <br/>
                    <p>description:</p>
                    <input
                        onChange = {e => this.setState({desc:e.target.value})}
                        value = {this.state.desc}
                    />
                    <br/>
                    <button>Add</button>
                </form>
            </div>

        )
    }
}