

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: ""}


    }


    displayForeign(name){
        console.log(name)
        if(this.props.edit == name) {
            return (<td>
                <div className='row'>
                    {
                        Object.keys(this.props.artist[name]).map(key => {
                            if(key != "id") {
                                return (<React.Fragment key={key}>
                                    <div className={"col-xs-1"}><label>{key}</label></div>
                                    <div className={"col-xs-1"}>
                                        {key != "verified" ?
                                            (<input className="form-control"
                                                    onChange={e => this.props.editForeignHelper(e, name, key)}
                                                    value={this.props.artist[name][key]}/>)
                                            : (<input type={"checkbox"}
                                                      onChange={e => this.props.editForeignHelper(e, name, key)}
                                                      checked = { this.props.artist[name].verified}  />
                                            )
                                        }
                                    </div>
                                </React.Fragment>)
                            }
                        })
                    }
                    <div className={"col-xs-1"}>
                    <button onClick={ e => this.props.saveForeign(e, name) }
                            className="btn btn-dark">Save</button>
                </div>
            </div></td>)
        }
        else if (this.props.artist[name]) {
            return(<td><div className={'row'}>
                {

                    Object.keys(this.props.artist[name]).map( key => {
                        if(key != "id") {
                            return (
                                <React.Fragment key={key}>
                                    <div className={"col-xs-1"}>{ key }</div>
                                <div className={"col-xs-1"}>
                                    {  key == "verified"  ? (this.props.artist[name].verified == true ? "True" : "False")
                                        : this.props.artist[name][key]}
                                </div>
                               </React.Fragment> )
                        }
                    })
                }

                <div className={"col-xs-1"}>
                    <button onClick={ e => this.props.editForeign(e, name) }
                            className="btn btn-dark">Edit</button>
                </div>
            </div></td>)
        }
        else {
            return <td>
                    <button onClick={ e => this.props.editForeign(e, name) }
                            className="btn btn-dark">Add</button>
                </td>
        }
    }

    secondaryItems() {
        if(  this.props.create === false) {
            return (
                            <React.Fragment>
                            <tr><td>Instagram</td>
                                { this.displayForeign('instagram') }

                            </tr>
                            <tr><td>Facebook</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({facebook : e.target.value})}
                                           value={this.props.artist.facebook|| "" } />
                                </td>
                            </tr>
                            <tr><td>Twitter</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({twitter : e.target.value})}
                                           value={this.props.artist.twitter|| "" } />
                                </td>
                            </tr>
                            <tr><td>LinkedIn</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({linkedin : e.target.value})}
                                           value={this.props.artist.linkedin|| "" } />
                                </td>
                            </tr>
                            <tr><td>TikTok</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({tiktok : e.target.value})}
                                           value={this.props.artist.tiktok|| "" } />
                                </td>
                            </tr>
                            <tr><td>YouTube</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({youtube : e.target.value})}
                                           value={this.props.artist.youtube|| "" } />
                                </td>
                            </tr>
                            <tr><td>SoundCloud</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({soundCloud : e.target.value})}
                                           value={this.props.artist.soundCloud|| "" } />
                                </td>
                            </tr>
                            <tr><td>Bandcamp</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({bandCamp : e.target.value})}
                                           value={this.props.artist.bandCamp|| "" } />
                                </td>
                            </tr>
                            <tr><td>Spotify For Artists</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({spotifyForArtists : e.target.value})}
                                           value={this.props.artist.spotifyForArtists|| "" } />
                                </td>
                            </tr>
                            <tr><td>ASCAP</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({ascap : e.target.value})}
                                           value={this.props.artist.ascap|| "" } />
                                </td>
                            </tr>
                            <tr><td>BMI</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({bmi : e.target.value})}
                                           value={this.props.artist.bmi|| "" } />
                                </td>
                            </tr>
                            <tr><td>SoundExchange</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({soundExchange : e.target.value})}
                                           value={this.props.artist.soundExchange|| "" } />
                                </td>
                            </tr>
                            <tr><td>MLC</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({mlc : e.target.value})}
                                           value={this.props.artist.mlc|| "" } />
                                </td>
                            </tr>
                            <tr><td>Songtrust</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({songTrust : e.target.value})}
                                           value={this.props.artist.songTrust|| "" } />
                                </td>
                            </tr>
                            <tr><td>Google Drive</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({googleDrive : e.target.value})}
                                           value={this.props.artist.googleDrive|| "" } />
                                </td>
                            </tr>
                            <tr><td>Venmo</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({venmo : e.target.value})}
                                           value={this.props.artist.venmo|| "" } />
                                </td>
                            </tr>
                            <tr><td>PayPal</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({payPal : e.target.value})}
                                           value={this.props.artist.payPal|| "" } />
                                </td>
                            </tr>
                            <tr><td>Cash App</td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({cashapp : e.target.value})}
                                           value={this.props.artist.cashapp|| "" } />
                                </td>
                            </tr>
                                </React.Fragment>
                            )
        }
        else {
            return <React.Fragment></React.Fragment>
        }
    }
    render() {
        console.log("CREATED??", this.props.create)
        return(
            <div>
                <table className={"table"}>
                    <tbody>
                        <tr><td>Artist Name</td>
                            <td>
                                <input className={
                                (this.props.err && ! this.props.artist.artist_name) ? "form-control is-invalid" : "form-control" }
                                       onChange={ e => this.props.updateArtist({artist_name : e.target.value})}
                                       value={this.props.artist.artist_name|| "" } />
                            </td>
                        </tr>
                        <tr><td>Legal Name</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({legal_name : e.target.value})}
                                       value={this.props.artist.legal_name|| "" } />
                            </td>
                        </tr>
                        <tr><td>Email</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({email : e.target.value})}
                                       value={this.props.artist.email|| "" } />
                            </td>
                        </tr>
                        <tr><td>Phone Number</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({phone_number : e.target.value})}
                                       value={this.props.artist.phone_number|| "" } />
                            </td>
                        </tr>
                        <tr><td>Address</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({address : e.target.value})}
                                       value={this.props.artist.address|| "" } />
                            </td>
                        </tr>
                        <tr><td>Date of Birth</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({date_of_birth : e.target.value})}
                                       value={this.props.artist.date_of_birth|| "" } />
                            </td>
                        </tr>
                        <tr><td>Primary Genre</td>
                            <td>
                                <select className="form-control"
                                       onChange={ e => this.props.updateArtist({primary_genre : e.target.value})}
                                       value={this.props.artist.primary_genre }>
                                    { !this.props.artist.primary_genre &&
                                        <option>Select Genre</option>
                                    }
                                    { this.props.genres.map( (gen, idx) =>
                                        {

                                            return <option value={gen.id} key={gen.name}>{gen.name}</option>
                                        }
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr><td>Secondary Genre</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({secondary_genre : e.target.value})}
                                       value={this.props.artist.secondary_genre|| "" } />
                            </td>
                        </tr>
                        <tr><td>Tertiary Genre</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({tertiary_genre : e.target.value})}
                                       value={this.props.artist.tertiary_genre|| "" } />
                            </td>
                        </tr>
                        <tr><td>Website</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.props.updateArtist({website : e.target.value})}
                                       value={this.props.artist.website|| "" } />
                            </td>
                        </tr>
                        { this.secondaryItems() }
                        <tr><td colSpan="2">
                            <button onClick={e => this.props.formSubmit(e)}
                                    className="btn btn-primary">Update</button></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Artist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id :  document.getElementById('artist_id').value || "",
            manager_id : document.getElementById('manager_id').value || "",
            artist : {}, genres: [], err: false, edit: ""
        }
        this.updateArtist = this.updateArtist.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.saveForeign = this.saveForeign.bind(this)
        this.editForeign = this.editForeign.bind(this)
        this.editForeignHelper = this.editForeignHelper.bind(this)
    }

    componentDidMount() {
        if(this.state.id) {
            const link = "/api/artist/" + this.state.id

            fetch(link).then(resp => resp.json()
            ).then(json => {
                this.setState({artist: json});
                console.log(json)
            })
        }
        fetch("/api/genre/").then(resp => resp.json()
        ).then(json => this.setState({ genres : json }))
    }

    saveForeign(e,name) {
        console.log(e)
        const obj = this.state.artist[name]
        var method = "POST"
        var link = "/api/" + name + "/"
        console.log(link)

        if(obj.id) {
            method = "PUT"
            link = `/api/${name}/${obj.id}/`
        }
        fetch(link,
            {method: method,
             headers: { 'Content-type': 'application/json'},
             body: JSON.stringify(obj)
        }
        ).then(resp => resp.json()
        ).then(json =>
            {
                if(json.id) {
                    const artist = {...this.state.artist}
                    artist[name] = json.id
                    this.formSubmit(e, artist)
                }
            })
    }

    editForeign(e, name) {
        console.log(name)
        e.preventDefault();
        if(!  this.state.artist[name]) {

            let artist = { ...this.state.artist}
            // ifs for crazy socials and non verified
            artist[name] = {verified: false, username: "", followers: 0}

            // artist[name] = {username: "", cool: false }
            this.setState({edit: name, artist: artist})
        }
        else {
            this.setState({edit: name})
        }
    }

    editForeignHelper(e, name, key) {


        const artist = {... this.state.artist}
        if(key != 'verified') {
            artist[name][key] = e.target.value
            this.setState({artist: artist})
        }
        else {
            artist[name][key] = e.target.checked
            this.setState({artist: artist})
        }
    }


    formSubmit(e, artist) {
        e.preventDefault()
        console.log(e)
        var link = "/api/artist/"
        var method = "POST"
        if(this.state.id) {
            method = "PUT"
            link += this.state.id + '/'
        }

        fetch(link,
            {method: method,
             headers: { 'Content-type': 'application/json'},
             body: JSON.stringify(artist || this.state.artist)
        }
        ).then(resp => resp.json()
        ).then(json => {
            console.log(json)
            if(json.id) {
                this.setState({artist : json, edit: ""})
            }
            else {
                this.setState({ err: true })
            }
        })
    }

    updateArtist(changes) {
        const artist = { ...this.state.artist}
        var key = Object.keys(changes)[0]
        artist[key] = changes[key]

        this.setState({ artist : artist})
    }
    render() {

       return (<EditForm artist={this.state.artist} create={ this.state.artist.id ? false : true }
            updateArtist={ this.updateArtist } genres={this.state.genres}
                         edit={this.state.edit}
                         formSubmit={this.formSubmit } editForeign={this.editForeign}
                         saveForeign={this.saveForeign} editForeignHelper={this.editForeignHelper}

       />)

    }
}

const elem = document.getElementById("root")
ReactDOM.render(
    <Artist />, elem
)


console.log("0.24")