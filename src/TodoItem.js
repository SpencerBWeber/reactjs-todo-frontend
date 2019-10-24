import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done
    };
  }

  toggleDone = () => {
    fetch(`https://todolist-bd7fd.firebaseio.com/todos/${this.props.id}.json`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        done: !this.state.done
      })
    }).then(this.setState({ done: !this.state.done }));
  };

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={this.toggleDone}
          defaultChecked={this.state.done}
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
        <button onClick={() => this.props.delete(this.props.id)}>X</button>
      </div>
    );
  }
}

export default TodoItem;
