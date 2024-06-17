import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.infoWrap}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.isOnline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
