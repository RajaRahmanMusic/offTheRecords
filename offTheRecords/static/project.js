var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.state = { artists: [], type: 1, name: "", num_songs: 1,
            error: '', date: new Date(),
            num_od: 0 };

        _this.options = ["Pitching", "Long Form Video Content", "Short Form Video Content", "EPK", "Visualizers"];

        _this.options.forEach(function (opt) {
            _this.state[opt] = false;
        });
        return _this;
    }

    _createClass(Project, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("/api/artist/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this2.setState({ artists: json });
            });
        }
        // Create project form

    }, {
        key: "formSubmit",
        value: function formSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var data = { name: this.state.name,
                start_date: this.state.start_date,
                num_songs: this.state.num_songs,
                num_od: this.state.num_od,
                type: this.state.type,
                artist: this.state.selectedArtist,
                others: {}
            };

            this.options.forEach(function (opt) {
                if (_this3.state[opt]) {
                    data.others[opt] = _this3.state[opt] ? true : false;
                }
            });

            fetch("/api/project/", { method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (resp) {
                return resp.json();
            }).then(function (json) {
                if (json.status == "ok") {
                    window.location.href = "/project_plan/" + _this3.state.name + "/";
                } else {
                    _this3.setState({ error: json.status });
                }
            });
        }
    }, {
        key: "buttonEnabled",
        value: function buttonEnabled() {
            return this.state.selectedArtist && this.state.type && this.state.num_od !== undefined && this.state.num_songs && this.state.name;
        }
        // Renders project form

    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                { className: 'container-fluid' },
                React.createElement(
                    "h1",
                    null,
                    "Create a new project"
                ),
                React.createElement(
                    "form",
                    { onSubmit: function onSubmit(e) {
                            return _this4.formSubmit(e);
                        } },
                    React.createElement(
                        "div",
                        null,
                        "Name: ",
                        this.state.error,
                        React.createElement("input", { className: "formControl", value: this.state.name,
                            onChange: function onChange(e) {
                                return _this4.setState({ name: e.target.value });
                            } })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "select",
                            { onChange: function onChange(e) {
                                    return _this4.setState({ selectedArtist: e.target.value });
                                },
                                value: this.state.selectedArtist },
                            React.createElement(
                                "option",
                                null,
                                "Select Artist"
                            ),
                            this.state.artists.map(function (art) {
                                return React.createElement(
                                    "option",
                                    { key: art.id, value: art.id },
                                    art.artist_name
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "select",
                            { defaultValue: 1, onChange: function onChange(e) {
                                    return _this4.setState({ type: e.target.value });
                                } },
                            React.createElement(
                                "option",
                                { value: 1 },
                                "Studio"
                            ),
                            React.createElement(
                                "option",
                                { value: 0 },
                                "In the Box"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        "Songs:",
                        React.createElement("input", { className: "formControl", type: "number", value: this.state.num_songs,
                            onChange: function onChange(e) {
                                return _this4.setState({ num_songs: e.target.value });
                            } })
                    ),
                    React.createElement(
                        "div",
                        null,
                        "Overdubs:",
                        React.createElement("input", { className: "formControl", type: "number", value: this.state.num_od,
                            onChange: function onChange(e) {
                                return _this4.setState({ num_od: e.target.value });
                            } })
                    ),
                    React.createElement(
                        "div",
                        null,
                        "Start date:",
                        React.createElement("input", { className: "formControl", type: "date",

                            value: this.state.start_date,
                            onChange: function onChange(e) {
                                return _this4.setState({ start_date: e.target.value });
                            } })
                    ),
                    this.options.map(function (opt) {
                        return React.createElement(
                            "div",
                            { key: opt },
                            opt,
                            " :",
                            React.createElement("input", { type: "checkbox",
                                onChange: function onChange(e) {
                                    return _this4.setState(_defineProperty({}, opt, !_this4.state[opt]));
                                },
                                checked: _this4.state[opt] })
                        );
                    }),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary", disabled: !this.buttonEnabled()
                        },
                        "Create"
                    )
                )
            );
        }
    }]);

    return Project;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Project, null), elem);

console.log("0.06");