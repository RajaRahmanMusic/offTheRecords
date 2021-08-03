// npx babel --watch jsx --out-dir offTheRecords/static/ --presets react-app/prod

// FOREIGN KEY FIELDS DO NOT RETURN USERNAME AS DESIGNED IN MODELS.PY

class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {artists : [], editRow: -1}
    }

    componentDidMount() {
        fetch("/api/artist/").then(resp => resp.json()
        ).then(json => this.setState({artists: json}))
    }

    clicked(e, n)
    {
        e.preventDefault();
        const link = this.state.artists[n].artist_name
        console.log(link)
        window.location.href = "/artist/" + link;
    }

    render() {
        return (
            <div>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <td>Artist Name</td>
                        <td>Legal Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.artists.map( (artist, n) => {
                        return (<tr  onClick={ e => this.clicked(e, n)} key={artist.id}>
                            <td>{ artist.artist_name }</td>
                            <td>{ artist.legal_name}</td>
                            <td>{ artist.email}</td>
                        </tr>)
                    })
                }
                </tbody>
            </table>

            </div>
        )
    }
}
const elem = document.getElementById("root")
ReactDOM.render(
    <Manager />, elem
)


console.log("0.08")