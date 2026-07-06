import styled, { createGlobalStyle } from 'styled-components';

export const SCalendar = styled.div`
  margin-bottom: 20px;
`;

export const STitle = styled.p`
  margin-bottom: 14px;
  padding-left: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding-left: 20px;
`;

export const Deadline = styled.p`
  margin-top: 14px;

  font-size: 10px;
  color: #94a6be;

  span {
    color: #000;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px 15px;
`;

export const Month = styled.h3`
  margin: 0;

  color: #94a6be;

  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 8px;
`;

export const ArrowButton = styled.button`
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;

  color: #94a6be;

  cursor: pointer;

  font-size: 18px;
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    color: #565eef;
  }
`;

export const CalendarGlobalStyle = createGlobalStyle`

.react-datepicker{
    border:none;
    background:#fff;
    font-family: inherit;
    width: 100%;
}


.react-datepicker__header{
    background:#fff;
    border:none;
    padding: 0;
}

.react-datepicker__current-month {
  display: none;
}

.react-datepicker__navigation {
  display: none;
}

.react-datepicker__day-names{
    display:flex;
    justify-content:space-between;
    margin-bottom:12px;
}

.react-datepicker__day-name{
    width:12px;
    height:12px;
    margin:0;

    font-size:12px;
    font-weight:500;
    letter-spacing: -2%;
    color:#94A6BE;
}

.react-datepicker__month{
    margin:0;
}

.react-datepicker__week{
    display:flex;
    justify-content:space-between;
}

.react-datepicker__day{

    display:flex;
    align-items:center;
    justify-content:center;

    margin:2px;

    border-radius:50%;
    width:22px;
    height:22px;

    color:#94A6BE;
    font-size:10px;

    transition:.2s;
}


.react-datepicker__day:hover{
    background:#EDF2F8;
    border-radius: 50%;
}

.react-datepicker__day--selected,
.react-datepicker__day--keyboard-selected{
    background:#94A6BE !important;
    color:#fff !important;
}


.react-datepicker__day--today{
    font-weight:700;
}

.react-datepicker__day--outside-month{
    color:#D4DCE6;
}


/* .react-datepicker__day--disabled{
    color:#D4DCE6;
    cursor:not-allowed;
} */
`;
