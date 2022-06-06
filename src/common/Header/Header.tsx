import React from 'react'
import styled from 'styled-components'

import { BsSearch } from 'react-icons/bs'
import { IoNotifications } from 'react-icons/io5'

import Avatar from 'assets/images/avatar.png'

interface IProps {
  title: string
}

export const Header: React.FC<IProps> = ({ title }): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>

      <SearchContainer>
        <SearchInput />

        <Icons>
          <Icon>
            <BsSearch style={{ color: '#C5C7CD' }} />
          </Icon>

          <NotificationIcon>
            <IoNotifications style={{ color: '#C5C7CD' }} />
            <Notification />
          </NotificationIcon>
        </Icons>
      </SearchContainer>

      <Border />

      <ProfileContainer>
        <ProfileName>Шилов Иван</ProfileName>
        <ProfileAvatar src={Avatar} />
      </ProfileContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  width: 100%;
`

const Title = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #252733;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 0 16px;
  width: 100%;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const Icon = styled.div`
  cursor: pointer;
`

const NotificationIcon = styled(Icon)`
  position: relative;
`

const Notification = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background: #3751ff;
  border-radius: 50%;
  border: 1px solid white;
`

const Border = styled.div`
  width: 1px;
  height: 100%;
  margin-left: 32px;
  margin-right: 51px;
  background: #dfe0eb;
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const ProfileName = styled.div`
  white-space: nowrap;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #252733;
`

const ProfileAvatar = styled.img`
  border-radius: 50%;
  border: 1.5px solid #dfe0eb;
`
