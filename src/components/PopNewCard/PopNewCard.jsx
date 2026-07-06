import { Link, Navigate, useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import { ROUTER } from '../../router/router';
import { TasksContext } from '../../context/contextApi';
import { useContext, useState } from 'react';
import { postCard } from '../../services/api';

function PopNewCard() {
  const { tasks, addTask } = useContext(TasksContext);
  const [taskName, setTaskName] = useState('');
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const onAddTask = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    await postCard({ token: userInfo.token, card: { title: taskName } });
    setTaskName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
      navigate(ROUTER.main);
    }
  };
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={ROUTER.main} className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    value={taskName}
                    onChange={onInputChange}
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              disabled={!taskName.trim()}
              onClick={onAddTask}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
