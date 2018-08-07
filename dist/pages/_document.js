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
                React.createElement("title", null, "My page"),
                this.props.styleTags),
            React.createElement("body", null,
                React.createElement(document_1.Main, null),
                React.createElement(document_1.NextScript, null))));
    }
}
exports.default = MyDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2RvY3VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3BhZ2VzL19kb2N1bWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUU7QUFDakUsK0JBQStCO0FBQy9CLHlEQUFxRDtBQUVyRCxNQUFxQixVQUFXLFNBQVEsa0JBQVE7SUFDdkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3pDLEtBQUssQ0FBQyxhQUFhLENBQUMsb0JBQUMsR0FBRyxvQkFBSyxLQUFLLEVBQUksQ0FBQyxDQUN4QyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFDLHlCQUFZLElBQUksSUFBRSxTQUFTLElBQUc7SUFDaEMsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLENBQ0w7WUFDRSxvQkFBQyxlQUFJO2dCQUNILDZDQUFzQjtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2hCO1lBQ1A7Z0JBQ0Usb0JBQUMsZUFBSSxPQUFHO2dCQUNSLG9CQUFDLHFCQUFVLE9BQUcsQ0FDVCxDQUNGLENBQ1IsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXhCRCw2QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVuZGVyUGFnZSB9KSB7XHJcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XHJcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyUGFnZSgoQXBwKSA9PiAocHJvcHMpID0+XHJcbiAgICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xyXG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVUYWdzIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGh0bWw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdHlsZVRhZ3N9XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=