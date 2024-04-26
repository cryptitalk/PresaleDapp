// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
  faTelegram
} from "@fortawesome/free-brands-svg-icons";


// Homepage Home Section
export default function HomeSection()
{
    return (
        <>
            {/* PARALLAX ONE START */}
            <section id="home" className="flex items-center justify-center h-fit min-h-screen bg-fixed bg-center bg-cover bg-[url('/images/bg/16.jpg')]">
                <div className="container mx-auto text-center mt-[100px] md:mt-0">
                    <h5 className="uppercase text-white font-bold">Don't Hesitate to Join</h5>
                    <h2 className="uppercase lead text-white font-bold">ButterflyX is your DePin </h2>
                    <p className="text-orange-400 font-bold">We have millions of devices deployed!</p><br />
                    <p className="text-white"><strong>✓</strong> token generation machine <strong>✓</strong> no cost.
                        <strong>✓</strong> predict weather. <strong>✓</strong> get AI assistance. <strong>✓</strong> passive income. 
                        <strong>✓</strong> rest assure.</p>
                    <br />
                    <a href="https://t.me/R3D4NG3L" target="_blank" className="bg-neutral-900 text-white hover:bg-red-600 active:bg-red-900 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        <span>Join our Telegram <FontAwesomeIcon icon={faTelegram} className="ml-2"/></span>
                    </a>
                </div>
            </section>
            {/* PARALLAX ONE END */}
        </>
    )
}