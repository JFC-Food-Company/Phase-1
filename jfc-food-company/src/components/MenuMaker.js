import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


const MenuMaker = (props) => {
    return (
        <div>
          <Card inverse style={{
              width: "100%",
              cursor: "pointer",
            }}
            >
            <CardImg width="100%" src={props.item.img} alt={props.item.item} />
            <CardImgOverlay>
              <CardTitle>{props.item.item}</CardTitle>
              <CardText>{
              props.item.description}</CardText>
              {/* <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText> */}
            </CardImgOverlay>
          </Card>
        </div>
      );
}

export default MenuMaker