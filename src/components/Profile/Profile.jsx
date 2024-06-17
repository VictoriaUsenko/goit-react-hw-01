import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.item}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userContact}>@{tag}</p>
        <p className={css.userContact}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
