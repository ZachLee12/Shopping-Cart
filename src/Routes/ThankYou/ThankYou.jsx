import './_ThankYou.scss'
import { Link } from 'react-router-dom'

export default function ThankYou() {
    return (
        <div id='ThankYou'>
            <div className="thank-you-content">
                Thank you for hiking with us.👏
            </div>
            <Link to={'/shop'}><button className='shop-more-button'>Shop more</button></Link>
        </div>
    )
}