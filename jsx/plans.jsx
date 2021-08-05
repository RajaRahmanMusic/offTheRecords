

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects : [], editRow: -1}
    }

    componentDidMount() {
        fetch("/api/project/").then(resp => resp.json()
        ).then(json => this.setState({projects: json}))
    }

    clicked(e, n)
    {
        e.preventDefault();
        const link = this.state.projects[n].name
        console.log(link)
        window.location.href = "/project_plan/" + link;
    }

    render() {
        return (
            <div>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <td>Project Name</td>
                        <td>Artist</td>
                        <td>Start Date</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.projects.map( (project, n) => {
                        return (<tr  onClick={ e => this.clicked(e, n)} key={project.id}>
                            <td>{ project.name }</td>
                            <td>{ project.artist}</td>
                            <td>{ project.start_date}</td>
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
    <Project />, elem
)


console.log("0.02")