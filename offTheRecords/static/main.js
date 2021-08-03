var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// npx babel --watch jsx --out-dir offTheRecords/static/ --presets react-app/prod

// FOREIGN KEY FIELDS DO NOT RETURN USERNAME AS DESIGNED IN MODELS.PY


var EditForm = function (_React$Component) {
    _inherits(EditForm, _React$Component);

    function EditForm(props) {
        _classCallCheck(this, EditForm);

        var _this = _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));

        _this.state = { artist_name: props.artist.artist_name,
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
        };

        return _this;
    }

    _createClass(EditForm, [{
        key: "displayForeign",
        value: function displayForeign(name) {
            var _this2 = this;

            if (this.state.edit[name]) {
                return React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "div",
                        { className: "col" },
                        React.createElement("input", { className: "form-control",
                            onChange: function onChange(e) {
                                return _this2.setState({ instagram: e.target.value });
                            },
                            value: this.state.instagram })
                    ),
                    React.createElement(
                        "div",
                        { clasName: "col" },
                        React.createElement(
                            "label",
                            null,
                            "Followers:"
                        )
                    )
                );
            }
        }
    }, {
        key: "formSubmit",
        value: function formSubmit(e) {
            e.preventDefault();
            console.log("Form submit");
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "form",
                { onSubmit: function onSubmit(e) {
                        return _this3.formSubmit(e);
                    } },
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
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
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ artist_name: e.target.value });
                                    },
                                    value: this.state.artist_name })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Legal Name"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ legal_name: e.target.value });
                                    },
                                    value: this.state.legal_name })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Email"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ email: e.target.value });
                                    },
                                    value: this.state.email })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Phone Number"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ phone_number: e.target.value });
                                    },
                                    value: this.state.phone_number })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Address"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ address: e.target.value });
                                    },
                                    value: this.state.address })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Date of Birth"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ date_of_birth: e.target.value });
                                    },
                                    value: this.state.date_of_birth })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Primary Genre"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ primary_genre: e.target.value });
                                    },
                                    value: this.state.primary_genre })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Secondary Genre"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ secondary_genre: e.target.value });
                                    },
                                    value: this.state.secondary_genre })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Tertiary Genre"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ tertiary_genre: e.target.value });
                                    },
                                    value: this.state.tertiary_genre })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Website"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ website: e.target.value });
                                    },
                                    value: this.state.website })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Instagram"
                            ),
                            this.displayForeign('instagram')
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Facebook"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ facebook: e.target.value });
                                    },
                                    value: this.state.facebook })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Twitter"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ twitter: e.target.value });
                                    },
                                    value: this.state.twitter })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "LinkedIn"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ linkedin: e.target.value });
                                    },
                                    value: this.state.linkedin })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "TikTok"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ tiktok: e.target.value });
                                    },
                                    value: this.state.tiktok })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "YouTube"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ youtube: e.target.value });
                                    },
                                    value: this.state.youtube })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "SoundCloud"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ soundCloud: e.target.value });
                                    },
                                    value: this.state.soundCloud })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Bandcamp"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ bandCamp: e.target.value });
                                    },
                                    value: this.state.bandCamp })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Spotify For Artists"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ spotifyForArtists: e.target.value });
                                    },
                                    value: this.state.spotifyForArtists })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "ASCAP"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ ascap: e.target.value });
                                    },
                                    value: this.state.ascap })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "BMI"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ bmi: e.target.value });
                                    },
                                    value: this.state.bmi })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "SoundExchange"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ soundExchange: e.target.value });
                                    },
                                    value: this.state.soundExchange })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "MLC"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ mlc: e.target.value });
                                    },
                                    value: this.state.mlc })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Songtrust"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ songTrust: e.target.value });
                                    },
                                    value: this.state.songTrust })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Google Drive"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ googleDrive: e.target.value });
                                    },
                                    value: this.state.googleDrive })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Venmo"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ venmo: e.target.value });
                                    },
                                    value: this.state.venmo })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "PayPal"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ payPal: e.target.value });
                                    },
                                    value: this.state.payPal })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "Cash App"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this3.setState({ cashapp: e.target.value });
                                    },
                                    value: this.state.cashapp })
                            )
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                React.createElement(
                                    "button",
                                    { className: "btn btn-primary" },
                                    "Update"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditForm;
}(React.Component);

var Manager = function (_React$Component2) {
    _inherits(Manager, _React$Component2);

    function Manager(props) {
        _classCallCheck(this, Manager);

        var _this4 = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, props));

        _this4.state = { artists: [], editRow: -1 };
        return _this4;
    }

    _createClass(Manager, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this5 = this;

            fetch("/api/artist/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this5.setState({ artists: json });
            });
        }
    }, {
        key: "clicked",
        value: function clicked(e, n) {
            e.preventDefault();
            this.setState({ editRow: n });
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

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
                                        return _this6.clicked(e, n);
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
                ),
                this.state.editRow != -1 && React.createElement(EditForm, { artist: this.state.artists[this.state.editRow] })
            );
        }
    }]);

    return Manager;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Manager, null), elem);

console.log("0.06");