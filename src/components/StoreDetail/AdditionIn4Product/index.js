import './AdditionProduct.scss';
function AdditionIn4Product({ ...props }) {
    const { dimension } = props;
    const { color } = props;
    const { origin } = props;
    const { ingredient } = props;

    return (
        <div className="additional-infor">
            <ul className="list-in4">
                <li className="specific-in4">
                    <span className="label">Dimension</span>
                    <span className="p-text">{dimension}</span>
                </li>
                <li className="specific-in4">
                    <span className="label">Color</span>
                    <span className="p-text">{color}</span>
                </li>
                <li className="specific-in4">
                    <span className="label">Origin</span> 
                    <span className="p-text">{origin}</span>
                </li>
                <li className="specific-in4">
                    <span className="label">Ingredient</span>
                    <span className="p-text">{ingredient}</span>
                </li>
            </ul>
        </div>
    );
}

export default AdditionIn4Product;
