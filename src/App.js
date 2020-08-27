import React from 'react';
import PropTypes from "prop-types";

//jsx jaavascript + xml 
// function Food ({favourite}) {
//   return <h1> I like {favourite}</h1>
// }



const foodILike=[
  {
  id:1,
  name: "Kimchi",
  image:"https://placeimg.com/64/64/1",
  rating : 5
},
  {
    id:2,
  name: "Ramen",
  image:"https://placeimg.com/64/64/2",
  rating : 4.9
},
  {
    id:3,
  name: "Chugumi",
  image:"https://placeimg.com/64/64/3",
  rating : 3
},
  {
    id:4,
  name: "Kimbop",
  image:"https://placeimg.com/64/64/4",
  rating : 3.8
},
  {
    id:5,
  name: "Samgiopsal",
  image:"https://placeimg.com/64/64/5",
  rating : 5
},
]


function Food ({name, picture, rating}) {
  return <div>
    <h1> I like {name}</h1>
    <h4> {rating}/5.0</h4>
    <img src={picture} alt = {name}/> 
    {/* 시각장애인들을 위한 alt로 설명을 추가해줘야 오류가 잡힘 */}
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
    {foodILike.map(dish => 
      <Food key = {dish.id} name={dish.name} picture={dish.image} rating = {dish.rating} />)}
    {/* /* dish라는 오브젝트에 넣어서 매핑시킨다 */
    /* 맵은 각각의 아이템별로 펑션을 호출 시킨다 */
    /* 맵은 뭐가 돌아오든 array로 돌려준다ㅏ */}
    {/* map은 key를 사용하여 고유element(id)를 인식시켜줘야 오류가 나지않음 */}
    </div>

  );

}

export default App;
