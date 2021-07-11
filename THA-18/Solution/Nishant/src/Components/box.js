import '../Styles/box.css'

function box() {
    let count = 0;
    // true = black and false = white
    let color = new Array(64).fill(true); 
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            if(i%2 === 0) {
                if(j%2 === 0) {
                    color[count] = false;
                    count++;
                } 
                else
                    count++;
            }
            else {
                if(j%2 === 0)
                    count++;
                else {
                    color[count] = false;
                    count++;
                }
            }
        }
    }
    // console.log(color);
    return(
        <div className="box">
            {/* CONSOLE ERROR BECAUSE I DIDN'T GIVE THEIR KEY */}
            {color.map((value, index) => {
                return(
                <div key={index} id="card" className={`${value ? 'black' : 'white'}`}></div>
                );
            })}
        </div>
    );
}

export default box;