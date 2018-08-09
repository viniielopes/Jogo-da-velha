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
                React.createElement("title", null),
                this.props.styleTags),
            React.createElement("body", null,
                React.createElement(document_1.Main, null),
                React.createElement(document_1.NextScript, null))));
    }
}
exports.default = MyDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2RvY3VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3BhZ2VzL19kb2N1bWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUU7QUFDakUsK0JBQStCO0FBQy9CLHlEQUFxRDtBQUVyRCxNQUFxQixVQUFXLFNBQVEsa0JBQVE7SUFDdkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3pDLEtBQUssQ0FBQyxhQUFhLENBQUMsb0JBQUMsR0FBRyxvQkFBSyxLQUFLLEVBQUksQ0FBQyxDQUN4QyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFDLHlCQUFZLElBQUksSUFBRSxTQUFTLElBQUc7SUFDaEMsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLENBQ0w7WUFDRSxvQkFBQyxlQUFJO2dCQUNILDhCQUFNLE9BQU8sRUFBQyxPQUFPLEdBQUc7Z0JBQ3hCLDhCQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFDLHVEQUF1RCxHQUMvRDtnQkFFRiw4QkFDRSxHQUFHLEVBQUMsWUFBWSxFQUNoQixJQUFJLEVBQUMsMEVBQTBFLEVBQy9FLFNBQVMsRUFBQyx5RUFBeUUsRUFDbkYsV0FBVyxFQUFDLFdBQVcsR0FDdkI7Z0JBRUYsOEJBQ0UsR0FBRyxFQUFDLGVBQWUsRUFDbkIsSUFBSSxFQUFDLHVCQUF1QixFQUM1QixJQUFJLEVBQUMsY0FBYyxHQUNuQjtnQkFDRiw4QkFBTSxHQUFHLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyx1QkFBdUIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFHO2dCQUNwRSxrQ0FBUztnQkFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDaEI7WUFDUDtnQkFDRSxvQkFBQyxlQUFJLE9BQUc7Z0JBQ1Isb0JBQUMscUJBQVUsT0FBRyxDQUNULENBQ0YsQ0FDUixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBM0NELDZCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcHVibGljIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcclxuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcclxuICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJQYWdlKChBcHApID0+IChwcm9wcykgPT5cclxuICAgICAgc2hlZXQuY29sbGVjdFN0eWxlcyg8QXBwIHsuLi5wcm9wc30gLz4pXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3R5bGVUYWdzID0gc2hlZXQuZ2V0U3R5bGVFbGVtZW50KCk7XHJcbiAgICByZXR1cm4geyAuLi5wYWdlLCBzdHlsZVRhZ3MgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aHRtbD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4zL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1NQ3c5OC9TRm5HRThmSlQzR1h3RU9uZ3NWN1p0MjdOWEZvYW9BcG1ZbTgxaXVYb1BrRk9Kd0o4RVJka25MUE1PXCJcclxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcclxuICAgICAgICAgICAgaHJlZj1cInN0YXRpYy9pbWdzL0ljb25lLnBuZ1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwic3RhdGljL2ltZ3MvSWNvbmUucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XHJcbiAgICAgICAgICA8dGl0bGUgLz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0eWxlVGFnc31cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==