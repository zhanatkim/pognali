import Calendar from 'react-calendar';
import React, {
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  format,
  differenceInCalendarDays,
  addDays,
  subDays,
} from 'date-fns';
import {ru} from 'date-fns/locale';
import {
  maxCompanions,
  maxTravelDuration,
  minCompanions,
  minTravelDuration,
  ReactCalendarView,
} from '../../utils/const';
import {IconPlay, IconRightArrow, IconTick} from '../svg';
import {Value, ValuePiece} from '../../types/types';
import {useAppDispatch} from '../../hooks';
import {changeDateEnd, changeDateStart, changeDuration} from '../../store/reducers/form/form';

type View = 'month' | 'year' | 'decade' | 'century';

interface IStayDateProps {
  companions: number,
  setCompanions: CallableFunction,
  duration: number,
  setDuration: CallableFunction,
  isWithKids: boolean,
  setIsWithKids: CallableFunction,
  selectedDates: Value,
  setSelectedDates: CallableFunction,
  nextClickHandler: CallableFunction
}

const StayDate: FunctionComponent<IStayDateProps> = (
  {
    companions,
    setCompanions,
    duration,
    setDuration,
    isWithKids,
    setIsWithKids,
    selectedDates,
    setSelectedDates,
    nextClickHandler
  },
) => {
  const dispatch = useAppDispatch();
  const [isVisibleFirstDay, setIsVisibleFirstDay] = useState<boolean>(true);

  const handleCompanionsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    if (value >= minCompanions && value <= maxCompanions) {
      setCompanions(value);
    }
  };

  const handleIncreaseCompanions = () => {
    if (companions < maxCompanions) {
      setCompanions(companions + 1);
    }
  };

  const handleDecreaseCompanions = () => {
    if (companions > minCompanions) {
      setCompanions(companions - 1);
    }
  };

  const handleDurationChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    if (value >= minTravelDuration && value <= maxTravelDuration) {
      setDuration(value);
    }
  };

  const handleIncreaseDuration = () => {
    if(duration < maxTravelDuration) {
      setDuration(duration + 1);
    }
  };

  const handleDecreaseDuration = () => {
    if(duration > minTravelDuration) {
      setDuration(duration - 1);
    }
  };

  const handleWithKidsToggle = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsWithKids(evt.target.checked);
  };

  const handleDateChange = (dates: Value) => {
    if (Array.isArray(dates) && dates.length === 2) {
      const [start, end]: [start: ValuePiece, end: ValuePiece] = dates;
      if (start instanceof Date && end instanceof Date) {
        const daysDifference: number = differenceInCalendarDays(end, start) + 1;
        if (daysDifference < minTravelDuration) {
          setSelectedDates([start, addDays(end, 1)]);
          dispatch(changeDateStart({dateStart: start.toISOString()}));
          dispatch(changeDateEnd({dateEnd: addDays(end, 1).toISOString()}));
        }
        if (daysDifference === minTravelDuration) {
          setSelectedDates([start, end]);
          dispatch(changeDateStart({dateStart: start.toISOString()}));
          dispatch(changeDateEnd({dateEnd: end.toISOString()}));
        }
        if (daysDifference > minTravelDuration) {
          setSelectedDates(dates);
          dispatch(changeDateStart({dateStart: start.toISOString()}));
          dispatch(changeDateEnd({dateEnd: end.toISOString()}));
          dispatch(changeDuration({duration: daysDifference}));
        }
      }
    }
  };

  const isTileDisabled = ({date, view}: {date: Date; view: View}): boolean => {
    if (view === ReactCalendarView.month) {
      const today: Date = new Date();
      return date <= subDays(today, 1) || date > addDays(today, maxTravelDuration);
    }
    return false;
  };

  const isStartTile = (date: Date): boolean => {
    if (Array.isArray(selectedDates) && selectedDates[0]) {
      return date.toDateString() === selectedDates[0].toDateString();
    }
    return false;
  };

  const isEndTile = (date: Date): boolean => {
    if (Array.isArray(selectedDates) && selectedDates[1]) {
      return date.toDateString() === selectedDates[1].toDateString();
    }
    return false;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsVisibleFirstDay(false);
      } else {
        setIsVisibleFirstDay(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <li className="order-form__item">
      <div className="order-form__item-wrap">
        <div className="order-form__header">
          <div className="order-form__description">
            <h3 className="title-h3 order-form__header-title">Шаг 1. Даты пребывания</h3>
            <p className="order-form__header-text">Укажите предпочтительное количество попутчиков, которых
              вы&nbsp;хотели&nbsp;бы&nbsp;позвать в&nbsp;поездку, и ее&nbsp;предполагаемую длительность.
            </p>
          </div>
          <ul className="order-form__way-list">
            <li className="order-form__way-item">
              <span className="order-form__way-item-text">даты</span>
            </li>
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">маршрут</span>
            </li>
            <li className="order-form__way-item order-form__way-item--inactive">
              <span className="order-form__way-item-text">развлечения</span>
            </li>
          </ul>
        </div>

        <div className="order-form__params-block">
          <div className="order-form__column order-form__column--companions">
            <label htmlFor="companions-search" className="order-form__label-wrap">
              <span className="order-form__label order-form__label--type-1">ищу попутчиков:</span>
              <div className="order-form__field-wrap">
                <button type="button" className="order-form__change-btn order-form__change-btn--minus"
                  aria-label="Уменьшить" onClick={handleDecreaseCompanions}
                >
                </button>
                <input type="number" id="companions-search" className="order-form__input-field" min={minCompanions}
                  max={maxCompanions} value={companions} onChange={handleCompanionsChange}
                />
                <button type="button" className="order-form__change-btn order-form__change-btn--plus"
                  aria-label="Увеличить" onClick={handleIncreaseCompanions}
                >
                </button>
              </div>
              <span className="order-form__label order-form__label--type-2">чел.</span>
            </label>
          </div>
          <div className="order-form__column order-form__column--duration">
            <label htmlFor="duration" className="order-form__label-wrap">
              <span className="order-form__label order-form__label--type-1">длительность:</span>
              <div className="order-form__field-wrap">
                <button type="button" className="order-form__change-btn order-form__change-btn--minus"
                  aria-label="Уменьшить" onClick={handleDecreaseDuration}
                >
                </button>
                <input type="number" id="duration" className="order-form__input-field" value={duration}
                  min={minTravelDuration} max={maxTravelDuration} onChange={handleDurationChange}
                />
                <button type="button" className="order-form__change-btn order-form__change-btn--plus"
                  aria-label="Увеличить" onClick={handleIncreaseDuration}
                >
                </button>
              </div>
              <span className="order-form__label order-form__label--type-2 order-form__label--type-3">дн.</span>
            </label>
          </div>

          <div className="order-form__column order-form__column--kids custom-toggle custom-toggle--checkbox">
            <label>
              <input type="checkbox" value="with-kids" name="with-kids" onChange={handleWithKidsToggle}
                checked={isWithKids}
              />
              <span className="custom-toggle__icon">
                {isWithKids && <IconTick />}
              </span>
              <span className="custom-toggle__label">можно с детьми</span>
            </label>
          </div>
        </div>

        <div className="calendar calendar--wrap">
          <Calendar
            selectRange
            onChange={handleDateChange}
            value={selectedDates}
            tileDisabled={isTileDisabled}
            // view={"month"}
            next2Label={null}
            prev2Label={null}
            nextLabel={<IconRightArrow />}
            prevLabel={<IconRightArrow />}
            nextAriaLabel={'Следующий месяц'}
            prevAriaLabel={'Предыдущий месяц'}
            locale="ru-RU"
            navigationLabel={({date}: {
              date: Date,
              label: string,
              locale: string | undefined,
              view: View
            }) => {
              const labelDate: Date = new Date(date);
              const formattedDate: string = format(labelDate, 'LLLL yyyy', {locale: ru});
              return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
            }}
            formatDay={(_locale: string | undefined, date: Date): string => {
              const tileDate: Date = new Date(date);
              const isFirstDay: boolean = tileDate.getDate() === 1;
              if (isFirstDay && isVisibleFirstDay) {
                return format(date, 'd MMM', {locale: ru}).replace(/\.$/, '');
              } else {
                return format(date, 'd', {locale: ru});
              }
            }}
            tileContent={({date, view}): ReactNode | null => {
              if (view === ReactCalendarView.month) {
                if (isStartTile(date)) {
                  return <span className={'calendar__day-description'}>Заезд</span>;
                }
                if (isEndTile(date)) {
                  return <span className={'calendar__day-description'}>Выезд</span>;
                }
              }
              return null;
            }}
          />
        </div>

        <button type="button" className="button button--next-step" onClick={() => nextClickHandler()}>
          Следующий шаг
          <IconPlay />
        </button>
      </div>
    </li>
  );
};

export default StayDate;
