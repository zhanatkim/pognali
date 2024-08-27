import React, {FunctionComponent, useEffect, useState} from 'react';
import Header from '../components/base/header';
import Footer from '../components/base/footer';
import StayDate from '../components/stay-date/stay-date';
import TravelRoute from '../components/travel-route/travel-route';
import Entertainment from '../components/entertainment/entertainment';
import DirectionsForm from '../components/directions-form/directions-form';
import {Value} from '../types/types';
import {useFormData} from '../hooks/use-form-data';

const FormPage: FunctionComponent = () => {
  const [
    step,
    personsCount,
    duration,
    startDate,
    endDate,
    isValid,
    countries,
    placesData,
    entertainmentData,
    changePersonsCountHandler,
    changeDurationHandler,
    onChangeEntertainment,
    onSubmit,
    nextClickHandler,
    prevClickHandler
  ] = useFormData();

  const [isWithKids, setIsWithKids] = useState<boolean>(true);
  const [selectedDates, setSelectedDates] = useState<Value>(new Date());

  useEffect(() => {
    if (startDate.length !== 0 && endDate.length !== 0) {
      setSelectedDates([new Date(startDate), new Date(endDate)]);
    } else {
      setSelectedDates(new Date());
    }
  }, [startDate, endDate]);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <DirectionsForm>
          <div className="main__wrapper">
            <div className="order-form">
              <div className="order-form__wrapper">
                <div className="container">
                  <h3 className="title-h3 order-form__title">Добавить план:</h3>
                  <ul className="order-form__list">
                    {step === 1 &&
                      <StayDate
                        companions={personsCount}
                        setCompanions={changePersonsCountHandler}
                        duration={duration}
                        setDuration={changeDurationHandler}
                        isWithKids={isWithKids}
                        setIsWithKids={setIsWithKids}
                        selectedDates={selectedDates}
                        setSelectedDates={setSelectedDates}
                        nextClickHandler={nextClickHandler}
                      />}
                    {step === 2 &&
                      <TravelRoute
                        places = {placesData}
                        countries={countries}
                        nextClickHandler={nextClickHandler}
                        prevClickHandler={prevClickHandler}
                      />}
                    {step === 3 &&
                      <Entertainment
                        entertainmentData={entertainmentData}
                        places={placesData}
                        prevClickHandler={prevClickHandler}
                        onSubmit={onSubmit}
                        isValid={isValid}
                        setEntertainment={onChangeEntertainment}
                      />}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DirectionsForm>
      </main>
      <Footer/>
    </div>
  );
};

FormPage.displayName = 'Направления';

export default FormPage;
