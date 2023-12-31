import './Page404.scss';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
function Page404() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>

                    <div className="col-sm-10 ">
                        <div className="col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">PETTU 404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>

                                <p>the page you are looking for not avaible!</p>

                                <Link to={routes.home} className="link_404">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </section>
    );
}

export default Page404;
