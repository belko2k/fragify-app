import style from '../styles/Banner.module.css';

const Banner = (props) => {
  const { content } = props;

  return <div className={style.banner}>{content.title}</div>;
};

export default Banner;
