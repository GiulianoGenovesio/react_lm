import '../styles/mapa.css';
const Ejemplo3 = (props) => {
    return (
    <div className="mapa">
            <h1>Ejemplo google maps - CSS</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.219234290195!2d-58.42268252445858!3d-34.598617372956085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de505d84c67e6!2sAv.%20Medrano%20951%2C%20C1179AAQ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721085538375!5m2!1ses!2sar"
            style={{width:850, height:400, border: 0}} title='mapa'></iframe>

</div>
    )
}

export default Ejemplo3;