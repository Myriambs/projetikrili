import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletStadiums, fetchStadiums } from '../../../api/admin/stadiumApi';
import { setStadium } from '../../../redux/StadiumsSlice';
import { Link, useNavigate } from 'react-router-dom';
import cartetna from './cartetna.css';
import Carduser from './Carduser';

const Cartetna = () => {

  const Sstadium = useSelector(state => state.Stadiums);
  console.log('StadiumsSlice Sstadium Sstadium', Sstadium);
  const dispatch = useDispatch();

  const getAllSstadium = async () => {
    const data = await fetchStadiums();
    console.log('data jeyamil data base', data.stadiums);
    dispatch(setStadium(data.stadiums));
  };

  useEffect(() => {
    getAllSstadium();
  }, []);



  return (
    <>
     <div className="container">

    <div className="box-container">
      {Sstadium.map((el) => (
        <Carduser  el={el}   />
      ))}
      </div>
      </div>
    </>
  );
};

export default Cartetna;

