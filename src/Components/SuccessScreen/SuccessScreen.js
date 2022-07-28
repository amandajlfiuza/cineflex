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
                <Topic title="Filme e sessão" subtitle1="Enola Holmes" subtitle2="24/06/2021 15:00" />
                <Topic title="Ingressos" subtitle1="Assento 15" subtitle2="Assento 16" />
                <Topic title="Comprador" subtitle1="Nome: João da Silva Sauro" subtitle2="CPF: 123.456.789-10" />
            </div>
            <Button title="Voltar para Home" />
        </div>
    )
}