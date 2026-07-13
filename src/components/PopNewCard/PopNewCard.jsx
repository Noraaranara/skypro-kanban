import { Link, Navigate, useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import { ROUTER } from '../../router/router';
import { TasksContext, ThemeContext } from '../../context/contextApi';
import { useContext, useState } from 'react';
import { postCard } from '../../services/api';
import {
  SBlock,
  SBtn,
  SCategories,
  SClose,
  SContainer,
  SContent,
  SCParag,
  SCThemes,
  SFArea,
  SFBlock,
  SFInput,
  SForm,
  SFSub,
  SNewCard,
  STitle,
  SWrap,
} from './PopNewCard.styled';

function PopNewCard() {
  const { tasks, addTask } = useContext(TasksContext);
  const { theme } = useContext(ThemeContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const onAddTask = async () => {
    if (!taskName.trim() || !taskDescription.trim()) {
      setError('Заполните все поля');
      return;
    }

    try {
      await addTask({
        title: taskName.trim(),
        description: taskDescription.trim(),
        topic: topic,
        status: 'Без статуса',
        date,
      });
      navigate(ROUTER.main);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SNewCard id="popNewCard">
      <SContainer>
        <SBlock
          style={{
            background: theme === 'light' ? '#ffffff' : '#20202C',
            border:
              theme === 'light' ? '0.7px solid #d4dbe5' : '0.7px solid #4E5566',
          }}
        >
          <SContent>
            <STitle
              style={{
                color: theme === 'light' ? '#000' : '#fff',
              }}
            >
              Создание задачи
            </STitle>
            <SClose to={ROUTER.main}>&#10006;</SClose>
            <SWrap>
              <SForm id="formNewCard" action="#">
                <SFBlock>
                  <SFSub
                    htmlFor="formTitle"
                    style={{
                      color: theme === 'light' ? '#000' : '#fff',
                    }}
                  >
                    Название задачи
                  </SFSub>
                  <SFInput
                    value={taskName}
                    onChange={onInputChange}
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </SFBlock>
                <SFBlock>
                  <SFSub
                    style={{
                      color: theme === 'light' ? '#000' : '#fff',
                    }}
                    htmlFor="textArea"
                  >
                    Описание задачи
                  </SFSub>
                  <SFArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  ></SFArea>
                </SFBlock>
              </SForm>
              <Calendar date={date} setDate={setDate} isEditing={true} />
            </SWrap>
            <SCategories>
              <SCParag
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                }}
              >
                Категория
              </SCParag>
              <SCThemes>
                <div
                  className={`categories__theme _orange ${
                    topic === 'Web Design' ? '_active-category' : ''
                  }`}
                  onClick={() => setTopic('Web Design')}
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${
                    topic === 'Research' ? '_active-category' : ''
                  }`}
                  onClick={() => setTopic('Research')}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${
                    topic === 'Copywriting' ? '_active-category' : ''
                  }`}
                  onClick={() => setTopic('Copywriting')}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </SCThemes>
            </SCategories>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <SBtn
              disabled={!taskName.trim()}
              onClick={onAddTask}
              id="btnCreate"
            >
              Создать задачу
            </SBtn>
          </SContent>
        </SBlock>
      </SContainer>
    </SNewCard>
  );
}

export default PopNewCard;
