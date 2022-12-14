import classes from './HeroTitle.module.scss';
import paths from '../paths';

type HeroTitleProps = {
    className?: string
}

const HeroTitle = (props: HeroTitleProps) => {

    return (
        <svg
            className={props.className}
            width="543" height="293" viewBox="0 0 543 293" fill="none" 
        >
            <g stroke="#222433" fill="#222433" fillOpacity={0} className={classes['draw-path']}>
                ${ paths.HERO_TITLE.map((m, i) =>
                    <path d={m} className={classes["offset-"+i]} key={i} />
                ) }
            </g>
        </svg>
    );

    // render all the paths in the hero title path array
    // and add a separate animation offset class to each

}

export default HeroTitle;