import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { AiFillHome, AiFillSetting } from 'react-icons/ai'

import {
  BsNewspaper,
  BsFillBarChartFill,
  BsFillExclamationSquareFill,
  BsFillChatFill,
  BsFillPeopleFill,
} from 'react-icons/bs'

import Logo from 'assets/images/logo.png'
import { CustomLink } from './CustomLink'

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Container>
      <MainLink to="/">
        <LogoIcon src={Logo} alt="логотип" />
        <LogoTitle>АДС “365”</LogoTitle>
      </MainLink>

      <NavList>
        <CustomLink location={pathname} href="/">
          <BsFillBarChartFill style={{ color: '#9FA2B4' }} />
          <NavTitle>Главная</NavTitle>
        </CustomLink>

        <CustomLink location={pathname} href="/requests">
          <BsFillExclamationSquareFill style={{ color: '#9FA2B4' }} />
          <NavTitle>Заявки</NavTitle>
        </CustomLink>

        <CustomLink location={pathname} href="/employees">
          <BsFillPeopleFill style={{ color: '#9FA2B4' }} />
          <NavTitle>Сотрудники</NavTitle>
        </CustomLink>

        <CustomLink location={pathname} href="/houses">
          <AiFillHome style={{ color: '#9FA2B4' }} />
          <NavTitle>Здания</NavTitle>
        </CustomLink>

        <CustomLink location={pathname} href="/news">
          <BsNewspaper style={{ color: '#9FA2B4' }} />
          <NavTitle>Новости</NavTitle>
        </CustomLink>

        <CustomLink location={pathname} href="/appeals">
          <BsFillChatFill style={{ color: '#9FA2B4' }} />
          <NavTitle>Обращения</NavTitle>
        </CustomLink>
      </NavList>

      <Border />

      <NavList>
        <CustomLink location={pathname} href="/settings">
          <AiFillSetting style={{ color: '#9FA2B4' }} />
          <NavTitle>Настройки</NavTitle>
        </CustomLink>
      </NavList>
    </Container>
  )
}

const Container = styled.div`
  background: #363740;
  width: 255px;
`

const MainLink = styled(Link)`
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 37px;
  margin-bottom: 59px;
  text-decoration: none;
`

const LogoIcon = styled.img``

const LogoTitle = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #a4a6b3;
  opacity: 0.7;
`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
`

const Border = styled.span`
  display: block;
  margin: 16px 0;
  height: 1px;
  background: #6d6d70;
`

const NavTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #a4a6b3;
`
