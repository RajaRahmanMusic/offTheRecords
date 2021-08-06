var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.state = { projects: [], editRow: -1 };
        return _this;
    }

    _createClass(Project, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("/api/project/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this2.setState({ projects: json });
            });
        }
    }, {
        key: "clicked",
        value: function clicked(e, n) {
            e.preventDefault();
            var link = this.state.projects[n].name;
            console.log(link);
            window.location.href = "/project_plan/" + link;
        }
        // similar to main.jsx

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { className: "table table-striped table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Project Name"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Artist"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Start Date"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.projects.map(function (project, n) {
                            return React.createElement(
                                "tr",
                                { onClick: function onClick(e) {
                                        return _this3.clicked(e, n);
                                    }, key: project.id },
                                React.createElement(
                                    "td",
                                    null,
                                    project.name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    project.artist.artist_name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    project.start_date
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Project;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Project, null), elem);

console.log("0.02");