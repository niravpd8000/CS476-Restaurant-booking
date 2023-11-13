import classes from './MealsSummary.module.css';
import GreenButton from "../../reusable/GreenButton";
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import {getFromStorage, getRestIdFromToken} from "../../utils/common";
import StarIcon from '@mui/icons-material/Star';
import {Rating} from "@mui/material";

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
            <div className={"d-flex justify-content-between"}>
                {/*{!getRestIdFromToken() && getFromStorage("accessToken") ?*/}
                {/*    <GreenButton onClick={() => navigate(`/table/${id}`)}>Reserve A Table</GreenButton> : <></>}*/}
                <div>Address: {`${restData?.address?.address}, ${restData?.address?.cityId}, ${restData?.address?.stateId}`}</div>
                {!!restData?.averageOrderRating &&
                    <Rating defaultValue={restData?.averageOrderRating} value={restData?.averageOrderRating} readOnly/>}
            </div>

        </div>
    );
};

export default MealsSummary;
