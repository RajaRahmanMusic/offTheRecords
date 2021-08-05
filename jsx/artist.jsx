{/* TODO MAKE DATE FIELD MORE USER FRIENDLY */}



class ArtistView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: ""}
    }

    displayForeign(name, title, link){
        console.log(name, title, link)
        if (this.props.artist[name]) {
            return(
                <tr><td>
                    {link ? <a href={link} target={"_blank"}>{title}</a> : title }
                </td>

                <td><div className={'row'}>
                {

                    Object.keys(this.props.artist[name]).map( key => {
                        if(key != "id") {
                            return (
                                <React.Fragment key={key}>
                                    <div className={"col-sm-2"}>{ key }</div>
                                <div className={"col-sm-2"}>
                                    {  key == "verified"  ? (this.props.artist[name].verified == true ? "True" : "False")
                                        : this.props.artist[name][key]}
                                </div>
                               </React.Fragment> )
                        }
                    })
                }

                </div></td>
                </tr>
                )
        }
    }

    secondaryItems() {
        if(  this.props.create === false) {
            return (
                            <React.Fragment>

                                { this.displayForeign('instagram', 'Instagram', 'https://instagram.com/') }


                                { this.displayForeign('facebook', 'Facebook', 'https://www.facebook.com/') }

                                { this.displayForeign('twitter', 'Twitter', 'https://twitter.com/?lang=en') }

                                { this.displayForeign('linkedIn', 'LinkedIn', 'https://www.linkedin.com/') }

                                { this.displayForeign('tikTok', 'TikTok', 'https://www.tiktok.com/en/') }

                                { this.displayForeign('youTube', 'YouTube', 'https://www.youtube.com/' ) }

                                { this.displayForeign('soundCloud', 'SoundCloud', 'https://soundcloud.com/') }

                                { this.displayForeign('bandCamp', 'Bandcamp', 'https://bandcamp.com/') }

                                { this.displayForeign('spotifyForArtists', 'Spotify For Artists', 'https://artists.spotify.com/') }


                                {this.props.artist.ascap && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.ascap.com/'}>ASCAP</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.ascap || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.bmi && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.bmi.com/'}>BMI</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.bmi || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.soundExchange && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.soundexchange.com/'}>SoundExchange</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.soundExchange || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.mlc && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.themlc.com/'}>MLC</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.mlc || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.songTrust && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.songtrust.com/'}>Songtrust</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.songTrust || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.googleDrive && (
                                    <tr>
                                        <td><a target="_blank" href={'https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&flowName=GlifWebSignIn&flowEntry=ServiceLogin'}>Google Drive</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.googleDrive || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }
                                {this.props.artist.venmo && (
                                    <tr>
                                        <td><a target="_blank" href={'https://venmo.com/'}>Venmo</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.venmo || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.payPal && (
                                    <tr>
                                        <td><a target="_blank" href={'https://www.paypal.com/us/webapps/mpp/home'}>PayPal</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.payPal || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }

                                {this.props.artist.cashapp && (
                                    <tr>
                                        <td><a target="_blank" href={'https://cash.app/'}>Cash App</a></td>
                                        <td>
                                            <div className={"row"}>
                                                <div className={"col-sm-2"}>
                                                    {this.props.artist.payPal || ""}
                                                </div>
                                                <div className={"col-sm-10"}>
                                                    For additional login credentials, please consult your personal records or email the artist.
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                }
                                </React.Fragment>
                            )
        }
        else {
            return <React.Fragment></React.Fragment>
        }
    }

    render() {

        return(
            <div>
                <table className={"table"}>
                    <tbody>
                        <tr><td>Artist Name</td>
                            <td>{this.props.artist.artist_name|| "" }
                            </td>
                        </tr>
                        <tr><td>Legal Name</td>
                            <td>
                                {this.props.artist.legal_name|| "" }
                            </td>
                        </tr>
                        <tr><td>Email</td>
                            <td>
                                {this.props.artist.email|| "" }
                            </td>
                        </tr>
                        <tr><td>Phone Number</td>
                            <td>
                                {this.props.artist.phone_number|| "" }
                            </td>
                        </tr>
                        <tr><td>Address</td>
                            <td>
                                {this.props.artist.address|| "" }
                            </td>
                        </tr>
                        <tr><td>Date of Birth</td>
                            <td>
                                {this.props.artist.date_of_birth|| "" }
                            </td>
                        </tr>
                        {this.props.artist.primary_genre && (
                            <tr>
                                <td>Primary Genre</td>
                                <td>
                                    {this.props.artist.primary_genre.name}
                                </td>
                            </tr>)
                        }
                        { this.props.artist.secondary_genre &&
                            (<tr><td>Secondary Genre</td>
                                <td>
                                    {this.props.artist.secondary_genre.name }
                                </td>
                            </tr>)
                        }
                        {this.props.artist.tertiary_genre && (
                            <tr>
                                <td>Tertiary Genre</td>
                                <td>
                                    {this.props.artist.tertiary_genre.name}
                                </td>
                            </tr>
                            )
                        }

                        {this.props.artist.website && (
                            <tr>
                                <td>Website</td>
                                <td><a target="_blank" href={this.props.artist.website || ""}>{this.props.artist.website || ""}</a>
                                </td>
                            </tr>
                            )
                        }
                        { this.secondaryItems() }

                    </tbody>
                </table>
            </div>
        )
    }
}






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
                                    <div className={"col-md-2"}><label>{key}</label></div>
                                    <div className={"col-md-2"}>
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
                </div>
                <div className={"row"}>
                    <div className={"col-md-2"}>
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
                                    <div className={"col-sm-2"}>{ key }</div>
                                <div className={"col-sm-2"}>
                                    {  key == "verified"  ? (this.props.artist[name].verified == true ? "True" : "False")
                                        : this.props.artist[name][key]}
                                </div>
                               </React.Fragment> )
                        }
                    })
                }
            </div>
                <div className={"row"}>
                <div className={"col-sm-2"}>
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
                            <tr>
                                <td><div><a target="_blank" href={'https://www.instagram.com/'}>Instagram</a></div></td>
                                { this.displayForeign('instagram') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://www.facebook.com/'}>Facebook</a></div></td>
                                { this.displayForeign('facebook') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://twitter.com/?lang=en'}>Twitter</a></div></td>
                                { this.displayForeign('twitter') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://www.linkedin.com/'}>LinkedIn</a></div></td>
                                { this.displayForeign('linkedIn') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://www.tiktok.com/en/'}>TikTok</a></div></td>
                                { this.displayForeign('tikTok') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://www.youtube.com/'}>YouTube</a></div></td>
                                { this.displayForeign('youTube') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://soundcloud.com/'}>SoundCloud</a></div></td>
                                { this.displayForeign('soundCloud') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://bandcamp.com/'}>Bandcamp</a></div></td>
                                { this.displayForeign('bandCamp') }

                            </tr>
                            <tr>
                                <td><div><a target="_blank" href={'https://artists.spotify.com/'}>Spotify For Artists</a></div></td>
                                { this.displayForeign('spotifyForArtists') }

                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.ascap.com/'}>ASCAP</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({ascap : e.target.value})}
                                           value={this.props.artist.ascap|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.bmi.com/'}>BMI</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({bmi : e.target.value})}
                                           value={this.props.artist.bmi|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.soundexchange.com/'}>SoundExchange</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({soundExchange : e.target.value})}
                                           value={this.props.artist.soundExchange|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.themlc.com/'}>MLC</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({mlc : e.target.value})}
                                           value={this.props.artist.mlc|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.songtrust.com/'}>Songtrust</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({songTrust : e.target.value})}
                                           value={this.props.artist.songTrust|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&flowName=GlifWebSignIn&flowEntry=ServiceLogin'}>Google Drive</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({googleDrive : e.target.value})}
                                           value={this.props.artist.googleDrive|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://venmo.com/'}>Venmo</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({venmo : e.target.value})}
                                           value={this.props.artist.venmo|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://www.paypal.com/us/webapps/mpp/home'}>PayPal</a></td>
                                <td>
                                    <input className="form-control"
                                           onChange={ e => this.props.updateArtist({payPal : e.target.value})}
                                           value={this.props.artist.payPal|| "" } />
                                </td>
                            </tr>
                            <tr>
                                <td><a target="_blank" href={'https://cash.app/'}>Cash App</a></td>
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
                                <input className="form-control" type={"date"}
                                       pattern={"\d{2}-\d{2}-\d{4}"}
                                       onChange={ e => this.props.updateArtist({date_of_birth : e.target.value})}
                                       value={this.props.artist.date_of_birth|| "" } />
                            </td>
                        </tr>
                        <tr><td>Primary Genre</td>
                            <td>
                                <select className="form-control"
                                       onChange={ e => this.props.updateArtist({primary_genre : e.target.value})}
                                       value={this.props.artist.primary_genre && this.props.artist.primary_genre.id }>
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
                                <select className="form-control"
                                       onChange={ e => this.props.updateArtist({secondary_genre : e.target.value})}
                                       value={this.props.artist.secondary_genre && this.props.artist.secondary_genre.id }>
                                    { !this.props.artist.secondary_genre &&
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
                        <tr><td>Tertiary Genre</td>
                            <td>
                                <select className="form-control"
                                       onChange={ e => this.props.updateArtist({tertiary_genre : e.target.value})}
                                       value={this.props.artist.tertiary_genre && this.props.artist.tertiary_genre.id }>
                                    { !this.props.artist.tertiary_genre &&
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
        let artist_id = document.getElementById('artist_id').value
        this.state = {id : artist_id || "",
            manager_id : document.getElementById('manager_id').value || "",
            artist : {}, genres: [], err: false, edit: "",
            mode : artist_id ? "display" : "edit"
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
                    const artist = {}
                    Object.keys(this.state.artist).forEach(key => {
                        if(typeof this.state.artist[key] != 'object') {
                            artist[key] = this.state.artist[key]
                        }
                        else if(key === "primary_genre") {
                            artist[key] = this.state.artist.primary_genre.id;
                        }
                    })
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

            if( name == "instagram" || name == "facebook"  || name == "twitter" || name == "tikTok"){
                artist[name] = {verified: false, username: "", followers: 0}
            }

            if( name == "linkedIn" || name == "youTube"  || name == "BandCamp" ){
                artist[name] = {username: "", followers: 0}
            }

            if( name == "soundCloud" ){
                artist[name] = {username: "", followers: 0, streams: 0}
            }

            if( name == "spotifyForArtists" ){
                artist[name] = {verified: false, username: "", followers: 0, monthly_listeners: 0}
            }

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

        if(artist === undefined) {
            artist = this.state.artist
        }
        const obj = {}
        Object.keys(artist).forEach(key => {
            if(typeof artist[key] != 'object') {
                obj[key] = artist[key]

            }
            else if(key === "primary_genre") {
                obj[key] = this.state.artist.primary_genre.id;
            }

        })

        fetch(link,
            {method: method,
             headers: { 'Content-type': 'application/json'},
             body: JSON.stringify(obj)
        }
        ).then(resp => resp.json()
        ).then(json => {
            console.log(json)
            if(json.id) {
                this.setState({artist : json, edit: "", mode: "display"})
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

    renderDisplay() {
        return (
            <div>
                <ArtistView artist={this.state.artist} create={this.state.artist.id ? false : true}
                                updateArtist={this.updateArtist} genres={this.state.genres}
                                edit={this.state.edit}
                                formSubmit={this.formSubmit} editForeign={this.editForeign}
                                saveForeign={this.saveForeign} editForeignHelper={this.editForeignHelper}/>
                   <div className={"row"}>
                       <button onClick={e => this.setState({mode: "edit"})}
                               className="btn btn-primary">Edit
                       </button>
                   </div>
            </div>)
    }

    renderEdit() {
        return ( <EditForm artist={this.state.artist} create={this.state.artist.id ? false : true}
                   updateArtist={this.updateArtist} genres={this.state.genres}
                   edit={this.state.edit}
                   formSubmit={this.formSubmit} editForeign={this.editForeign}
                   saveForeign={this.saveForeign} editForeignHelper={this.editForeignHelper} />)
    }

    render() {
        if(this.state.mode == "display") {
            return this.renderDisplay()
        }
        return this.renderEdit()
    }
}

const elem = document.getElementById("root")
ReactDOM.render(
    <Artist />, elem
)




console.log("0.35")