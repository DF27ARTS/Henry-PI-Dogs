import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import DogCard from '../DogCard/DogCard';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import 
{
  getAllDogs, GetAndShowAllDogs, MoveForward, MoveBachward, FilterByAlphabeticalOder
}  
from '../../redux/actions';


export default function Home(){


  const dispatch = useDispatch();
  let  ShowDogs = useSelector(state => state.ShowDogs);
  let  Current = useSelector(state => state.Current);
  let  AllDogs = useSelector(state => state.AllDogs);
  
  
  useEffect( ()=>{
      if(Current === 0) {
      dispatch(getAllDogs())
    }
  },[])
  const value = Math.ceil(AllDogs.length / 8);
  let Dogs = AllDogs.slice(0,Math.ceil(AllDogs.length / 8));

  return (
    <div className="app-container-img" >

      <div className="app-container-back" >

        <NavBar/>
        
        
        <div className='main-container' >

          <div className='container-buttons' >
            <label for='filterBy' >Filter By</label>
            <input type='checkbox' id='filterBy' />

            <div className='container-filter' >
              <ul className={'filter-name' } >
                <li><button className='oder-by'>Order By</button>
                  <ul className='buttons-filter' >
                    <li><button className='btn-filter' >Order by Name</button>
                      <ul className='buttons-filter-name' >
                        <li><button className='sub-btn-filter' onClick={() => dispatch(FilterByAlphabeticalOder('A-Z'))} >A - Z</button></li>
                        <li><button className='sub-btn-filter' onClick={() => dispatch(FilterByAlphabeticalOder('Z-A'))} >Z - A</button></li>
                      </ul>
                    </li>
                    <li><button className='btn-filter Weight' >Order by Weight</button>
                      <ul className='buttons-filter-name W' >
                        <li><button className='sub-btn-filter' onClick={() => dispatch(FilterByAlphabeticalOder('A-Z'))} >Greater</button></li>
                        <li><button className='sub-btn-filter' onClick={() => dispatch(FilterByAlphabeticalOder('A-Z'))} >smaller</button></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

            {
              ShowDogs.length ?
              (
                <div className='paginado' >
                  <button className={ value === 1 ? 'block' : 'btn-buttons' } onClick={() => dispatch(MoveBachward())}>Back</button>
                  <div className='container-paginado ' >
                    
                    <button className={ value + 1 <= 1 ? 'block' :  Current === 1 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(1))} >1</button>
                    <button className={ value + 1 <= 2 ? 'block' :  Current === 2 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(2))} >2</button>
                    <button className={ value + 1 <= 3 ? 'block' :  Current === 3 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(3))} >3</button>
                    <button className={ value + 1 <= 4 ? 'block' :  Current === 4 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(4))} >4</button>
                    <button className={ value + 1 <= 5 ? 'block' :  Current === 5 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(5))} >5</button>
                    <button className={ value + 1 <= 6 ? 'block' :  Current === 6 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(6))} >6</button>
                    <button className={ value + 1 <= 7 ? 'block' :  Current === 7 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(7))} >7</button>
                    <button className={ value + 1 <= 8 ? 'block' :  Current === 8 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(8))} >8</button>
                    <button className={ value + 1 <= 9 ? 'block' :  Current === 9 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(9))} >9</button>
                    <button className={ value + 1 <= 10 ? 'block' : Current === 10 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(10))} >10</button>
                    <button className={ value + 1 <= 11 ? 'block' : Current === 11 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(11))} >11</button>
                    <button className={ value + 1 <= 12 ? 'block' : Current === 12 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(12))} >12</button>
                    <button className={ value + 1 <= 13 ? 'block' : Current === 13 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(13))} >13</button>
                    <button className={ value + 1 <= 14 ? 'block' : Current === 14 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(14))} >14</button>
                    <button className={ value + 1 <= 15 ? 'block' : Current === 15 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(15))} >15</button>
                    <button className={ value + 1 <= 16 ? 'block' : Current === 16 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(16))} >16</button>
                    <button className={ value + 1 <= 17 ? 'block' : Current === 17 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(17))} >17</button>
                    <button className={ value + 1 <= 18 ? 'block' : Current === 18 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(18))} >18</button>
                    <button className={ value + 1 <= 19 ? 'block' : Current === 19 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(19))} >19</button>
                    <button className={ value + 1 <= 20 ? 'block' : Current === 20 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(20))} >20</button>
                    <button className={ value + 1 <= 21 ? 'block' : Current === 21 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(21))} >21</button>
                    <button className={ value + 1 <= 22 ? 'block' : Current === 22 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(22))} >22</button>
                    <button className={ value + 1 <= 23 ? 'block' : Current === 23 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(23))} >23</button>
                    <button className={ value + 1 <= 24 ? 'block' : Current === 24 ? 'btns btn-active' : 'btns'} onClick={() => dispatch(GetAndShowAllDogs(24))} >24</button>
                  </div>
                  <button  className={ value === 1 ? 'block' : 'btn-buttons' }  onClick={() => dispatch(MoveForward())}>Ahead</button>
                </div>
              ): (<div></div>)
            }
          <div className='container-dogs' >
            {
              ShowDogs.length ? 
              ShowDogs.map((dog) =>
                <DogCard
                  key={dog.id}
                  id={dog.id}
                  image={dog.image} 
                  name={dog.name}
                  weight={dog.weight.imperial}
                  temperaments={dog.temperament}
                />
              ) : <Loading/>
            }
          </div>

        </div>
        <div className='left-menu' >
          <label for='filterBy' >X</label>

        </div>
      </div>
    </div>
  )
}