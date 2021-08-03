var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditForm = function (_React$Component) {
    _inherits(EditForm, _React$Component);

    function EditForm(props) {
        _classCallCheck(this, EditForm);

        var _this = _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));

        _this.state = { edit: "" };

        return _this;
    }

    _createClass(EditForm, [{
        key: "displayForeign",
        value: function displayForeign(name) {
            var _this2 = this;

            console.log(name);
            if (this.props.edit == name) {
                return React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "div",
                        { className: "row" },
                        Object.keys(this.props.artist[name]).map(function (key) {
                            if (key != "id") {
                                return React.createElement(
                                    React.Fragment,
                                    { key: key },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-1" },
                                        React.createElement(
                                            "label",
                                            null,
                                            key
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-1" },
                                        key != "verified" ? React.createElement("input", { className: "form-control",
                                            onChange: function onChange(e) {
                                                return _this2.props.editForeignHelper(e, name, key);
                                            },
                                            value: _this2.props.artist[name][key] }) : React.createElement("input", { type: "checkbox",
                                            onChange: function onChange(e) {
                                                return _this2.props.editForeignHelper(e, name, key);
                                            },
                                            checked: _this2.props.artist[name].verified })
                                    )
                                );
                            }
                        }),
                        React.createElement(
                            "div",
                            { className: "col-xs-1" },
                            React.createElement(
                                "button",
                                { onClick: function onClick(e) {
                                        return _this2.props.saveForeign(e, name);
                                    },
                                    className: "btn btn-dark" },
                                "Save"
                            )
                        )
                    )
                );
            } else if (this.props.artist[name]) {
                return React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "div",
                        { className: 'row' },
                        Object.keys(this.props.artist[name]).map(function (key) {
                            if (key != "id") {
                                return React.createElement(
                                    React.Fragment,
                                    { key: key },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-1" },
                                        key
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-1" },
                                        key == "verified" ? _this2.props.artist[name].verified == true ? "True" : "False" : _this2.props.artist[name][key]
                                    )
                                );
                            }
                        }),
                        React.createElement(
                            "div",
                            { className: "col-xs-1" },
                            React.createElement(
                                "button",
                                { onClick: function onClick(e) {
                                        return _this2.props.editForeign(e, name);
                                    },
                                    className: "btn btn-dark" },
                                "Edit"
                            )
                        )
                    )
                );
            } else {
                return React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { onClick: function onClick(e) {
                                return _this2.props.editForeign(e, name);
                            },
                            className: "btn btn-dark" },
                        "Add"
                    )
                );
            }
        }
    }, {
        key: "secondaryItems",
        value: function secondaryItems() {
            var _this3 = this;

            if (this.props.create === false) {
                return React.createElement(
                    React.Fragment,
                    null,
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
                                    return _this3.props.updateArtist({ facebook: e.target.value });
                                },
                                value: this.props.artist.facebook || "" })
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
                                    return _this3.props.updateArtist({ twitter: e.target.value });
                                },
                                value: this.props.artist.twitter || "" })
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
                                    return _this3.props.updateArtist({ linkedin: e.target.value });
                                },
                                value: this.props.artist.linkedin || "" })
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
                                    return _this3.props.updateArtist({ tiktok: e.target.value });
                                },
                                value: this.props.artist.tiktok || "" })
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
                                    return _this3.props.updateArtist({ youtube: e.target.value });
                                },
                                value: this.props.artist.youtube || "" })
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
                                    return _this3.props.updateArtist({ soundCloud: e.target.value });
                                },
                                value: this.props.artist.soundCloud || "" })
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
                                    return _this3.props.updateArtist({ bandCamp: e.target.value });
                                },
                                value: this.props.artist.bandCamp || "" })
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
                                    return _this3.props.updateArtist({ spotifyForArtists: e.target.value });
                                },
                                value: this.props.artist.spotifyForArtists || "" })
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
                                    return _this3.props.updateArtist({ ascap: e.target.value });
                                },
                                value: this.props.artist.ascap || "" })
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
                                    return _this3.props.updateArtist({ bmi: e.target.value });
                                },
                                value: this.props.artist.bmi || "" })
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
                                    return _this3.props.updateArtist({ soundExchange: e.target.value });
                                },
                                value: this.props.artist.soundExchange || "" })
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
                                    return _this3.props.updateArtist({ mlc: e.target.value });
                                },
                                value: this.props.artist.mlc || "" })
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
                                    return _this3.props.updateArtist({ songTrust: e.target.value });
                                },
                                value: this.props.artist.songTrust || "" })
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
                                    return _this3.props.updateArtist({ googleDrive: e.target.value });
                                },
                                value: this.props.artist.googleDrive || "" })
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
                                    return _this3.props.updateArtist({ venmo: e.target.value });
                                },
                                value: this.props.artist.venmo || "" })
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
                                    return _this3.props.updateArtist({ payPal: e.target.value });
                                },
                                value: this.props.artist.payPal || "" })
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
                                    return _this3.props.updateArtist({ cashapp: e.target.value });
                                },
                                value: this.props.artist.cashapp || "" })
                        )
                    )
                );
            } else {
                return React.createElement(React.Fragment, null);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            console.log("CREATED??", this.props.create);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { className: "table" },
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
                                React.createElement("input", { className: this.props.err && !this.props.artist.artist_name ? "form-control is-invalid" : "form-control",
                                    onChange: function onChange(e) {
                                        return _this4.props.updateArtist({ artist_name: e.target.value });
                                    },
                                    value: this.props.artist.artist_name || "" })
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
                                        return _this4.props.updateArtist({ legal_name: e.target.value });
                                    },
                                    value: this.props.artist.legal_name || "" })
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
                                        return _this4.props.updateArtist({ email: e.target.value });
                                    },
                                    value: this.props.artist.email || "" })
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
                                        return _this4.props.updateArtist({ phone_number: e.target.value });
                                    },
                                    value: this.props.artist.phone_number || "" })
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
                                        return _this4.props.updateArtist({ address: e.target.value });
                                    },
                                    value: this.props.artist.address || "" })
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
                                        return _this4.props.updateArtist({ date_of_birth: e.target.value });
                                    },
                                    value: this.props.artist.date_of_birth || "" })
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
                                React.createElement(
                                    "select",
                                    { className: "form-control",
                                        onChange: function onChange(e) {
                                            return _this4.props.updateArtist({ primary_genre: e.target.value });
                                        },
                                        value: this.props.artist.primary_genre },
                                    !this.props.artist.primary_genre && React.createElement(
                                        "option",
                                        null,
                                        "Select Genre"
                                    ),
                                    this.props.genres.map(function (gen, idx) {

                                        return React.createElement(
                                            "option",
                                            { value: gen.id, key: gen.name },
                                            gen.name
                                        );
                                    })
                                )
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
                                        return _this4.props.updateArtist({ secondary_genre: e.target.value });
                                    },
                                    value: this.props.artist.secondary_genre || "" })
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
                                        return _this4.props.updateArtist({ tertiary_genre: e.target.value });
                                    },
                                    value: this.props.artist.tertiary_genre || "" })
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
                                        return _this4.props.updateArtist({ website: e.target.value });
                                    },
                                    value: this.props.artist.website || "" })
                            )
                        ),
                        this.secondaryItems(),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                { colSpan: "2" },
                                React.createElement(
                                    "button",
                                    { onClick: function onClick(e) {
                                            return _this4.props.formSubmit(e);
                                        },
                                        className: "btn btn-primary" },
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

var Artist = function (_React$Component2) {
    _inherits(Artist, _React$Component2);

    function Artist(props) {
        _classCallCheck(this, Artist);

        var _this5 = _possibleConstructorReturn(this, (Artist.__proto__ || Object.getPrototypeOf(Artist)).call(this, props));

        _this5.state = { id: document.getElementById('artist_id').value || "",
            manager_id: document.getElementById('manager_id').value || "",
            artist: {}, genres: [], err: false, edit: ""
        };
        _this5.updateArtist = _this5.updateArtist.bind(_this5);
        _this5.formSubmit = _this5.formSubmit.bind(_this5);
        _this5.saveForeign = _this5.saveForeign.bind(_this5);
        _this5.editForeign = _this5.editForeign.bind(_this5);
        _this5.editForeignHelper = _this5.editForeignHelper.bind(_this5);
        return _this5;
    }

    _createClass(Artist, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this6 = this;

            if (this.state.id) {
                var link = "/api/artist/" + this.state.id;

                fetch(link).then(function (resp) {
                    return resp.json();
                }).then(function (json) {
                    _this6.setState({ artist: json });
                    console.log(json);
                });
            }
            fetch("/api/genre/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this6.setState({ genres: json });
            });
        }
    }, {
        key: "saveForeign",
        value: function saveForeign(e, name) {
            var _this7 = this;

            console.log(e);
            var obj = this.state.artist[name];
            var method = "POST";
            var link = "/api/" + name + "/";
            console.log(link);

            if (obj.id) {
                method = "PUT";
                link = "/api/" + name + "/" + obj.id + "/";
            }
            fetch(link, { method: method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(obj)
            }).then(function (resp) {
                return resp.json();
            }).then(function (json) {
                if (json.id) {
                    var artist = Object.assign({}, _this7.state.artist);
                    artist[name] = json.id;
                    _this7.formSubmit(e, artist);
                }
            });
        }
    }, {
        key: "editForeign",
        value: function editForeign(e, name) {
            console.log(name);
            e.preventDefault();
            if (!this.state.artist[name]) {

                var artist = Object.assign({}, this.state.artist);
                // ifs for crazy socials and non verified
                artist[name] = { verified: false, username: "", followers: 0

                    // artist[name] = {username: "", cool: false }
                };this.setState({ edit: name, artist: artist });
            } else {
                this.setState({ edit: name });
            }
        }
    }, {
        key: "editForeignHelper",
        value: function editForeignHelper(e, name, key) {

            var artist = Object.assign({}, this.state.artist);
            if (key != 'verified') {
                artist[name][key] = e.target.value;
                this.setState({ artist: artist });
            } else {
                artist[name][key] = e.target.checked;
                this.setState({ artist: artist });
            }
        }
    }, {
        key: "formSubmit",
        value: function formSubmit(e, artist) {
            var _this8 = this;

            e.preventDefault();
            console.log(e);
            var link = "/api/artist/";
            var method = "POST";
            if (this.state.id) {
                method = "PUT";
                link += this.state.id + '/';
            }

            fetch(link, { method: method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(artist || this.state.artist)
            }).then(function (resp) {
                return resp.json();
            }).then(function (json) {
                console.log(json);
                if (json.id) {
                    _this8.setState({ artist: json, edit: "" });
                } else {
                    _this8.setState({ err: true });
                }
            });
        }
    }, {
        key: "updateArtist",
        value: function updateArtist(changes) {
            var artist = Object.assign({}, this.state.artist);
            var key = Object.keys(changes)[0];
            artist[key] = changes[key];

            this.setState({ artist: artist });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(EditForm, { artist: this.state.artist, create: this.state.artist.id ? false : true,
                updateArtist: this.updateArtist, genres: this.state.genres,
                edit: this.state.edit,
                formSubmit: this.formSubmit, editForeign: this.editForeign,
                saveForeign: this.saveForeign, editForeignHelper: this.editForeignHelper

            });
        }
    }]);

    return Artist;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Artist, null), elem);

console.log("0.24");