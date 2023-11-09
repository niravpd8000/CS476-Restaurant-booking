import classes from './MealsSummary.module.css';
import GreenButton from "../../reusable/GreenButton";
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import {getRestIdFromToken} from "../../utils/common";

const MealsSummary = ({restData}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <div className={classes.summary}>
            <section>
                <h2 color={"white"}>{restData.name}</h2>
                <p>
                    {restData.description}
                </p>
            </section>
            {!getRestIdFromToken() ?
                <GreenButton onClick={() => navigate(`/table/${id}`)}>Reserve A Table</GreenButton> : <></>}
        </div>
    );
};

export default MealsSummary;
