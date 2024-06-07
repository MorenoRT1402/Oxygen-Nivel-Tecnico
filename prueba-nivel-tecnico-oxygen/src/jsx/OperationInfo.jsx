import Cross from '../assets/Cross.svg'

// eslint-disable-next-line react/prop-types
const OperationInfo = ({fav, remove}) => {

    const RemoveFav = () => {
        remove(fav)
    }

    return (
    <article className="min-width">
        <span>{fav}</span>
        <button onClick={RemoveFav}><img src={Cross}></img></button>
    </article>
    )
}

export default OperationInfo