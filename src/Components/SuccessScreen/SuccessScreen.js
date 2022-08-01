import './SuccessScreen.css';
import Button from '../Button/Button';
import { useLocation, Link } from 'react-router-dom';

function Topic({title,subtitle1,subtitle2}) {
    return (
        <div className='topic'>
            <div className='title-topic'>{title}</div>
            <div className='subtitle-topic'>{subtitle1}</div>
            <div className='subtitle-topic'>{subtitle2}</div>
        </div>
    )
}

export default function SuccessScreen() {
    const location = useLocation();
    const seatsSelected = location.state.seatsSelected;

    return (
        <div className='success'>
            <div className='content-success'>
                <div className='success-message'>
                    Pedido feito com sucesso!
                </div>
                <Topic 
                    title="Filme e sessão" 
                    subtitle1={location.state.movie.title} 
                    subtitle2={`${location.state.session.day.date} ${location.state.session.name}`} 
                />
                <div className='topic'>
                    <div className='title-topic'>Ingressos</div>
                        {seatsSelected.map((seat, index) => (
                            <div key={index} className='subtitle-topic'>{`Assento ${seat}`}</div>
                        ))}
                </div>
                <Topic 
                    title="Comprador" 
                    subtitle1={`Nome: ${location.state.nameBuyer}`} 
                    subtitle2={`CPF: ${location.state.document}`} 
                />
            </div>
            <Link to="/">
                <Button title="Voltar para Home" />
            </Link>
        </div>
    )
}