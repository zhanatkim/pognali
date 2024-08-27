import React from 'react';
import useDeviceDetect from '../../customHooks/useDeviceDetect';
import TravelerCardTransport from './traveler-card-transport';
import TravelerCardGrade from './traveler-card-grade';
import TravelerCardLikes from './traveler-card-likes';
import TravelerCardFlags from './traveler-card-flags';
import Img from '../../components/utils/img';
import {usePlaceData} from '../../hooks/use-place-data';

export interface TravelerCardProps {
  cardData: {
    id: number;
    name: string,
    photo: string,
    places: number[],
    tags: string,
    transport: string[],
    level: number,
    isOnline?: boolean,
    likesCount?: number,
    token?: string,
  };
  userToken?: string
}

const TravelerCard: React.FC<TravelerCardProps> = (
  {
    cardData: {
      name,
      photo,
      tags,
      level,
      places,
      transport,
      isOnline = Boolean(Math.floor(Math.random())),
      likesCount = Math.floor(Math.random() * 99),
      token
    },
    userToken
  },
) => {
  const onlineOfflineState = isOnline ? 'is-online' : 'is-offline';

  const {isMobile, isTablet} = useDeviceDetect();

  const placesData = usePlaceData(places);

  return (
    <>
      {isMobile &&
        <div className={'traveler-card'}>
          <div className="traveler-card__wrapper">
            <div className="traveler-card__top">
              <div className="traveler-card__image">
                <Img src={photo} altText={name} width={285} height={285} />
              </div>
              <div className="traveler-card__header">
                <h3 className="traveler-card__title">{name}</h3>
                <span className={`traveler-card__mark traveler-card__mark--${onlineOfflineState}`}></span>
              </div>
              {userToken !== token &&
                <TravelerCardLikes likesCount={likesCount} className={'traveler-card__likes'} />}
              <p className="traveler-card__tags">{tags.replaceAll(',', ' ')}</p>
            </div>
            <div className="traveler-card__center">
              <TravelerCardFlags
                className="traveler-card__flags"
                flags={placesData}
              />
            </div>
            <div className="traveler-card__bottom">
              <TravelerCardTransport transport={transport} />
              <TravelerCardGrade className={'traveler-card__grade'} grade={level} />
              {userToken !== token &&
                <button className="traveler-card__btn">
                  <span>Позвать!</span>
                </button>}
            </div>
          </div>
        </div>}
      {isTablet &&
        <div className={'traveler-card'}>
          <div className="traveler-card__wrapper">
            <div className="traveler-card__top">
              <div className="traveler-card__image">
                <Img src={photo} altText={name} width={285} height={285} />
              </div>
              <div className="traveler-card__center">
                <div className="traveler-card__header">
                  <h3 className="traveler-card__title">{name}</h3>
                  <span className={`traveler-card__mark traveler-card__mark--${onlineOfflineState}`}></span>
                </div>
                <p className="traveler-card__tags">{tags.replaceAll(',', ' ')}</p>
                {userToken !== token &&
                  <>
                    <button className="traveler-card__btn">
                      <span>Позвать!</span>
                    </button>
                    <TravelerCardLikes likesCount={likesCount} className={'traveler-card__likes'} />
                  </>}
              </div>
              <div className="traveler-card__right">
                <TravelerCardTransport transport={transport} />
                <TravelerCardGrade className={'traveler-card__grade'} grade={level} />
              </div>
            </div>
            <div className="traveler-card__bottom">
              <TravelerCardFlags
                className="traveler-card__flags"
                flags={placesData}
              />
            </div>
          </div>
        </div>}
      {!isMobile && !isTablet &&
        <div className={'traveler-card'}>
          <div className="traveler-card__image">
            <Img src={photo} altText={name} width={285} height={285} />
          </div>
          <div className="traveler-card__wrapper">
            <div className="traveler-card__top">
              <div className="traveler-card__header">
                <span className={`traveler-card__mark traveler-card__mark--${onlineOfflineState}`}></span>
                <h3 className="traveler-card__title">{name}</h3>
              </div>
              <p className="traveler-card__tags">{tags.replaceAll(',', ' ')}</p>
              <TravelerCardFlags
                className="traveler-card__flags"
                flags={placesData}
              />
            </div>
            <div className="traveler-card__bottom">
              <div className="traveler-card__center">
                {userToken !== token &&
                  <>
                    <button className="traveler-card__btn">
                      <span>Позвать!</span>
                    </button>
                    <TravelerCardLikes likesCount={likesCount} className={'traveler-card__likes'} />
                  </>}
              </div>
              <TravelerCardTransport transport={transport} />
              <TravelerCardGrade className={'traveler-card__grade'} grade={level} />
            </div>
          </div>
        </div>}
    </>);
};

export default TravelerCard;
