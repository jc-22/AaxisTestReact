import "./box.css";

function Box(props) {
    return (
        <div
            style={{
                height: props.height,
                width: props.height,
                backgroundColor: props.backgroundColor,
                border: props.border,
                borderRadius: props.borderRadius,
                padding: props.padding,
                paddingTop: props.paddingTop,
                paddingRight: props.paddingRight,
                paddingBottom: props.paddingBottom,
                paddingLeft: props.paddingLeft,
                margin: props.margin,
                marginTop: props.marginTop,
                marginRight: props.marginRight,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
            }}
            className={props.className ? props.className : ""}
        >
            {props.children}
        </div>
    );
}

export default Box;
