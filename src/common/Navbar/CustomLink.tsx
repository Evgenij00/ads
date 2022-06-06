import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IProps {
  location: string
  href: string
}

export const CustomLink: React.FC<IProps> = ({ location, href, children }): JSX.Element => {
  return location === href ? (
    <NavActiveItem>
      {children}
      <span />
    </NavActiveItem>
  ) : (
    <NavLink to={href}>{children}</NavLink>
  )
}

const NavLink = styled(Link)`
  display: flex;
  gap: 24px;
  padding: 20px 32px;
  text-decoration: none;

  &:hover {
    background: #3e4049;

    & > div {
      color: #dde2ff;
    }

    & > svg {
      fill: #dde2ff;
    }
  }
`

const NavActiveItem = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  padding: 20px 32px;
  background: #3e4049;

  & > div {
    color: #dde2ff;
  }

  & > svg {
    fill: #dde2ff;
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #dde2ff;
  }
`
