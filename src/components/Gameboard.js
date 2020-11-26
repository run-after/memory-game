import '../styles/gameboard.css';
import React, { useState } from 'react';

function Gameboard() {

  const [cards] = useState({
    '1': {
      'name': 'Osprey',
      'picture': 'https://www.audubon.org/sites/default/files/styles/hero_image/public/osprey_brian-kushner_04-21-2015-392.jpg?itok=l1cKJgk7',
      'clicked?': false
    },
    '2': {
      'name': 'Red Tailed Hawk',
      'picture': 'https://c1.staticflickr.com/9/8343/8244779882_8d396b0e4a_b.jpg',
      'clicked?': false
    },
    '3': {
      'name': 'Bald Eagle',
      'picture': 'https://media.istockphoto.com/photos/closeup-profile-of-bald-eagle-picture-id1069023576?k=6&m=1069023576&s=612x612&w=0&h=UCKHAO1cKekmYG5KIycC1736mrVtU2mE7oMLYjhRXJ4=',
      'clicked?': false
    },
    '4': {
      'name': 'Golden Eagle',
      'picture': 'https://images2.alphacoders.com/793/thumb-1920-793125.jpg',
      'clicked?': false
    },
    '5': {
      'name': 'Secretary Bird',
      'picture': 'https://focusingonwildlife.com/news/wp-content/gallery/secretarybird-sagittarius-serpentarius-vu/img_4852.jpg',
      'clicked?': false
    },
    '6': {
      'name': 'African Baza',
      'picture': 'https://i.pinimg.com/736x/f0/38/58/f03858fc52c33df6187098a461f8a5eb.jpg',
      'clicked?': false
    },
    '7': {
      'name': 'Gray-headed Kite',
      'picture': 'https://i.pinimg.com/736x/a0/d9/4d/a0d94d090d27edde1d1c8ae0ef6232b7.jpg',
      'clicked?': false
    },
    '8': {
      'name': 'Long-tailed Honey Buzzard',
      'picture': 'https://cdn.birdseye.photo/media/resized/large/001221-969-20140803152519.jpg',
      'clicked?': false
    },
    '9': {
      'name': 'Bat Hawk',
      'picture': 'https://a4.pbase.com/g1/18/520718/3/97464834.OT13BAqv.jpg',
      'clicked?': false
    },
    '10': {
      'name': 'White-bellied Sea Eagle',
      'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/White_Bellied_Sea_Eagle_070531b.jpg/1061px-White_Bellied_Sea_Eagle_070531b.jpg',
      'clicked?': false
    },
    '11': {
      'name': 'Egyptian Vulture',
      'picture': 'https://thumbs.dreamstime.com/b/neophron-percnopterus-22933072.jpg',
      'clicked?': false
    },
    '12': {
      'name': 'Hooded Vulture',
      'picture': 'https://thumbs.dreamstime.com/b/kapgier-hooded-vulture-necrosyrtes-monachus-close-up-van-een-portrait-129046453.jpg',
      'clicked?': false
    }
    
  });

  const randomOrderedState = Object.keys(cards).sort(() => Math.random() -0.5)

  return (
    <div className='gameboard'>
      {randomOrderedState.map((key) => { //Object.keys(cards).map((key) => {
        
        return (
          <div key={key} className='card'>
            <img className='bird-image' src={cards[key].picture} alt={cards[key].name} />
            <div className='name'>
              {cards[key].name}
            </div>
          </div>
        )
      })}
    </div>
    







    
  )
}

export default Gameboard;