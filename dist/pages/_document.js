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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2RvY3VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3BhZ2VzL19kb2N1bWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUU7QUFDakUsK0JBQStCO0FBQy9CLHlEQUFxRDtBQUVyRCxNQUFxQixVQUFXLFNBQVEsa0JBQVE7SUFDdkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3pDLEtBQUssQ0FBQyxhQUFhLENBQUMsb0JBQUMsR0FBRyxvQkFBSyxLQUFLLEVBQUksQ0FBQyxDQUN4QyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFDLHlCQUFZLElBQUksSUFBRSxTQUFTLElBQUc7SUFDaEMsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLENBQ0w7WUFDRSxvQkFBQyxlQUFJO2dCQUNILDhCQUFNLE9BQU8sRUFBQyxPQUFPLEdBQUc7Z0JBQ3hCLDhCQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFDLHVEQUF1RCxHQUMvRDtnQkFFRiw4QkFDRSxHQUFHLEVBQUMsWUFBWSxFQUNoQixJQUFJLEVBQUMsMEVBQTBFLEVBQy9FLFNBQVMsRUFBQyx5RUFBeUUsRUFDbkYsV0FBVyxFQUFDLFdBQVcsR0FDdkI7Z0JBRUYsOEJBQ0UsR0FBRyxFQUFDLGVBQWUsRUFDbkIsSUFBSSxFQUFDLHVCQUF1QixFQUM1QixJQUFJLEVBQUMsY0FBYyxHQUNuQjtnQkFDRiw4QkFBTSxHQUFHLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyx1QkFBdUIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFHO2dCQUNwRSw2Q0FBc0I7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNoQjtZQUNQO2dCQUNFLG9CQUFDLGVBQUksT0FBRztnQkFDUixvQkFBQyxxQkFBVSxPQUFHLENBQ1QsQ0FDRixDQUNSLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEzQ0QsNkJBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBwdWJsaWMgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlbmRlclBhZ2UgfSkge1xyXG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoKEFwcCkgPT4gKHByb3BzKSA9PlxyXG4gICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPilcclxuICAgICk7XHJcbiAgICBjb25zdCBzdHlsZVRhZ3MgPSBzaGVldC5nZXRTdHlsZUVsZW1lbnQoKTtcclxuICAgIHJldHVybiB7IC4uLnBhZ2UsIHN0eWxlVGFncyB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxodG1sPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LU1Ddzk4L1NGbkdFOGZKVDNHWHdFT25nc1Y3WnQyN05YRm9hb0FwbVltODFpdVhvUGtGT0p3SjhFUmRrbkxQTU9cIlxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgICBocmVmPVwic3RhdGljL2ltZ3MvSWNvbmUucG5nXCJcclxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJzdGF0aWMvaW1ncy9JY29uZS5wbmdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0eWxlVGFnc31cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==