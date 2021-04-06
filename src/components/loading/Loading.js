import preloader from '../../assets/preloader.svg'
import s from './loading.module.css'

function Loading(){
    return(
        <div className={s.loading}>
            <img src={preloader} />
        </div>
    )
}
export default Loading