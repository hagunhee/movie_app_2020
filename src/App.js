import React from "react";
import PropTypes from "prop-types";

// component가 render 전에 호출되는 몇 가지 function이 있다.
// component가 render 된 후, 호출되는 다른 function이 있다.

// Component의 라이프 싸이클!! 매우중요

//첫째는는 mounting 이다. 태어나는것과 같다. 마운팅의 순서는 아래와같다.
//// constructor() 자바스크립트에서왔다. 아마도 생성자인가?
//// static getDerivedStateFromProps()몰라도됨
//// render()
//// componentdidmount()

//두번째는 update 일반적인 update와 같다. 아래에서 add버튼과 minus버튼을 만들었듯이.
////static getderivedStateFromProps() 몰라도됨
////shouldComponentUpadate() 몰라도됨 업데이트를 할지 말지 결정하는 것에 대한 것
////render()
////getSnapshowBeforeUpdate() 몰라도됨
////componentDidUpdate()

// unmount는 죽는것과도 같다. 한가지가 실행됨.
////componentWillUnmoun() 다른 페이지로 가는등 component를 떠날때 호출된다.

// function component는 return을 스크린에 표시한다.
// class component는 render를 스크린에 표시한다.
// class 에서는 'state'를 사용하여 동적인 데이터를 할당할수 있다.
class App extends React.Component {
  state = {
    count: 0,
  };

  // setState는 state를 변경함과 동시에 render를 새로 호출한다.

  add = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("add");
  };

  // state에 직접적으로 간섭하는건 후에 성능저하가 심하게 생긴다. 고로 'current'를 사용하여 '현재의 state'를
  // 'function'방식으로 가져올수 있도록 해주었다.
  // 위의 방식이 state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은방법이다.

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        {/* button태그에는 기본으로 onClick이라는 props?가 있다. */}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// //jsx jaavascript + xml
// // function Food ({favourite}) {
// //   return <h1> I like {favourite}</h1>
// // }

// const foodILike=[
//   {
//   id:1,
//   name: "Kimchi",
//   image:"https://placeimg.com/64/64/1",
//   rating : 5
// },
//   {
//     id:2,
//   name: "Ramen",
//   image:"https://placeimg.com/64/64/2",
//   rating : 4.9
// },
//   {
//     id:3,
//   name: "Chugumi",
//   image:"https://placeimg.com/64/64/3",
//   rating : 3
// },
//   {
//     id:4,
//   name: "Kimbop",
//   image:"https://placeimg.com/64/64/4",
//   rating : 3.8
// },
//   {
//     id:5,
//   name: "Samgiopsal",
//   image:"https://placeimg.com/64/64/5",
//   rating : 5
// },
// ]

// function Food ({name, picture, rating}) {
//   return <div>
//     <h1> I like {name}</h1>
//     <h4> {rating}/5.0</h4>
//     <img src={picture} alt = {name}/>
//     {/* 시각장애인들을 위한 alt로 설명을 추가해줘야 오류가 잡힘 */}
//   </div>
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//     {foodILike.map(dish =>
//       <Food key = {dish.id} name={dish.name} picture={dish.image} rating = {dish.rating} />)}
//     {/* /* dish라는 오브젝트에 넣어서 매핑시킨다 */
//     /* 맵은 각각의 아이템별로 펑션을 호출 시킨다 */
//     /* 맵은 뭐가 돌아오든 array로 돌려준다ㅏ */}
//     {/* map은 key를 사용하여 고유element(id)를 인식시켜줘야 오류가 나지않음 */}
//     </div
//   );
// }

export default App;
