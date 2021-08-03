var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// npx babel --watch jsx --out-dir offTheRecords/static/ --presets react-app/prod

// FOREIGN KEY FIELDS DO NOT RETURN USERNAME AS DESIGNED IN MODELS.PY

var Manager = function (_React$Component) {
    _inherits(Manager, _React$Component);

    function Manager(props) {
        _classCallCheck(this, Manager);

        var _this = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, props));

        _this.state = { artists: [], editRow: -1 };
        return _this;
    }

    _createClass(Manager, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("/api/artist/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this2.setState({ artists: json });
            });
        }
    }, {
        key: "clicked",
        value: function clicked(e, n) {
            e.preventDefault();
            var link = this.state.artists[n].artist_name;
            console.log(link);
            window.location.href = "/artist/" + link;
        }
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
                                "Artist Name"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Legal Name"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "Email"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.artists.map(function (artist, n) {
                            return React.createElement(
                                "tr",
                                { onClick: function onClick(e) {
                                        return _this3.clicked(e, n);
                                    }, key: artist.id },
                                React.createElement(
                                    "td",
                                    null,
                                    artist.artist_name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    artist.legal_name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    artist.email
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Manager;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Manager, null), elem);

console.log("0.08");