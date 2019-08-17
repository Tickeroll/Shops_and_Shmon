import React, {Component} from 'react';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ppl: []
        }
    }


    add() {
        let ppl = this.state.ppl;
        ppl.push({age: 55, name: 'vasa'})
        this.setState({ppl})
    }

    delete(index) {
        let ppl = this.state.ppl;
        ppl.splice(index, 1)
        this.setState({ppl})

    }

    render() {
        return (
            <div>
                {this.state.ppl.map((element, index) => <div>
                        <p>{element.age}</p>
                    <button onClick={this.delete.bind(this, index)}>делете</button>
                    </div>
                )}
                {this.state.ppl.map(element => <p>{element.name}</p>)}
                <button onClick={this.add.bind(this)}>адд</button>

            </div>
        );
    }
}

export default Test;