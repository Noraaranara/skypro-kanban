import { Button, Mail, Name, Pop, Theme } from './PopUser.styled';

function PopUser() {
  return (
    <Pop id="user-set-target">
      <Name>Ivan Ivanov</Name>
      <Mail>ivan.ivanov@gmail.com</Mail>
      <Theme>
        <p>Темная тема</p>
        <input className="checkbox" type="checkbox" name="checkbox" />
      </Theme>
      <Button type="button">
        <a href="#popExit">Выйти</a>
      </Button>
    </Pop>
  );
}

export default PopUser;
