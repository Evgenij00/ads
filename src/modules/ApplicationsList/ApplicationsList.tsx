import React from 'react'
import styled from 'styled-components'
import { BsSortDownAlt } from 'react-icons/bs'
import { IoEllipsisVerticalSharp } from 'react-icons/io5'

import { Header } from 'common'
import { applicationsList } from './data'

export const ApplicationsList: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header title="Заявки" />

      <ApplicationsContainer>
        <ApplicationsHeader>
          <ApplicationsTitle>Список заявок</ApplicationsTitle>

          <ApplicationsParams>
            <ApplicationsFilter>
              <BsSortDownAlt style={{ color: '#4b506d' }} />
              <FilterTitle>Сортировка</FilterTitle>
            </ApplicationsFilter>

            <ApplicationsFilter>
              <BsSortDownAlt style={{ color: '#4b506d' }} />
              <FilterTitle>Фильтры</FilterTitle>
            </ApplicationsFilter>
          </ApplicationsParams>
        </ApplicationsHeader>

        <Table>
          <TableHeader>
            <TableCell>№</TableCell>
            <TableCell>Адрес и заявитель</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Исполнитель</TableCell>
            <TableCell>Услуга</TableCell>
          </TableHeader>

          <TableBody>
            {applicationsList.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ColumnNum>
                    <Chip>№ {item.num}</Chip>
                    <TextSecondary>{item.date}</TextSecondary>
                  </ColumnNum>
                </TableCell>

                <TableCell>
                  <AddressAndUser>
                    <TextSecondary>{item.address}</TextSecondary>
                    <TextPrimary>{item.applicant}</TextPrimary>
                  </AddressAndUser>
                </TableCell>

                <TableCell>
                  <ColumnNum>
                    <Chip>{item.status}</Chip>
                    <TextSecondary>{item.statusDate}</TextSecondary>
                  </ColumnNum>
                </TableCell>

                <TableCell>
                  <ColumnAvatar>
                    <BoxAvatar src={item.executorAvatar} />

                    <BoxUser>
                      <TextSecondary>{item.executorName}</TextSecondary>
                      <TextPrimary>{item.executor}</TextPrimary>
                    </BoxUser>
                  </ColumnAvatar>
                </TableCell>

                <TableCell>
                  <ColumnService>
                    <BoxAvatar src={item.executorAvatar} />

                    <BoxService>
                      <ServicePrice>{item.servicePrice}</ServicePrice>
                      <TextSecondary>{item.serviceName}</TextSecondary>
                    </BoxService>

                    <Ellipsis />
                  </ColumnService>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ApplicationsContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: #f7f8fc;
  padding: 30px;
`

const ApplicationsContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 16px;
  margin-top: 54px;
`

const ApplicationsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
`

const ApplicationsTitle = styled.div`
  flex-grow: 1;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.4px;
  color: #252733;
`

const ApplicationsParams = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const ApplicationsFilter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.div`
  margin-left: 8px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #4b506d;
`

const Table = styled.div`
  display: table;
  width: 100%;
`

const TableHeader = styled.div`
  display: table-row;
  height: 30px;

  & > div {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #9fa2b4;
    vertical-align: middle;
  }
`

const TableCell = styled.div`
  display: table-cell;
  border-bottom: 1px solid #dfe0eb;
  vertical-align: middle;

  &:first-of-type {
    padding-left: 30px;
  }

  &:last-of-type {
    padding-right: 30px;
  }
`

const TableRow = styled.div`
  display: table-row;

  & > div {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

const ColumnNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const Chip = styled.div`
  background: #f12b2c;
  border-radius: 100px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding: 5px 12px;
`

const TextSecondary = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #252733;
`

const TextPrimary = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #555765;
`

const AddressAndUser = styled.div``

const ColumnAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BoxAvatar = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  border: 1.5px solid #dfe0eb;
`

const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnService = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BoxService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ServicePrice = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #555765;
  background: #eee515;
  border-radius: 5px;
  padding: 1px 5px;
`

const Ellipsis = styled(IoEllipsisVerticalSharp)`
  cursor: pointer;
  margin-left: auto;
  fill: #727273;
`

const TableBody = styled.div`
  display: table-row-group;
`
