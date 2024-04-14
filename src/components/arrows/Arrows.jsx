
import "./Arrows.sass"

const Arrows = () => {
    const btnsList = [{name: "förre", clas: "arrows_prev"}, 
                      {name: "idag", clas: "arrows_now"}, 
                      {name: "nästa", clas: "arrows_next"}];

    const btns = btnsList.map(({clas, name}, i) => {
        return (<button className={clas} key={i} >{name}</button>)
    })

    return (
        <div className="arrows">
            {btns}
        </div>
    )
}


export default Arrows;