function Btn(){
    return (
        <button onMouseOver={onclickaction}>Click here</button>
    );
};

function onclickaction(){
    console.log("Button is clicked !!")
}


export default Btn;