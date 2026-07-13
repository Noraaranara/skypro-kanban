import { useContext, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import {
  ArrowButton,
  CalendarGlobalStyle,
  CalendarWrapper,
  Deadline,
  Header,
  Month,
  Navigation,
  SCalendar,
  STitle,
} from './Calendar.styled';
import { ThemeContext } from '../../context/contextApi';
registerLocale('ru', ru);

function Calendar({ date, setDate, isEditing }) {
  const { theme } = useContext(ThemeContext);
  return (
    <SCalendar>
      <STitle
        style={{
          color: theme === 'light' ? '#000' : '#fff',
        }}
      >
        Даты
      </STitle>
      <CalendarWrapper
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#20202C',
        }}
      >
        <CalendarGlobalStyle />

        <DatePicker
          inline
          locale="ru"
          selected={date}
          onChange={isEditing ? setDate : undefined}
          disabled={!isEditing}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <Header>
              <Month>{format(date, 'LLLL yyyy', { locale: ru })}</Month>

              <Navigation>
                <ArrowButton onClick={decreaseMonth}>&#8249;</ArrowButton>

                <ArrowButton onClick={increaseMonth}>&#8250;</ArrowButton>
              </Navigation>
            </Header>
          )}
        />

        <Deadline>
          Срок исполнения:{' '}
          <span
            style={{
              color: theme === 'light' ? '#000' : '#fff',
            }}
          >
            {format(date, 'dd.MM.yy')}
          </span>
        </Deadline>
      </CalendarWrapper>
    </SCalendar>
  );
}

export default Calendar;
