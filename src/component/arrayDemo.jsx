import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'; 
import card1 from "../assets/card1.jpg"; 
import donete from "../assets/donete.jpg"; 

const ArrayDemo = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      text: 'Some quick example text for Card 1.',
      imgSrc: card1, 
    },
    {
      id: 2,
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      text: 'Some quick example text for Card 2.',
      imgSrc:donete,
    },
    {
      id: 3,
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      text: 'Some quick example text for Card 3.',
      imgSrc: 'https://picsum.photos/300/200?3',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginLeft: '1rem' }}>
      {cardData.map((card) => (
        <Card key={card.id} style={{ width: '18rem' }}>
          <img 
            alt={card.title} 
            src={card.imgSrc} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed size
          />
          <CardBody>
            <CardTitle tag="h5">{card.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {card.subtitle}
            </CardSubtitle>
            <CardText>{card.text}</CardText>
            <Button>Add to Card</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ArrayDemo;