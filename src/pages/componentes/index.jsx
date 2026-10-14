import './index.scss'

export default function Cabecalho(props) {
  return (
    <div className="cabecalho">
        <h1>{props.titulo ?? 'Título padrão'}</h1>
    </div>
  )
}