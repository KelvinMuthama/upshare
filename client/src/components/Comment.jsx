import React from "react";
import styled from "styled-components";
import Profile from "../images/avatar.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={Profile} />
      <Details>
        <Name>
          Kelvin Kamau <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          repudiandae aliquid deserunt accusamus mollitia perspiciatis ipsa
          beatae soluta cupiditate expedita adipisci laudantium in vero
          consequuntur, porro dolor quasi aut fugit.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
