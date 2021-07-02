
import { createRef, useEffect, useRef, useState } from "react";


export default function LazyLoadImage({src,alt=""}) {
    const [entry, updateEntry] = useState(false);
    const [imgSrc , setImageSrc] = useState('../img/placeholder.jpg')

    // needed as we want to give it to observer. We cant use react cc as they are pseudo
    const imgNode = createRef()
  
    // useRef because we do not want to have a different observer everytime the component
    //re loads for eg while changing the src ...
    const observer = useRef(
      new window.IntersectionObserver(([entry]) => { 
          console.log(entry);
           if (entry.intersectionRatio > 0 ) 
                updateEntry(true)
          })
    );

    useEffect(
      () => {
        const { current: currentObserver } = observer;    

           // this is needed so that observer does not fire again and again
           // if(!entry) 
              currentObserver.observe(imgNode.current);
            // else
            //   currentObserver.disconnect();

        return () => currentObserver.disconnect();
      },
      [entry]
    );

    useEffect(
      () => {
        if( entry ){
          setImageSrc(src)
        }         
      },
      [entry]
    )

   console.log(imgSrc)

    return (
        <div className="imgDiv">
             <img alt= {alt} ref = {imgNode} src={imgSrc}/>
        </div>
    )
}
