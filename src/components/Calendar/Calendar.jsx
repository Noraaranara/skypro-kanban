import {
  Action,
  Actions,
  Block,
  Cell,
  Cells,
  Content,
  Day,
  Days,
  Item,
  Month,
  Nav,
  Paragraph,
  Period,
  Title,
} from './Calendar.styled';

function Calendar() {
  return (
    <Item>
      <Title>Даты</Title>
      <Block>
        <Nav>
          <Month>Сентябрь 2023</Month>
          <Actions>
            <Action data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </Action>
            <Action data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </Action>
          </Actions>
        </Nav>
        <Content>
          <Days>
            <Day>пн</Day>
            <Day>вт</Day>
            <Day>ср</Day>
            <Day>чт</Day>
            <Day>пт</Day>
            <Day>сб</Day>
            <Day>вс</Day>
          </Days>
          <Cells>
            <Cell $isOtherMonth>28</Cell>
            <Cell $isOtherMonth>29</Cell>
            <Cell $isOtherMonth>30</Cell>
            <Cell $isDay>31</Cell>
            <Cell $isDay>1</Cell>
            <Cell $isDay $weekend>
              2
            </Cell>
            <Cell $isDay $weekend>
              3
            </Cell>
            <Cell $isDay>4</Cell>
            <Cell $isDay>5</Cell>
            <Cell $isDay>6</Cell>
            <Cell $isDay>7</Cell>
            <Cell $isDay $current>
              8
            </Cell>
            <Cell $isDay $weekend $active>
              9
            </Cell>
            <Cell $isDay $weekend>
              10
            </Cell>
            <Cell $isDay>11</Cell>
            <Cell $isDay>12</Cell>
            <Cell $isDay>13</Cell>
            <Cell $isDay>14</Cell>
            <Cell $isDay>15</Cell>
            <Cell $isDay $weekend>
              16
            </Cell>
            <Cell $isDay $weekend>
              17
            </Cell>
            <Cell $isDay>18</Cell>
            <Cell $isDay>19</Cell>
            <Cell $isDay>20</Cell>
            <Cell $isDay>21</Cell>
            <Cell $isDay>22</Cell>
            <Cell $isDay $weekend>
              23
            </Cell>
            <Cell $isDay $weekend>
              24
            </Cell>
            <Cell $isDay>25</Cell>
            <Cell $isDay>26</Cell>
            <Cell $isDay>27</Cell>
            <Cell $isDay>28</Cell>
            <Cell $isDay>29</Cell>
            <Cell $isDay $weekend>
              30
            </Cell>
            <Cell $isOtherMonth $weekend>
              1
            </Cell>
          </Cells>
        </Content>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <Period>
          <Paragraph>
            Срок исполнения: <span className="date-control">09.10.23</span>
          </Paragraph>
        </Period>
      </Block>
    </Item>
  );
}

export default Calendar;
