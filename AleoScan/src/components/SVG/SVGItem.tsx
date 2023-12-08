
export default function SVGItem ({fill} : {fill : string}) {
    return (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.314941" width="7" height="7" rx="1" fill={fill}/>
            <rect x="0.314941" y="10" width="7" height="7" rx="1" fill={fill}/>
            <rect x="10.3149" width="7" height="7" rx="1" fill={fill}/>
            <rect x="10.3149" y="10" width="7" height="7" rx="1" fill={fill}/>
        </svg>
    )
}