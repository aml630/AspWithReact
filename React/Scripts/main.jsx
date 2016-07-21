
function exampleHelper() {
    return "heey im a helper"
}

var StorePicker = React.createClass({

    getInitialState: function () {
        return {
            fishes: {
                fish1: {
                    name: "john"
                },
                fish2: {
                    name: "jjj"
                }
            },
            order: {}
        }
    },
    addFish: function (fish) {
        var timestamp = (new Date()).getTime();
        this.state.fishes['fish-' + timestamp] = fish;
        this.setState({ fishes: this.state.fishes });
    },

    myfunction: function (event) {
        event.preventDefault();
        var theInput = this.refs.storeId.value;
        alert(theInput);
    },
    renderFish: function (key) {
        return <Fish key={key} index={key} details={this.state.fishes[key]}/>
    },
   

    render: function () {
        var name = "alex";
        var functionResult = exampleHelper();
        return (
            <div>
        <form onSubmit={this.myfunction}>
            <h2 className="store-selector">please enter a store {name}</h2>
            <input type="text" ref="storeId" placeholder={functionResult}/>
            <input type="submit" />
        </form>
        <AddFishForm addFish={this.addFish}/>
                <ul className="list-of-fishes">
                    {Object.keys(this.state.fishes).map(this.renderFish)}
                </ul>

        </div>
    )
  }
})

var Fish = React.createClass({
    render: function () {
        return(
            <li>{this.props.index}</li>
            )
    }
})

var AddFishForm = React.createClass({
    createFish: function () {
        var fish = {
            name: this.refs.name.value
        }
        this.props.addFish(fish);
        this.refs.name.value = "";
    },
    render: function () {
        return (
            <div>
            <p>fish form?</p>
                <input placeholder="fishName" ref="name"/>
            <button onClick={this.createFish}>Create Fish</button>
            </div>
            )
    }
})


ReactDOM.render(
    <StorePicker/>, document.getElementById('main')
 );