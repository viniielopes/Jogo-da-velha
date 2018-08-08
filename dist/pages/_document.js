"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const document_1 = require("next/document");
const React = require("react");
const styled_components_1 = require("styled-components");
class MyDocument extends document_1.default {
    static getInitialProps({ renderPage }) {
        const sheet = new styled_components_1.ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(React.createElement(App, Object.assign({}, props))));
        const styleTags = sheet.getStyleElement();
        return Object.assign({}, page, { styleTags });
    }
    render() {
        return (React.createElement("html", null,
            React.createElement(document_1.Head, null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
                React.createElement("link", { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossOrigin: "anonymous" }),
                React.createElement("link", { rel: "shortcut icon", href: "static/imgs/Icone.png", type: "image/x-icon" }),
                React.createElement("link", { rel: "icon", href: "static/imgs/Icone.png", type: "image/x-icon" }),
                React.createElement("title", null, "My page"),
                this.props.styleTags),
            React.createElement("body", null,
                React.createElement(document_1.Main, null),
                React.createElement(document_1.NextScript, null))));
    }
}
exports.default = MyDocument;
//# sourceMappingURL=../../server/dist/pages/_document.js.map