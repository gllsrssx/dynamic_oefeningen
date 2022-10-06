export function Element(props) {
    const {name, style, value} = props;
    if (!value) return;

    const allStyle ={...style,fontSize:"14px"}
    return <div style={allStyle}>{name? name+":":""}{value}</div>
}