import {ChangeEvent, FormEvent, FunctionComponent, useState} from 'react';
import {IconPlay} from '../svg';
import {maxActionPlan, minActionPlan} from '../../utils/const';
import {EntertainmentType} from '../../types/state';
import {CountriesType} from '../../types/types';

interface IEntertainmentProps {
  entertainmentData: EntertainmentType[],
  places: CountriesType,
  prevClickHandler: CallableFunction,
  onSubmit: CallableFunction ,
  isValid: boolean,
  setEntertainment: (({target}: ChangeEvent<HTMLTextAreaElement>) => void)
}

const Entertainment: FunctionComponent<IEntertainmentProps> = (
  {
    entertainmentData,
    places,
    prevClickHandler,
    onSubmit,
    isValid,
    setEntertainment
  },
) => {
  const [isValidPlan, setIsValidPlan] = useState<number[]>([]);
  const handlePlanDescriptionChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = evt.target.value;
    if (value.length <= maxActionPlan) {
      if (isValidPlan.some((el) => el === Number(evt.target.id))) {
        const errTextIdsArray = isValidPlan.filter((el) => el !== (Number(evt.target.id)));
        setIsValidPlan(errTextIdsArray);
      }
      setEntertainment(evt);
    }
    if (!value) {
      const errTextIdsArray = [...isValidPlan].concat(Number(evt.target.id));
      setIsValidPlan(errTextIdsArray);
    }
  };

  const checkFormBeforeSubmit = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if(places.length > entertainmentData.length) {
      setIsValidPlan(places.map((place) => place.id).filter((el) => !entertainmentData.some((item) => item.countryId === el)));
    } else {
      onSubmit();
    }
  };

  return (
    <li className="order-form__item">
      <div className="order-form__item-wrap">
        <div className="order-form__header order-form__header--mb">
          <div className="order-form__description">
            <h3 className="title-h3 order-form__header-title">Шаг 3. Развлечения</h3>
            <p className="order-form__header-text">Наконец, расскажите о&nbsp;своих планах времяпровождения.
              Можно&nbsp;писать&nbsp;в&nbsp;свободной форме и&nbsp;ставить тэги.
            </p>
          </div>
          <ul className="order-form__way-list">
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">даты</span>
            </li>
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">маршрут</span>
            </li>
            <li className="order-form__way-item">
              <span className="order-form__way-item-text">развлечения</span>
            </li>
          </ul>
        </div>

        <div className="order-form__row order-form__row--mb">
          <ul className="order-form__location-list">
            {places.map((place) => {
              const text = entertainmentData.filter((item) => item.countryId === place.id).length > 0 ?
                entertainmentData.filter((item) => item.countryId === place.id)[0].text :
                '';
              return (
                <li className="order-form__locaton-item" key={place.id}>
                  <div className={`custom-textarea ${isValidPlan.includes(place.id) ? 'is-error' : ''}`}>
                    <div className="custom-textarea__wrap">
                      <label htmlFor="plan-action-1">
                        <span className="custom-textarea__label">{place.name}</span>
                      </label>
                      <div className="custom-textarea__image-wrap">
                        <div className="custom-textarea__image">
                          <img src={place.flag} alt={place.name} />
                        </div>
                      </div>
                    </div>
                    <textarea name="plan-action-1" id={place.id.toString()} placeholder="План действий"
                      minLength={minActionPlan} maxLength={maxActionPlan}
                      onChange={handlePlanDescriptionChange}
                      value={text}
                    >
                    </textarea>
                    {isValidPlan.includes(place.id) && (
                      <div className="custom-textarea__error">
                        <span>Это поле должно быть заполнено</span>
                      </div>
                    )}
                  </div>
                </li>
              );
            }
            )}
          </ul>
        </div>

        <div className="order-form__row order-form__row--action">
          <button type="button" className="button button--send" onClick={checkFormBeforeSubmit} disabled={!isValid}>
            Отправить
            <IconPlay />
          </button>
          <button type="button" className="button button--prev" onClick={() => prevClickHandler()}>
            На шаг назад
            <IconPlay />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Entertainment;
