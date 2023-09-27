type Style={
    [key:string]:any;
}

export const customizeFavAndShareBtn=(isActive:boolean,theme:string,type:'Fav'|'Share')=>{
    const style:Style={display:'block',width:'calc(50% - 1px)'}
    if(type==='Fav'){
        style.marginRight='1px'
        style.borderRadius='10px 0 0 10px'
    }else{
        style.borderRadius='0 10px 10px 0'
    }

    if(theme==='dark'){
        style.border='none'
        style.padding='19px 0px'
        style.background='#323537'
        if(isActive){
            style.background='#80858B'
        }
    }else{
        style.padding='19px 0px'
        style.background='#fff'
        style.border='1px solid #AFB2B6'
        if(isActive){
            style.background='#80858B'
            style.border='1px solid #80858B'
        }
    }
    return style
}