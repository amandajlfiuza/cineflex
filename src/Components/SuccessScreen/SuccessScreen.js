import './SuccessScreen.css';
import Button from '../Button/Button';

function Topic({title, subtitle1, subtitle2}) {
    return (
        <div className='topic'>
            <div className='title-topic'>{title}</div>
            <div className='subtitle-topic'>{subtitle1}</div>
            <div className='subtitle-topic'>{subtitle2}</div>
        </div>
    )
}

export default function SuccessScreen() {
    return (
        <div className='success'>
            <div className='content-success'>
                <div className='success-message'>
                    Pedido feito com sucesso!
                </div>
                <Topic title="Filme e sessão" subtitle1="{movie.title}" subtitle2="{`${sessions.date} ${sessions.name}`}" />
                <Topic title="Ingressos" subtitle1={`Assento 15`} subtitle2="Assento 16" />
                <Topic title="Comprador" subtitle1={`Nome: {nameBuyer}`} subtitle2={`CPF: {document}`} />
            </div>
            <Button title="Voltar para Home" />
        </div>
    )
}