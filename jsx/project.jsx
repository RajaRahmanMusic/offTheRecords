class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {artists: [], type: 1, name: "", num_songs: 1,
            error: '', date: new Date(),
            num_od: 0}

        this.options = ["Pitching","Long Form Video Content",
            "Short Form Video Content", "EPK", "Visualizers"]

        this.options.forEach(opt => {this.state[opt] = false})
    }

    componentDidMount() {
        fetch("/api/artist/").then(resp=>resp.json()
        ).then(json => this.setState({artists: json}))
    }
    // Create project form
    formSubmit(e) {
        e.preventDefault()
        const data = {name : this.state.name,
            start_date:  this.state.start_date,
            num_songs: this.state.num_songs,
            num_od: this.state.num_od,
            type: this.state.type,
            artist: this.state.selectedArtist,
            others: {}
        }

        this.options.forEach(opt => {
            if(this.state[opt]) {
                data.others[opt] = this.state[opt] ? true : false;
            }
        })

        fetch("/api/project/",
            {method: "POST",
             headers: { 'Content-type': 'application/json'},
             body: JSON.stringify(data)
        }
        ).then(resp => resp.json()
        ).then(json => {
                if(json.status == "ok") {
                    window.location.href = "/project_plan/" + this.state.name + "/"
                }
                else {
                    this.setState({error: json.status})
                }
            }
        )
    }

    buttonEnabled() {
        return this.state.selectedArtist && this.state.type &&
            this.state.num_od !== undefined &&
            this.state.num_songs && this.state.name
    }
    // Renders project form
    render() {
        return(
            <div className={'container-fluid'}>
                <h1>Create a new project</h1>
                <form onSubmit={e => this.formSubmit(e)}>
                            <div>
                                Name: { this.state.error}
                                <input className="formControl"  value={this.state.name}
                                onChange={e => this.setState({name: e.target.value}) } />
                            </div>

                    <div>
                    <select onChange={e => this.setState({selectedArtist : e.target.value}) }
                        value={this.state.selectedArtist}>
                        <option>Select Artist</option>
                        { this.state.artists.map(art => {
                            return (<option key={art.id} value={art.id}>{art.artist_name}</option>)
                        })}
                    </select>
                    </div>
                    <div>
                    <select defaultValue={1} onChange={ e => this.setState({type: e.target.value})}>
                        <option value={1}>Studio</option>
                        <option value={0}>In the Box</option>
                    </select>
                    </div>
                    <div>Songs:
                    <input className="formControl" type={"number"} value={this.state.num_songs}
                           onChange={e => this.setState({num_songs: e.target.value}) } />
                    </div>
                    <div>Overdubs:
                    <input className="formControl" type={"number"} value={this.state.num_od}
                           onChange={e => this.setState({num_od: e.target.value}) } />
                    </div>
                    <div>Start date:
                    <input className="formControl" type={"date"}

                           value={this.state.start_date}
                           onChange={e => this.setState({start_date: e.target.value}) } />
                    </div>

                    {this.options.map(opt => {
                        return (
                            <div key={opt}>{opt} :
                                <input type={"checkbox"}
                                       onChange={e => this.setState({[opt] : !this.state[opt] })}
                                                      checked = { this.state[opt] }  />
                            </div>
                        )
                    }) }

                    <button className={"btn btn-primary"} disabled={! this.buttonEnabled() }
                    >Create</button>
                </form>
            </div>
        )
    }
}
const elem = document.getElementById("root")
ReactDOM.render(
    <Project />, elem
)


console.log("0.06")