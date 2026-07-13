import { Link, useNavigate, useParams } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import { ROUTER } from '../../router/router';
import { useContext, useMemo, useState } from 'react';
import cardList from '../../data';
import {
  AuthContext,
  TasksContext,
  ThemeContext,
} from '../../context/contextApi';
import {
  SBBtn,
  SBGroup,
  SBlock,
  SBtn,
  SClose,
  SContainer,
  SContent,
  SFArea,
  SFBlock,
  SForm,
  SInput,
  SPopBrowse,
  SSParag,
  SStatus,
  SSTheme,
  SSThemes,
  STitle,
  STop,
  SWrap,
} from './PopBrowse.styled';

function PopBrowse() {
  const { id } = useParams();
  const { tasks, deleteTask, updateTask } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const task = tasks.find((task) => task._id === id);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { theme } = useContext(ThemeContext);

  const canEdit = task && task.authorId === user.id;

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      navigate(ROUTER.main);
    } catch (error) {
      setError(error.message);
    }
  };

  const themeClassMap = {
    'Web Design': '_orange',
    Research: '_green',
    Copywriting: '_purple',
  };
  const themeClass = themeClassMap[task?.topic] || '_gray';

  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(task?.status || 'Без статуса');
  const [title, setTitle] = useState(task?.title || 'Новая задача');
  const [description, setDescription] = useState(task?.description);
  const [date, setDate] = useState(task?.date);

  const statuses = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
  ];

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      setError('Заполните все поля');
      return;
    }
    try {
      await updateTask(task._id, {
        ...task,
        status,
        title: title.trim(),
        description: description.trim(),
        date,
      });

      navigate(ROUTER.main);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancel = () => {
    setStatus(task.status);
    setTitle(task.title);
    setDescription(task.description);
    setDate(task.date);

    setIsEditing(false);
  };

  return (
    <SPopBrowse id="popBrowse">
      <SContainer>
        <SBlock
          style={{
            border:
              theme === 'light'
                ? '0.7px solid #d4dbe5'
                : 'border: 0.7px solid #4E5566',
            backgroundColor: theme === 'light' ? '#ffffff' : '#20202C',
          }}
        >
          <SContent>
            <STop>
              {isEditing ? (
                <SInput
                  style={{
                    color: theme === 'light' ? '#000' : '#fff',
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <STitle
                  style={{
                    color: theme === 'light' ? '#000' : '#fff',
                  }}
                >
                  {title}
                </STitle>
              )}

              <div
                className={`categories__theme theme-top ${themeClass} _active-category`}
              >
                <p className={themeClass}>{task?.topic}</p>
              </div>
            </STop>

            <SStatus>
              <SSParag
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                }}
              >
                Статус
              </SSParag>

              <SSThemes>
                {!isEditing ? (
                  <SSTheme
                    style={{
                      color: theme === 'light' ? '#fff' : '#151419',
                    }}
                  >
                    <p>{status}</p>
                  </SSTheme>
                ) : (
                  statuses.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setStatus(item)}
                      className={`status__theme ${
                        item === status ? '_active-status' : '_inactive-status'
                      }`}
                    >
                      <p>{item}</p>
                    </button>
                  ))
                )}
              </SSThemes>
            </SStatus>

            <SWrap>
              <SForm>
                <SFBlock>
                  <label
                    style={{
                      color: theme === 'light' ? '#000' : '#fff',
                    }}
                  >
                    Описание задачи
                  </label>

                  <SFArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    readOnly={!isEditing}
                    style={{
                      background: theme === 'light' ? '#eaeef6' : '#151419',
                      border:
                        theme === 'light'
                          ? '0.7px solid rgba(148, 166, 190, 0.4)'
                          : '0.7px solid #151419',
                    }}
                  />
                </SFBlock>
              </SForm>

              <Calendar date={date} setDate={setDate} isEditing={isEditing} />
            </SWrap>

            <SBtn>
              <SBGroup>
                {isEditing ? (
                  <>
                    <SBBtn
                      style={{
                        background: theme === 'light' ? '#565EEF' : '#565EEF',
                        color: theme === 'light' ? '#fff' : '#fff',
                      }}
                      onClick={handleSave}
                    >
                      Сохранить
                    </SBBtn>
                    <SBBtn onClick={handleCancel}>Отменить</SBBtn>
                  </>
                ) : (
                  <SBBtn onClick={() => setIsEditing(true)}>
                    Редактировать задачу
                  </SBBtn>
                )}

                <SBBtn onClick={handleDelete}>Удалить задачу</SBBtn>
              </SBGroup>

              <SClose to={ROUTER.main}>Закрыть</SClose>
            </SBtn>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </SContent>
        </SBlock>
      </SContainer>
    </SPopBrowse>
  );
}

export default PopBrowse;
