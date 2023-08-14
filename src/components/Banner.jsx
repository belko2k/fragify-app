import style from '../styles/Banner.module.css';

const Banner = ({ title }) => {
  return <div className={style.banner}>{title}</div>;
};

export default Banner;
