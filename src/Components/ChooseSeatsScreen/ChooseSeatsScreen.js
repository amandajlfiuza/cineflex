import './ChooseSeatsScreen.css';
import Command from '../Command/Command';
import Seats from '../Seats/Seats';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import Button from '../Button/Button';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';

export default function ChooseSeatsScreen() {
    return (
        <div className='choise-seats'>
            <Command title='Selecione o(s) assento(s)' />
            <Seats />
            <PurchaseForm />
            <Button title="Reservar assento(s)" />
            <MovieBaseboard />
        </div>
    )
}