"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const React = require("react");
const styled_components_1 = require("styled-components");
class JogoDaVelha extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.campos = () => {
            const qtdBotoes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const botoes = qtdBotoes.map((numero) => (React.createElement(GridItem, { onClick: this.jogada, key: numero }, numero)));
            return botoes;
        };
        this.jogada = () => {
            alert("OI");
        };
        this.state = {
            vezJogador: true,
        };
    }
    render() {
        const botoes = this.campos();
        return (React.createElement(React.Fragment, null,
            React.createElement(head_1.default, null,
                React.createElement("title", null, "Jogo da velha")),
            React.createElement(GridContainer, null, botoes)));
    }
}
exports.default = JogoDaVelha;
const GridContainer = styled_components_1.default.div `
  display: inline-grid;
  grid-template-columns: 5rem 5rem 5rem;
  background-color: #2196f3;
  padding: 10px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
const GridItem = styled_components_1.default.button `
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9nb2RhdmVsaGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvcGFnZXMvam9nb2RhdmVsaGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix5REFBdUM7QUFNdkMsTUFBcUIsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUc5QztJQUNDOztPQUVHO0lBRUgsWUFBWSxLQUFLO1FBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaUJQLFdBQU0sR0FBRyxHQUFrQixFQUFFO1lBQ25DLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5QyxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUN2QyxvQkFBQyxRQUFRLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFDeEMsTUFBTSxDQUNFLENBQ1osQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRU0sV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUM7UUE5QkEsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBQ00sTUFBTTtRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQ0wsb0JBQUMsS0FBSyxDQUFDLFFBQVE7WUFDYixvQkFBQyxjQUFJO2dCQUNILG1EQUE0QixDQUN2QjtZQUNQLG9CQUFDLGFBQWEsUUFBRSxNQUFNLENBQWlCLENBQ3hCLENBQ2xCLENBQUM7SUFDSixDQUFDO0NBaUJGO0FBekNELDhCQXlDQztBQUVELE1BQU0sYUFBYSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7O0NBTy9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRywyQkFBTSxDQUFDLE1BQU0sQ0FBQTs7Ozs7O0NBTTdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSm9nb0RhVmVsaGFTdGF0ZSB7XHJcbiAgdmV6Sm9nYWRvcjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9nb0RhVmVsaGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAge30sXHJcbiAgSUpvZ29EYVZlbGhhU3RhdGVcclxuPiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZlekpvZ2Fkb3I6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYm90b2VzID0gdGhpcy5jYW1wb3MoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Kb2dvIGRhIHZlbGhhPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEdyaWRDb250YWluZXI+e2JvdG9lc308L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW1wb3MgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XHJcbiAgICBjb25zdCBxdGRCb3RvZXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcblxyXG4gICAgY29uc3QgYm90b2VzID0gcXRkQm90b2VzLm1hcCgobnVtZXJvKSA9PiAoXHJcbiAgICAgIDxHcmlkSXRlbSBvbkNsaWNrPXt0aGlzLmpvZ2FkYX0ga2V5PXtudW1lcm99PlxyXG4gICAgICAgIHtudW1lcm99XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gYm90b2VzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgam9nYWRhID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJPSVwiKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVyZW0gNXJlbSA1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuIl19