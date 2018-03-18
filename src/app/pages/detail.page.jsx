import React, { Component } from 'react';

import { TitleComponent } from 'Components/title.component';
import { todoList } from 'Data/items.data';

export class DetailPage extends Component {
    constructor(props){
        super(props);
        var listItem = todoList[this.props.match.params.id];
        this.state = {
            name:listItem.name,
            description:listItem.description,
            startAt:listItem.startAt,
            endAt:listItem.endAt
        }
    }
    render() {
        return (
            <div className="detail">
                <TitleComponent>Detail</TitleComponent>
                <p>name:{this.state.name}</p>
                <p>description:{this.state.description}</p>
                <p>startAt:{this.state.startAt}</p>
                <p>endAt:{this.state.endAt}</p>
            </div>
        )
    }
}