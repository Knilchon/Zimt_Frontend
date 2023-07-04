const sidebar = (props: any, fickDichAlter=false) => {


    return(
        <div className={props.className}>
            {props.children}

            {props.fickDichAlter ? <h1>Du Hurensohn</h1> : ''}

        </div>
    )
}

export default sidebar