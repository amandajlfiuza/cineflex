import './ChooseSessionScreen.css';
import Command from '../Command/Command';
import Sessions from '../Sessions/Sessions';
import MovieBaseboard from '../MovieBaseboard/MovieBaseboard';

export default function ChooseSessionScreen() {
    return (
        <>
            <Command />
            <Sessions />
            <MovieBaseboard />
        </>
    )
}