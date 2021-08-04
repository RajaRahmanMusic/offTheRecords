var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/* TODO ADD ANCHOR FOR FOREIGN KEY 3rd PARTY WEBSITES */}
{/* TODO MAKE DATE FIELD MORE USER FRIENDLY */}

var ArtistView = function (_React$Component) {
    _inherits(ArtistView, _React$Component);

    function ArtistView(props) {
        _classCallCheck(this, ArtistView);

        var _this = _possibleConstructorReturn(this, (ArtistView.__proto__ || Object.getPrototypeOf(ArtistView)).call(this, props));

        _this.state = { edit: "" };
        return _this;
    }

    _createClass(ArtistView, [{
        key: "displayForeign",
        value: function displayForeign(name, title) {
            var _this2 = this;

            console.log(name, title);
            if (this.props.artist[name]) {
                return React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        title
                    ),
                    React.createElement(
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
                                            { className: "col-sm-2" },
                                            key
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-sm-2" },
                                            key == "verified" ? _this2.props.artist[name].verified == true ? "True" : "False" : _this2.props.artist[name][key]
                                        )
                                    );
                                }
                            })
                        )
                    )
                );
            }
        }
    }, {
        key: "secondaryItems",
        value: function secondaryItems() {
            if (this.props.create === false) {
                return React.createElement(
                    React.Fragment,
                    null,
                    this.displayForeign('instagram', 'Instagram'),
                    this.displayForeign('facebook', 'Facebook'),
                    this.displayForeign('twitter', 'Twitter'),
                    this.displayForeign('linkedIn', 'LinkedIn'),
                    this.displayForeign('tikTok', 'TikTok'),
                    this.displayForeign('youTube', 'YouTube'),
                    this.displayForeign('soundCloud', 'SoundCloud'),
                    this.displayForeign('bandCamp', 'Bandcamp'),
                    this.displayForeign('spotifyForArtists', 'Spotify For Artists'),
                    this.props.artist.ascap && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.ascap.com/' },
                                "ASCAP"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.ascap || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.bmi && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.bmi.com/' },
                                "BMI"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.bmi || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.soundExchange && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.soundexchange.com/' },
                                "SoundExchange"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.soundExchange || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.mlc && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.themlc.com/' },
                                "MLC"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.mlc || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.songTrust && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.songtrust.com/' },
                                "Songtrust"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.songTrust || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.googleDrive && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&flowName=GlifWebSignIn&flowEntry=ServiceLogin' },
                                "Google Drive"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.googleDrive || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.venmo && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://venmo.com/' },
                                "Venmo"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.venmo || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.payPal && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.paypal.com/us/webapps/mpp/home' },
                                "PayPal"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.payPal || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
                        )
                    ),
                    this.props.artist.cashapp && React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://cash.app/' },
                                "Cash App"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-2" },
                                    this.props.artist.payPal || ""
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10" },
                                    "For additional login credentials, please consult your personal records or email the artist."
                                )
                            )
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
                                this.props.artist.artist_name || ""
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
                                this.props.artist.legal_name || ""
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
                                this.props.artist.email || ""
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
                                this.props.artist.phone_number || ""
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
                                this.props.artist.address || ""
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
                                this.props.artist.date_of_birth || ""
                            )
                        ),
                        this.props.artist.primary_genre && React.createElement(
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
                                this.props.artist.primary_genre.name
                            )
                        ),
                        this.props.artist.secondary_genre && React.createElement(
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
                                this.props.artist.secondary_genre.name
                            )
                        ),
                        this.props.artist.tertiary_genre && React.createElement(
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
                                this.props.artist.tertiary_genre.name
                            )
                        ),
                        this.props.artist.website && React.createElement(
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
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: this.props.artist.website || "" },
                                    this.props.artist.website || ""
                                )
                            )
                        ),
                        this.secondaryItems()
                    )
                )
            );
        }
    }]);

    return ArtistView;
}(React.Component);

var EditForm = function (_React$Component2) {
    _inherits(EditForm, _React$Component2);

    function EditForm(props) {
        _classCallCheck(this, EditForm);

        var _this3 = _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));

        _this3.state = { edit: "" };
        return _this3;
    }

    _createClass(EditForm, [{
        key: "displayForeign",
        value: function displayForeign(name) {
            var _this4 = this;

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
                                        { className: "col-md-2" },
                                        React.createElement(
                                            "label",
                                            null,
                                            key
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-2" },
                                        key != "verified" ? React.createElement("input", { className: "form-control",
                                            onChange: function onChange(e) {
                                                return _this4.props.editForeignHelper(e, name, key);
                                            },
                                            value: _this4.props.artist[name][key] }) : React.createElement("input", { type: "checkbox",
                                            onChange: function onChange(e) {
                                                return _this4.props.editForeignHelper(e, name, key);
                                            },
                                            checked: _this4.props.artist[name].verified })
                                    )
                                );
                            }
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-2" },
                            React.createElement(
                                "button",
                                { onClick: function onClick(e) {
                                        return _this4.props.saveForeign(e, name);
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
                                        { className: "col-sm-2" },
                                        key
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-2" },
                                        key == "verified" ? _this4.props.artist[name].verified == true ? "True" : "False" : _this4.props.artist[name][key]
                                    )
                                );
                            }
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-sm-2" },
                            React.createElement(
                                "button",
                                { onClick: function onClick(e) {
                                        return _this4.props.editForeign(e, name);
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
                                return _this4.props.editForeign(e, name);
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
            var _this5 = this;

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
                        this.displayForeign('facebook')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "Twitter"
                        ),
                        this.displayForeign('twitter')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "LinkedIn"
                        ),
                        this.displayForeign('linkedIn')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "TikTok"
                        ),
                        this.displayForeign('tikTok')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "YouTube"
                        ),
                        this.displayForeign('youTube')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "SoundCloud"
                        ),
                        this.displayForeign('soundCloud')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "Bandcamp"
                        ),
                        this.displayForeign('bandCamp')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "Spotify For Artists"
                        ),
                        this.displayForeign('spotifyForArtists')
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.ascap.com/' },
                                "ASCAP"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ ascap: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.bmi.com/' },
                                "BMI"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ bmi: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.soundexchange.com/' },
                                "SoundExchange"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ soundExchange: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.themlc.com/' },
                                "MLC"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ mlc: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.songtrust.com/' },
                                "Songtrust"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ songTrust: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fpriority&flowName=GlifWebSignIn&flowEntry=ServiceLogin' },
                                "Google Drive"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ googleDrive: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://venmo.com/' },
                                "Venmo"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ venmo: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://www.paypal.com/us/webapps/mpp/home' },
                                "PayPal"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ payPal: e.target.value });
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
                            React.createElement(
                                "a",
                                { target: "_blank", href: 'https://cash.app/' },
                                "Cash App"
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", { className: "form-control",
                                onChange: function onChange(e) {
                                    return _this5.props.updateArtist({ cashapp: e.target.value });
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
            var _this6 = this;

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
                                        return _this6.props.updateArtist({ artist_name: e.target.value });
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
                                        return _this6.props.updateArtist({ legal_name: e.target.value });
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
                                        return _this6.props.updateArtist({ email: e.target.value });
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
                                        return _this6.props.updateArtist({ phone_number: e.target.value });
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
                                        return _this6.props.updateArtist({ address: e.target.value });
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
                                        return _this6.props.updateArtist({ date_of_birth: e.target.value });
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
                                            return _this6.props.updateArtist({ primary_genre: e.target.value });
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
                                React.createElement(
                                    "select",
                                    { className: "form-control",
                                        onChange: function onChange(e) {
                                            return _this6.props.updateArtist({ secondary_genre: e.target.value });
                                        },
                                        value: this.props.artist.secondary_genre },
                                    !this.props.artist.secondary_genre && React.createElement(
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
                                "Tertiary Genre"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "select",
                                    { className: "form-control",
                                        onChange: function onChange(e) {
                                            return _this6.props.updateArtist({ tertiary_genre: e.target.value });
                                        },
                                        value: this.props.artist.tertiary_genre },
                                    !this.props.artist.tertiary_genre && React.createElement(
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
                                "Website"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement("input", { className: "form-control",
                                    onChange: function onChange(e) {
                                        return _this6.props.updateArtist({ website: e.target.value });
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
                                            return _this6.props.formSubmit(e);
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

var Artist = function (_React$Component3) {
    _inherits(Artist, _React$Component3);

    function Artist(props) {
        _classCallCheck(this, Artist);

        var _this7 = _possibleConstructorReturn(this, (Artist.__proto__ || Object.getPrototypeOf(Artist)).call(this, props));

        var artist_id = document.getElementById('artist_id').value;
        _this7.state = { id: artist_id || "",
            manager_id: document.getElementById('manager_id').value || "",
            artist: {}, genres: [], err: false, edit: "",
            mode: artist_id ? "display" : "edit"
        };
        _this7.updateArtist = _this7.updateArtist.bind(_this7);
        _this7.formSubmit = _this7.formSubmit.bind(_this7);
        _this7.saveForeign = _this7.saveForeign.bind(_this7);
        _this7.editForeign = _this7.editForeign.bind(_this7);
        _this7.editForeignHelper = _this7.editForeignHelper.bind(_this7);
        return _this7;
    }

    _createClass(Artist, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this8 = this;

            if (this.state.id) {
                var link = "/api/artist/" + this.state.id;

                fetch(link).then(function (resp) {
                    return resp.json();
                }).then(function (json) {
                    _this8.setState({ artist: json });
                    console.log(json);
                });
            }
            fetch("/api/genre/").then(function (resp) {
                return resp.json();
            }).then(function (json) {
                return _this8.setState({ genres: json });
            });
        }
    }, {
        key: "saveForeign",
        value: function saveForeign(e, name) {
            var _this9 = this;

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
                    var artist = {};
                    Object.keys(_this9.state.artist).forEach(function (key) {
                        if (_typeof(_this9.state.artist[key]) != 'object') {
                            artist[key] = _this9.state.artist[key];
                        } else if (key === "primary_genre") {
                            artist[key] = _this9.state.artist.primary_genre.id;
                        }
                    });
                    artist[name] = json.id;
                    _this9.formSubmit(e, artist);
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

                if (name == "instagram" || name == "facebook" || name == "twitter" || name == "tikTok") {
                    artist[name] = { verified: false, username: "", followers: 0 };
                }

                if (name == "linkedIn" || name == "youTube" || name == "BandCamp") {
                    artist[name] = { username: "", followers: 0 };
                }

                if (name == "soundCloud") {
                    artist[name] = { username: "", followers: 0, streams: 0 };
                }

                if (name == "spotifyForArtists") {
                    artist[name] = { verified: false, username: "", followers: 0, monthly_listeners: 0 };
                }

                this.setState({ edit: name, artist: artist });
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
            var _this10 = this;

            e.preventDefault();
            console.log(e);
            var link = "/api/artist/";
            var method = "POST";
            if (this.state.id) {
                method = "PUT";
                link += this.state.id + '/';
            }

            if (artist === undefined) {
                artist = this.state.artist;
            }
            var obj = {};
            Object.keys(artist).forEach(function (key) {
                if (_typeof(artist[key]) != 'object') {
                    obj[key] = artist[key];
                } else if (key === "primary_genre") {
                    obj[key] = _this10.state.artist.primary_genre.id;
                }
            });

            fetch(link, { method: method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(obj)
            }).then(function (resp) {
                return resp.json();
            }).then(function (json) {
                console.log(json);
                if (json.id) {
                    _this10.setState({ artist: json, edit: "", mode: "display" });
                } else {
                    _this10.setState({ err: true });
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
        key: "renderDisplay",
        value: function renderDisplay() {
            var _this11 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(ArtistView, { artist: this.state.artist, create: this.state.artist.id ? false : true,
                    updateArtist: this.updateArtist, genres: this.state.genres,
                    edit: this.state.edit,
                    formSubmit: this.formSubmit, editForeign: this.editForeign,
                    saveForeign: this.saveForeign, editForeignHelper: this.editForeignHelper }),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "button",
                        { onClick: function onClick(e) {
                                return _this11.setState({ mode: "edit" });
                            },
                            className: "btn btn-primary" },
                        "Edit"
                    )
                )
            );
        }
    }, {
        key: "renderEdit",
        value: function renderEdit() {
            return React.createElement(EditForm, { artist: this.state.artist, create: this.state.artist.id ? false : true,
                updateArtist: this.updateArtist, genres: this.state.genres,
                edit: this.state.edit,
                formSubmit: this.formSubmit, editForeign: this.editForeign,
                saveForeign: this.saveForeign, editForeignHelper: this.editForeignHelper });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.mode == "display") {
                return this.renderDisplay();
            }
            return this.renderEdit();
        }
    }]);

    return Artist;
}(React.Component);

var elem = document.getElementById("root");
ReactDOM.render(React.createElement(Artist, null), elem);

console.log("0.30");