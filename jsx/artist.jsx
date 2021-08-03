

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {artist_name: props.artist.artist_name,
            legal_name: props.artist.legal_name,
            email: props.artist.email,
            phone_number: props.artist.phone_number,
            address: props.artist.address,
            date_of_birth: props.artist.date_of_birth,
            primary_genre: props.artist.primary_genre,
            secondary_genre: props.artist.secondary_genre,
            tertiary_genre: props.artist.tertiary_genre,
            website: props.artist.website,
            instagram: props.artist.instagram,
            facebook: props.artist.facebook,
            twitter: props.artist.twitter,
            linkedin: props.artist.linkedin,
            tiktok: props.artist.tiktok,
            youtube: props.artist.youtube,
            soundCloud: props.artist.soundCloud,
            bandCamp: props.artist.bandCamp,
            spotifyForArtists: props.artist.spotifyForArtists,
            ascap: props.artist.ascap,
            bmi: props.artist.bmi,
            soundExchange: props.artist.soundExchange,
            mlc: props.artist.mlc,
            songTrust: props.artist.songTrust,
            googleDrive: props.artist.googleDrive,
            venmo: props.artist.venmo,
            payPal: props.artist.payPal,
            cashapp: props.artist.cashapp,
            edit: {}
        }



    }

    displayForeign(name){
        if(this.state.edit[name]) {
            return (<td>
                <div className='col'>
                <input className="form-control"
                                       onChange={ e => this.setState({instagram : e.target.value})}
                                       value={this.state.instagram} />
                </div>
                <div clasName="col"><label>Followers:</label></div>
            </td>)
        }
    }

    formSubmit(e) {
        e.preventDefault();
        console.log("Form submit")
    }
    render() {
        return(
            <form onSubmit={e => this.formSubmit(e)}>
                <table>
                    <tbody>
                        <tr><td>Artist Name</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({artist_name : e.target.value})}
                                       value={this.state.artist_name} />
                            </td>
                        </tr>
                        <tr><td>Legal Name</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({legal_name : e.target.value})}
                                       value={this.state.legal_name} />
                            </td>
                        </tr>
                        <tr><td>Email</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({email : e.target.value})}
                                       value={this.state.email} />
                            </td>
                        </tr>
                        <tr><td>Phone Number</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({phone_number : e.target.value})}
                                       value={this.state.phone_number} />
                            </td>
                        </tr>
                        <tr><td>Address</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({address : e.target.value})}
                                       value={this.state.address} />
                            </td>
                        </tr>
                        <tr><td>Date of Birth</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({date_of_birth : e.target.value})}
                                       value={this.state.date_of_birth} />
                            </td>
                        </tr>
                        <tr><td>Primary Genre</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({primary_genre : e.target.value})}
                                       value={this.state.primary_genre} />
                            </td>
                        </tr>
                        <tr><td>Secondary Genre</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({secondary_genre : e.target.value})}
                                       value={this.state.secondary_genre} />
                            </td>
                        </tr>
                        <tr><td>Tertiary Genre</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({tertiary_genre : e.target.value})}
                                       value={this.state.tertiary_genre} />
                            </td>
                        </tr>
                        <tr><td>Website</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({website : e.target.value})}
                                       value={this.state.website} />
                            </td>
                        </tr>
                        <tr><td>Instagram</td>
                            { this.displayForeign('instagram') }

                        </tr>
                        <tr><td>Facebook</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({facebook : e.target.value})}
                                       value={this.state.facebook} />
                            </td>
                        </tr>
                        <tr><td>Twitter</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({twitter : e.target.value})}
                                       value={this.state.twitter} />
                            </td>
                        </tr>
                        <tr><td>LinkedIn</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({linkedin : e.target.value})}
                                       value={this.state.linkedin} />
                            </td>
                        </tr>
                        <tr><td>TikTok</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({tiktok : e.target.value})}
                                       value={this.state.tiktok} />
                            </td>
                        </tr>
                        <tr><td>YouTube</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({youtube : e.target.value})}
                                       value={this.state.youtube} />
                            </td>
                        </tr>
                        <tr><td>SoundCloud</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({soundCloud : e.target.value})}
                                       value={this.state.soundCloud} />
                            </td>
                        </tr>
                        <tr><td>Bandcamp</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({bandCamp : e.target.value})}
                                       value={this.state.bandCamp} />
                            </td>
                        </tr>
                        <tr><td>Spotify For Artists</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({spotifyForArtists : e.target.value})}
                                       value={this.state.spotifyForArtists} />
                            </td>
                        </tr>
                        <tr><td>ASCAP</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({ascap : e.target.value})}
                                       value={this.state.ascap} />
                            </td>
                        </tr>
                        <tr><td>BMI</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({bmi : e.target.value})}
                                       value={this.state.bmi} />
                            </td>
                        </tr>
                        <tr><td>SoundExchange</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({soundExchange : e.target.value})}
                                       value={this.state.soundExchange} />
                            </td>
                        </tr>
                        <tr><td>MLC</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({mlc : e.target.value})}
                                       value={this.state.mlc} />
                            </td>
                        </tr>
                        <tr><td>Songtrust</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({songTrust : e.target.value})}
                                       value={this.state.songTrust} />
                            </td>
                        </tr>
                        <tr><td>Google Drive</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({googleDrive : e.target.value})}
                                       value={this.state.googleDrive} />
                            </td>
                        </tr>
                        <tr><td>Venmo</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({venmo : e.target.value})}
                                       value={this.state.venmo} />
                            </td>
                        </tr>
                        <tr><td>PayPal</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({payPal : e.target.value})}
                                       value={this.state.payPal} />
                            </td>
                        </tr>
                        <tr><td>Cash App</td>
                            <td>
                                <input className="form-control"
                                       onChange={ e => this.setState({cashapp : e.target.value})}
                                       value={this.state.cashapp} />
                            </td>
                        </tr>
                        <tr><td colSpan="2"><button className="btn btn-primary">Update</button></td></tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

class Artist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'id' :  document.getElementById('artist_id').value}

    }

    componentDidMount() {
        fetch(`/api/artist/${this.state.id}`).then(resp => resp.json()
        ).then(json => {
            this.setState({artist: json});
            console.log(json)
        })
    }
    render() {
        if(this.state.artist) {
            return (<EditForm artist={this.state.artist}/>)
        }
        return "Loading..."
    }
}

const elem = document.getElementById("root")
ReactDOM.render(
    <Artist />, elem
)


console.log("0.10")