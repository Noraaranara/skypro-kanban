import { Link, useNavigate, useParams } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import { ROUTER } from '../../router/router';
import { useContext, useMemo } from 'react';
import cardList from '../../data';
import { AuthContext, TasksContext } from '../../context/contextApi';

function PopBrowse() {
  const { id } = useParams();
  const { tasks, deleteTask } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const task = tasks.find((task) => task._id === id);
  const navigate = useNavigate();

  const canEdit = task && task.authorId === user.id;
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>

              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>

                <div className="status__theme _gray">
                  <p>Нужно сделать</p>
                </div>

                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>

                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>

                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label>Описание задачи</label>

                  <textarea
                    className="form-browse__area"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__theme _orange _active-category">
                <p>Web Design</p>
              </div>
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  Редактировать задачу
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  Удалить задачу
                </button>
              </div>

              <Link
                to={ROUTER.main}
                className="btn-browse__close _btn-bg _hover01"
              >
                Закрыть
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
