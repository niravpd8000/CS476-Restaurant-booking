import classes from './MealsSummary.module.css';

const MealsSummary = ({restData}) => {
    return (
        <section className={classes.summary}>
            <h2 color={"white"}>{restData.name}</h2>
            <p>
                {restData.description}
            </p>
        </section>
    );
};

export default MealsSummary;
