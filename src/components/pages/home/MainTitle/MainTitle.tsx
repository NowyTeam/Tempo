import Style from "./MainTitle.module.scss";

const MainTitle = () => {
  return (
    <>
      <div className={Style.Title_Wrapper}>
        <div className={Style.main_title}>
          <h1>
            Стань <span>водителем</span> прямо сейчас и начни{" "}
            <span>зарабатывать !</span>
          </h1>
          <p>
            <span>MangoKG</span> — волшебный мир свободы и заработка! Стань
            таксистом сегодня и ощути ветер перемен вместе с нами!.
          </p>
          <div className={Style.Btn_Wrapper}>
            <button className={`${Style.Discord_Add} ${Style.App_But}`}>
              Стать водителем
            </button>
            <button className={Style.App_But}>Подробнее</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
