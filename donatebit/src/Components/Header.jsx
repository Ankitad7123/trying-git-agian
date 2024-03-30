import React, { useState } from 'react';
import './Header.css';
import Carousel from 'react-elastic-carousel';

function Header() {
  const [items, setItems] = useState([
    { id: 1, title: '"The best way to find yourself is to lose yourself in the service of others."', img: "https://img.freepik.com/premium-vector/onboard-screens-set-charity-food-donation-flat-cartoon-vector-illustration_181313-4059.jpg" },
    { id: 2, title: '"No one has ever become poor by giving."', img: "https://media.istockphoto.com/id/1344760131/vector/charity-and-donating-clothes-concept.jpg?s=612x612&w=0&k=20&c=vxqe2XtdESlPjZde0iKD2wjVhudBczB6FEvl4MJ13eg=" },
    { id: 3, title: '"The smallest act of kindness is worth more than the grandest intention."', img: "https://static.vecteezy.com/system/resources/previews/013/766/012/non_2x/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-together-helping-doing-charity-illustration-free-vector.jpg" },
    { id: 4, title: '"The meaning of life is to find your gift. The purpose of life is to give it away."', img: "https://static.vecteezy.com/system/resources/previews/013/567/482/non_2x/group-of-volunteers-giving-charity-gifts-to-the-poor-vector.jpg" },
    { id: 5, title: '"We rise by lifting others."', img: "https://img.freepik.com/premium-vector/donation-box-with-clothes-toys-books-medicines-african-volunteer-woman-holding-hands-heart-share-your-love-support-poor-people-children-vector-illustration-flat-cartoon-style_189033-1933.jpg" }
]);


  return (
    <div className='header'>
     
      <div className="header2">

        <Carousel className='headerC'style={{ height: "100vh" }} showArrows={true} >
          {items.map(item => (
            <div  className="headerMap" style={{ textAlign: "center" }} key={item.id}>
              <h1>{item.title}</h1>
              <img  className="imgheader" style={{ width: "160%", height: "500px" }} src={item.img} alt={item.title} />
            </div>
          ))}
        </Carousel>
      </div>
      <h3 id='email'>Have a question? Send us an email!</h3>
      <div className='header3'>
    
        
        <button className='btnheader'>send</button>
      </div>

    </div>
  );
}

export default Header;



