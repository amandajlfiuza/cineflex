import './ChooseSeatsScreen.css';
import Command from '../Command/Command';
import Seats from '../Seats/Seats';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import BookSeatsButton from '../BookSeatsButton/BookSeatsButton';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';

export default function ChooseSeatsScreen() {
    return (
        <>
            <Command />
            <Seats />
            <PurchaseForm />
            <BookSeatsButton />
            <MovieBaseboard />
        </>
    )
}