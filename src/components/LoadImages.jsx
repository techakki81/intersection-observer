import img from '../img/placeholder.jpg'
import { createRef, useEffect, useRef, useState } from "react";


export default function LoadImages({src}) {
    const [entry, updateEntry] = useState(false);
    const node = createRef()
  
    const observer = useRef(
      new window.IntersectionObserver(([entry]) => { 
          console.log(entry);  updateEntry(true)})
    );
  
    let imgSrc = entry?src:"/img/placeholder.jpg"
  
    useEffect(
      () => {
        const { current: currentObserver } = observer;
     //   currentObserver.disconnect();
          currentObserver.observe(node.current);
        //if (node) currentObserver.observe(node);
  
        return () => currentObserver.disconnect();
      },
      [node]
    );


    return (
        <div>
             <img ref = {node} src={src}/>
        </div>
    )
}
